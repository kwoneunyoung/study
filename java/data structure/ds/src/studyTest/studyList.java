package studyTest;

public class studyList {

 private Node head; //ù��° ���
 private Node tail; //������ ���
 int size = 0; //��� element�� ���� �Ǵ���?
 
 private class Node { //������ ���� �� ���� ��尡 �������� ���� �ϴ� �� �ʼ����
	private Object data;
	private Node next;

	 public Node(Object input) {
		 this.data = input;
		 this.next = null;
	 }
 }
 
 public void firstAdd(Object input) { //ù��° ��忡 �����ϴ� �޼ҵ�
	 Node node = new Node(input); //��� ��ü ����
	 node.next = head; //������ ����� �� �κ��� ó�� ������ head
	 head = node;
	 if(head.next == null) {
		 tail = head;
	 } 
 }
 
 public String toString() {
	 if(head == null) {
		 return "[�ƹ� �͵� ����.]";	 //��� ������ 
	 }
	 //Ž�� ����
	 Node extra= head;
	 String str ="[";
	 //���� ��尡 ���� ������ �ݺ��� ����
	 while(extra.next != null) {//��尡 null�� �ƴϸ�
		 str += extra.data + ", ";// [+ head�� �ִ� ������
		 extra = extra.next; //���� �ִ� ������
	 }
	 //������ ��带 ��°���� ǥ���Ѵ�
	  str += extra.data;
	  return str+"] �̴�.";
	 
 }
 
 public Object remove(int index) {
	 Object removed = elementData[index];
	 for(int i=index+1; i<=size-1; i++) {
		 elementData[i-1] = elementData[i];
	 }
	 size--;
	 elementData[size] = null;
	return removed;
 }

	
}
