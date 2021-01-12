public class TestList {
    Element head;

    TestList() {
        head = null;
    }

    public boolean isEmpty() { //현재 비어있는지 확인하는 메소드
        return this.head == null;
    }

    public void insertFirst(String title) {
        Element newElement = new Element(title);
    }

    public void addElement(Element element) {

    }
    
    public void removeElement(Element element) {

    }
}
