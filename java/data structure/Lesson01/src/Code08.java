import java.util.Scanner;

public class Code08 {

	public static void main(String[] args) {
		
		Scanner kb = new Scanner(System.in);
		
		int n=kb.nextInt();
		int[] data = new int[n]; //n개의 정수를 입력 받을 것임
		
 		for (int i=0; i<n; i++) {
 			data[i] = kb.nextInt();
 		}
 		
 		kb.close();

		int sum=0;
		int max=data[0];
		for(int i=0; i<n; i++) {
			sum += data[i]; // sum = sum + data[i];
			if(data[i]>max) {
				max = data[i];
			}
			
		}
		System.out.println(sum);
		System.out.println(max);
	}

}
