package edu.vt.silabs.event;

import java.util.ArrayList;
import java.util.List;

import edu.vt.silabs.handlers.MetadataViewRemoveHandler;
import edu.vt.silabs.model.editor.JSEditor_RemoveMetadata;

public class EventManager {
	List<IEvent>						list	= new ArrayList<IEvent>();
	private static EventManager	mngr;

	public static EventManager getMngr() {
		if (mngr == null)
			mngr = new EventManager();
		return mngr;
	}

	public void add(IEvent iface) {
		list.add(iface);
	}

	public void fired(IEvent sender, String key) {
		for (int i = 0; i < list.size(); i++) {
			IEvent recver = list.get(i);
			if ((sender instanceof JSEditor_RemoveMetadata) && //
					(recver instanceof JSEditor_RemoveMetadata)) {
				continue;
			}
			if ((sender instanceof MetadataViewRemoveHandler) && //
					(recver instanceof MetadataViewRemoveHandler)) {
				continue;
			}
			recver.receive(key);
		}
	}
}
