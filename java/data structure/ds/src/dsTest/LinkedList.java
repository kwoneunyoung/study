package dsTest;

public class LinkedList {
	private Node head;
	private Node tail;
	private int size = 0; // 몇개의 element가 담겨 있는가?
	private class Node { //inner class 사용
		private Object data; //각각의 노드가 저장할 데이터
		private Node next; //누가 다음 노드인가?
		public Node(Object input) { //input : 노드가 처음 생성 됐을 때 들어오는 값이 input이라는 매개변수에 들어옴
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
		if(head.next == null) { //head에 next가 존재하지 않는다면 마지막 노드는 헤드와같다
			tail = head;
		} else {
			
		}
	}
	
	public void addLast(Object input) {
		Node newNode = new Node(input);
		if(size == 0) { //데이터가 없는 상태라면
			addFirst(input);
		} else { //데이터가 있는 상태라면
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
