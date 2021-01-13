public class TestList {
    private Element head;
    private Element tail;
    private int size=0;

    private class Element {
        private String title;
        private Element next;
        public Element(String title) {
            this.title = title;
            this.next = null;
        }

         
        public String toString() {
            return String.valueOf(this.title);
        }
    }

    public void addFirst(String title) {
        Element newElement = new Element(title);
        newElement.next = head;
        head = newElement;
        size++;
        if(head.next ==null ) {
            tail =head;
        }
    }

    public void addLast(String title) {
        Element newElement = new Element(title);
        if(size == 0) {
            addFirst(title);
        } else {
            tail.next = newElement;
            tail=newElement;
            size++;
        }
    }


    public void addElement(Element element) {

    }
    
    public void removeElement(Element element) { //전체 element 삭제

    }

   
}
