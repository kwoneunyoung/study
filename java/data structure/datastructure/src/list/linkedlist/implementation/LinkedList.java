package list.linkedlist.implementation;

class LinkedList {
	
	//ù�� ° ��带 ����Ű�� �ʵ�
	private Node head;
	private Node taile;
	private int size=0;
	private class Node {
		//�����Ͱ� ����� �ʵ�
		public Object data;
		//���� ��带 ����Ű�� �ʵ�
		public Node next;
		public Node(Object input) {
			this.data=input;
			this.next=null;
			
		}
		//����� ������ ���� ����ؼ� Ȯ���� �� �� �ִ� ���
		public String toString() {
			return String.valueOf(this.data);
		}
	} 

}
