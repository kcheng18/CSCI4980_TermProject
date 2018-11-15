package edu.vt.silabs.event;

public interface IEvent {
	public void send(String key);

	public void receive(String key);

}
