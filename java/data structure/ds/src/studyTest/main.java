package studyTest;

import java.util.LinkedList;

public class main {

	public static void main(String[] args) { //����
		
		studyList list = new studyList();
		

		list.firstAdd(300);
		list.firstAdd(200);
		list.firstAdd(100);
		//	System.out.println(list);
		
		
		
		System.out.println("���� ó�� ������ �� " +list.firstRemove());
		System.out.println("���� �ִ� �� "+ list);
		
		
		//������
	
//		LinkedList<Integer> link = new LinkedList<Integer>();
//		LinkedList<String> list1 = new LinkedList<String>();
//		link.addFirst(1);
//		link.addFirst(2);
//		link.addFirst(4);
//		list1.addLast("�ȳ�");
//		list1.addLast("����");
//		list1.addLast("����");
//		System.out.println(list1);
//
//		System.out.println(link);
//		System.out.println(link.remove(1));
	}

}
