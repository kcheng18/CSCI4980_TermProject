package graph.model;

public class GValueNode extends GNode {
	private String prjName;
	private String pkgName;
	private String className;
	private String methodName;

	public GValueNode(String id, String name, String parent) {
		super(id, name, parent);
	}

	public GValueNode setPrjName(String prjName) {
		this.prjName = prjName;
		return this;
	}	

	public GValueNode setMethodName(String methodName) {
		this.methodName = methodName;
		return this;
	}

	public GValueNode setPkgName(String pkgName) {
		this.pkgName = pkgName;
		return this;
	}

	public GValueNode setClassName(String className) {
		this.className = className;
		return this;
	}

	public String getPrjName() {
		return prjName;
	}

	public String getPkgName() {
		return pkgName;
	}

	public String getClassName() {
		return className;
	}
	
	public String getMethodName() {
		return methodName;
	}

	public boolean isParent(GValueNode n) {
		boolean eqClassName = this.className.equals(n.getName());
		boolean eqPkgName = this.pkgName.equals(n.getPkgName());
		boolean eqMethName = this.methodName.equals(n.getMethodName());
		return eqClassName && eqPkgName && eqMethName;
	}

	public String toString() {
		return this.pkgName + "." + this.className + "." + this.methodName + "." + this.getName();
	}

}
