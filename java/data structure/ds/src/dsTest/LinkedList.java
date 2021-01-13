package dsTest;

public class LinkedList {
	private Node head;
	private Node tail;
	private int size = 0; // ��� element�� ��� �ִ°�?
	private class Node { //inner class ���
		private Object data; //������ ��尡 ������ ������
		private Node next; //���� ���� ����ΰ�?
		public Node(Object input) { //input : ��尡 ó�� ���� ���� �� ������ ���� input�̶�� �Ű������� ����
			this.data = input;
			this.next = null;
			
			
		}
		public String toString() {
			return String.valueOf(this.data);
		}
	}
	public void addFirst(Object input) {
		Node newNode = new Node(input);
		newNode.next = head;
		head = newNode;
		size++;
		if(head.next == null) { //head�� next�� �������� �ʴ´ٸ� ������ ���� ���Ͱ���
			tail = head;
		} else {
			
		}
	}
	
	public void addLast(Object input) {
		Node newNode = new Node(input);
		if(size == 0) { //�����Ͱ� ���� ���¶��
			addFirst(input);
		} else { //�����Ͱ� �ִ� ���¶��
			tail.next = newNode;
			tail = newNode;
			size++;
		}
	}
	
	public String toString() {
		if(head == null) {
			return "[]";	
		} 
		
		Node temp = head;
		String str = "[";
		
		while(temp.next != null) {
			str += temp.data + ", ";
			temp = temp.next;
		} 
		str += temp.data;
		
		return str+"]";
	}
	
	public Object removeFirst() {
		Node temp = head;
		head = head.next;
		Object returnData = temp.data;
		temp = null;
		size--;
		return returnData;
	}
	
}
