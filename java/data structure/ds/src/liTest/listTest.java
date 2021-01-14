package liTest;

public class listTest {
	
	private Node head;
	private Node tail;
	private int size = 0;
	private class Node { //inner class
		private Object data;
		private Node next;
		
		public Node(Object input) {
			this.data = input;
			this.next = null;
		}
		
	}
	
	public void firstAdd(Object input) {
		Node node = new Node(input);
		node.next = head;
		head = node;
		size++;
		if(head.next == null) {
			tail = head;
		}
	}
	
	public void removeNode() {
		
	}
	
}
