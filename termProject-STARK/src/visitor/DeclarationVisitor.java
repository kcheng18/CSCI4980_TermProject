/*
 * @(#) MethodVisitor.java
 *
 * Copyright 2015-2018 The Software Analysis Laboratory
 * Computer Science, The University of Nebraska at Omaha
 * 6001 Dodge Street, Omaha, NE 68182.
 */
package visitor;

import org.eclipse.jdt.core.dom.ASTVisitor;
import org.eclipse.jdt.core.dom.IMethodBinding;
import org.eclipse.jdt.core.dom.IPackageBinding;
import org.eclipse.jdt.core.dom.ITypeBinding;
import org.eclipse.jdt.core.dom.IVariableBinding;
import org.eclipse.jdt.core.dom.MethodDeclaration;
import org.eclipse.jdt.core.dom.PackageDeclaration;
import org.eclipse.jdt.core.dom.TypeDeclaration;
import org.eclipse.jdt.core.dom.VariableDeclaration;
import org.eclipse.jdt.core.dom.VariableDeclarationFragment;

import graph.model.GClassNode;
import graph.model.GConnection;
import graph.model.GMethodNode;
import graph.model.GNode;
import graph.model.GPackageNode;
import graph.model.GValueNode;
import graph.provider.GModelProvider;

public class DeclarationVisitor extends ASTVisitor {
	private static boolean open = false;
	private static GMethodNode methodToBeOpened;

	public void setOpen(boolean open) {
		DeclarationVisitor.open = open;
	}

	public void setMethodToBeOpened(GMethodNode methodToBeOpened) {
		DeclarationVisitor.methodToBeOpened = methodToBeOpened;
	}

	public boolean visit(PackageDeclaration pkgDecl) {
		insertPackageNode(pkgDecl);
		return super.visit(pkgDecl);
	}

	private void insertPackageNode(PackageDeclaration pkgDecl) {
		IPackageBinding rBinding = pkgDecl.resolveBinding();
		String prjName;
		String nodeName;
		if(open) {
			prjName = methodToBeOpened.getPrjName();
			nodeName = methodToBeOpened.getPkgName();
		}else {
			prjName = rBinding.getJavaElement().getJavaProject().getElementName();
			nodeName = pkgDecl.getName().getFullyQualifiedName();
		}		
		String id = prjName + "." + nodeName;
		if (GModelProvider.instance().getNodeMap().containsKey(id) == false) {
			addNode(new GPackageNode(id, nodeName, prjName));
		}
	}

	/**
	 * A type declaration is the union of a class declaration and an interface
	 * declaration.
	 */
	@Override
	public boolean visit(TypeDeclaration typeDecl) {
		GNode typeNode = insertTypeNode(typeDecl);
		if(typeNode == null) {
			return true;
		}
		GNode pkgGNode = GModelProvider.instance().getNodeMap().get(typeNode.getParent());
		if (pkgGNode == null) {
			throw new RuntimeException();
		}
		addConnection(pkgGNode, typeNode, typeDecl.getStartPosition());
		return super.visit(typeDecl);

	}

	private GNode insertTypeNode(TypeDeclaration typeDecl) {
		ITypeBinding rBinding = typeDecl.resolveBinding();
		String prjName = rBinding.getPackage().getJavaElement().getJavaProject().getElementName();
		String pkgName = rBinding.getPackage().getName();
		String typeName = typeDecl.getName().getFullyQualifiedName();
		
		if(open) {
			String[] id = methodToBeOpened.getId().split("\\.");
			if(!pkgName.equals(methodToBeOpened.getPkgName()) || !typeName.equals(id[2]))
				return null;
		}
		String id = prjName + "." + pkgName + "." + typeName;
		GClassNode n = new GClassNode(id, typeName, prjName + "." + pkgName);
		n.setPkgName(pkgName);
		return addNode(n);
	}

	@Override
	public boolean visit(MethodDeclaration methodDecl) {
		GMethodNode methodNode = (GMethodNode) insertMethodNode(methodDecl);
		if(methodNode == null) {
			return true;
		}
		GNode typeNode = GModelProvider.instance().getNodeMap().get(methodNode.getParent());
		if (typeNode == null) {
			throw new RuntimeException();
		}
		addConnection(typeNode, methodNode, methodDecl.getStartPosition());
		return super.visit(methodDecl);
	}

	private GNode insertMethodNode(MethodDeclaration methodDecl) {
		IMethodBinding rBinding = methodDecl.resolveBinding();
		ITypeBinding typeBinding = rBinding.getDeclaringClass();
		String prjName = typeBinding.getPackage().getJavaElement().getJavaProject().getElementName();
		String pkgName = typeBinding.getPackage().getName();
		String className = typeBinding.getName();
		String methodName = methodDecl.getName().getFullyQualifiedName();
		
		if (open) {
			if(methodName.equals(methodToBeOpened.getName()))
				return addNode(methodToBeOpened);
			return null;
		} 
		String parent = prjName + "." + pkgName + "." + className;
		String id = parent + "." + methodName;
		GMethodNode n = new GMethodNode(id, methodName, parent);
		n.setPrjName(prjName).setPkgName(pkgName).setClassName(className);
		return addNode(n);
	}

	@Override
	public boolean visit(VariableDeclarationFragment variableDecl) {
		if (open) {
			GValueNode valueNode = (GValueNode) insertValueNode(variableDecl);
			if(valueNode == null) {
				return true;
			}
			GNode methodNode = GModelProvider.instance().getNodeMap().get(valueNode.getParent());
			if (methodNode == null) {
				throw new RuntimeException();
			}
			addConnection(methodNode, valueNode, variableDecl.getStartPosition());
			return super.visit(variableDecl);
		}
		return true;
	}

	private GNode insertValueNode(VariableDeclarationFragment variableDecl) {
		IVariableBinding rBinding = variableDecl.resolveBinding();
		IMethodBinding methodBinding = rBinding.getDeclaringMethod();
		ITypeBinding typeBinding = methodBinding.getDeclaringClass();
		String prjName = typeBinding.getPackage().getJavaElement().getJavaProject().getElementName();
		String pkgName = typeBinding.getPackage().getName();
		String className = typeBinding.getName();
		String MethodName = methodBinding.getName();
		if(MethodName.equals(methodToBeOpened.getName())) {
			String variableName = variableDecl.getName().getFullyQualifiedName();
			String parent = prjName + "." + pkgName + "." + className + "." + MethodName;
			String id = parent + "." + variableName;
			GValueNode n = new GValueNode(id, variableName, parent);
			n.setPrjName(prjName).setPkgName(pkgName).setClassName(className).setMethodName(MethodName);
			return addNode(n);
		}
		return null;
	}

	private void addConnection(GNode srcNode, GNode dstNode, int offset) {
		String conId = srcNode.getId() + dstNode.getId();
		String conLabel = "offset: " + offset;
		GConnection con = new GConnection(conId, conLabel, srcNode, dstNode);
		GModelProvider.instance().getConnections().add(con);
		srcNode.getConnectedTo().add(dstNode);
	}

	private GNode addNode(GNode n) {
		GModelProvider.instance().getNodes().add(n);
		GModelProvider.instance().getNodeMap().put(n.getId(), n);
		return n;
	}
}
