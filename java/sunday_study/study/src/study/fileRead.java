package study;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class fileRead {
	static BufferedReader bufferReader = null;
	
	public static void main(String[] args) throws IOException {
	
		try {
			//���� ��ü ����
			File file = new File("src/a.txt");
			//�Է� ��Ʈ�� ����
			FileReader fileReader = new FileReader(file);
			
			//�Է� ���� ����
			 bufferReader = new BufferedReader(fileReader);
			 String line ="";
			 while((line=bufferReader.readLine()) != null) {
				 System.out.println(line);
			 }
		} catch (FileNotFoundException e) {
			
			e.printStackTrace();
		}
		
	
	}
	
	

}
