public class TestList {
    Element head;
    Element rear;
    int size=0;

    private class Element {
        private Object title;
        private Element next;
        public Element(Object input) {
            this.title = input;
            this.next = null;
        }
        public String toString() {
            return String.valueOf(this.title);
        }
    }

    public void addFirst(Object input) {
        Element newElement = new Element(input);
        newElement.next = head;
        head=newElement;
        size++;

        if(head.next == null ) {
            rear = head;
        }
    }
    
    public void addLast(Object input) {
        Element newElement = new Element(input);
        if(size == 0) {
            addFirst(input); 
        } else {
            rear.next = newElement;
            rear = newElement;
            size++;
        }
    }


    void firstElement(String title) {
        Element newElement = new Element(title);
        head = newElement;
        rear = newElement;
        size++;
        System.out.println("firstElement(String title) 실행");
    }

    public void addElement(Element element) {

    }
    
    public void removeElement(Element element) { //전체 element 삭제

    }

   
}
