package studyTest;

import java.util.LinkedList;

public class main {

	public static void main(String[] args) { //����
		
		studyList list = new studyList();
		

		list.firstAdd(300);
		list.firstAdd(200);
		list.firstAdd(100);
		System.out.println(list);
		
		
		//����
//		list.remove(1);
//		System.out.println(list.remove(1));
		
		LinkedList<Integer> link = new LinkedList<Integer>();
		LinkedList<String> list1 = new LinkedList<String>();
		list1.addLast("�ȳ�");
		list1.addLast("���̰�");
		list1.addLast("����");
		System.out.println(list1);
//		link.addLast(10);
//		link.addLast(30);
//		link.addLast(40);
		
		link.addFirst(1);
		link.addFirst(2);
		link.addFirst(4);
		
		System.out.println(link);
		System.out.println(link.remove(1));
	}

}
