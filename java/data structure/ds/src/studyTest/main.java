package studyTest;

public class main {

	public static void main(String[] args) { //실행
		
		studyList list = new studyList();
		

		list.firstAdd(300);
		list.firstAdd(200);
		list.firstAdd(100);
		System.out.println(list);
		
		
		//삭제
		list.remove(1);
		System.out.println(list);
	}

}
