public class TestList {
 
	private Element head;
	private Element tail;
	private int size = 0;
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
	

	
	
	public void addElement(String title) {
    	Element newElement = new Element(title);
    	newElement.next = head;
    	head = newElement;
    	size++;
    	if(head.next ==null) {
    		tail = head;
    	} 
    }
	
    
    
    public String toString() {
    	if(head ==null) {
    		return "[]";
    	}
    	Element temp = head;
    	String str = "[";
    	
    	while(temp.next != null) {
    		str += temp.title +",";
    		temp = temp.next;
    	}
    	str += temp.title;
    	
    	return str +"]";
    }
    
    public String removeElement() { 
    	Element temp = head;
    	head = head.next;
    	String returnData = temp.title;
    	temp = null;
    	size--;
    	return returnData;
    	
    }


	

   
}
