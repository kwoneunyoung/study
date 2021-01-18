public class App { //실행하는 메인 메소드
	
    public static void main(String[] args) throws Exception {   
        TestList list = new TestList(); 
        
        list.addElement("안녕하세요");
        list.addElement("테스트");
        list.addElement("중 입니다");
        
        System.out.println(list);
        
        list.removeElement();
        System.out.println(list.removeElement());
        System.out.println(list);
        

    }
}

