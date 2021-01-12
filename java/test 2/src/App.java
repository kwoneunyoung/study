public class App {
    public static void main(String[] args) throws Exception {   
        TestList list = new TestList();     

        Element element1 = new Element("01");
        Element element2 = new Element("01");
        Element element3 = new Element("01");
        Element element4 = new Element("01");
        Element element5 = new Element("01");

        list.addElement(element1);
        list.addElement(element2);
        list.addElement(element3);
        list.addElement(element4);
        list.addElement(element5);

        // Element 출력
        System.out.println(".............");

        list.removeElement(element1);
        list.removeElement(element2);

        // Element 출력
        System.out.println(".............");
    }
}

