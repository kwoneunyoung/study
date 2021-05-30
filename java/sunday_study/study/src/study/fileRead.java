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
			//파일 객체 생성
			File file = new File("src/a.txt");
			//입력 스트림 생성
			FileReader fileReader = new FileReader(file);
			
			//입력 버퍼 생성
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
