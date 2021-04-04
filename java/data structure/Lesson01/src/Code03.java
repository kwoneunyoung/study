import java.util.Scanner;

public class Code03 {

	public static void main(String[] args) {
		String str="Hello";
		String input = null;

		Scanner keyboard = new Scanner(System.in);
		System.out.println("Please type a string : ");

		input = keyboard.next();

		if(str.equals(input)) {
			System.out.println("string match!");
		} else {
			System.out.println("string do not match!");
		}

		keyboard.close();
	}

}
