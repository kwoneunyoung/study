package studyTest;

public class studyList {

 private Node head; //첫번째 노드
 private Node tail; //마지막 노드
 int size = 0; //몇개의 element가 저장 되는지?
 
 private class Node { //데이터 저장 및 다음 노드가 무엇인지 정의 하는 게 필수요소
	private Object data;
	private Node next;

	 public Node(Object input) {
		 this.data = input;
		 this.next = null;
	 }
 }
 
 public void firstAdd(Object input) { //첫번째 노드에 저장하는 메소드
	 Node node = new Node(input); //노드 객체 생성
	 node.next = head; //들어오는 노드의 옆 부분은 처음 들어오는 head
	 head = node;
	 if(head.next == null) {
		 tail = head;
	 } 
 }
 
 public String toString() {
	 if(head == null) {
		 return "[아무 것도 없다.]";	 //노드 없으면 
	 }
	 //탐색 시작
	 Node extra= head;
	 String str ="[";
	 //다음 노드가 없을 때까지 반복문 실행
	 while(extra.next != null) {//헤드가 null이 아니면
		 str += extra.data + ", ";// [+ head에 있는 데이터
		 extra = extra.next; //옆에 있는 데이터
	 }
	 //마지막 노드를 출력결과에 표시한다
	  str += extra.data;
	  return str+"] 이다.";
	 
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
