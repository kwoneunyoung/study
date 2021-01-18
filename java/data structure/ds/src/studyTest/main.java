package studyTest;

import java.util.LinkedList;

public class main {

	public static void main(String[] args) { //실행
		
		studyList list = new studyList();
		

		list.firstAdd(300);
		list.firstAdd(200);
		list.firstAdd(100);
		//	System.out.println(list);
		
		
		
		System.out.println("제일 처음 빼버린 값 " +list.firstRemove());
		System.out.println("남아 있는 값 "+ list);
		
		
		//내장기능
	
//		LinkedList<Integer> link = new LinkedList<Integer>();
//		LinkedList<String> list1 = new LinkedList<String>();
//		link.addFirst(1);
//		link.addFirst(2);
//		link.addFirst(4);
//		list1.addLast("안녕");
//		list1.addLast("나는");
//		list1.addLast("나다");
//		System.out.println(list1);
//
//		System.out.println(link);
//		System.out.println(link.remove(1));
	}

}
