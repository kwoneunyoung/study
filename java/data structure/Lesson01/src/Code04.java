import java.util.Scanner;

public class Code04 {

	public static void main(String[] args) {
		String name= null;
		int age;
		String gender;
		
		Scanner keyboard = new Scanner(System.in);
		
		System.out.println("Please type your name, age and gender");

		name = keyboard.next();
		age = keyboard.nextInt();
		gender = keyboard.next();
	
		if(gender.equals("male")) {
			System.out.println(name + ", your age" + ", ");
			
		}
		keyboard.close();
	}
	

}
