package common_functions;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Random;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Wrapper {

	static String excelPath="C:\\Users\\AbinayaGovindarajan\\eclipse-workspace\\Elearning_BDD\\resource\\testdata.xlsx";
	static String sheet="Sheet1";
	
	
	public static void writeDataInExcel(int row, int col, String value) throws IOException {
	    FileInputStream fs = new FileInputStream(excelPath);
	        
	        //workbook declaration
	        Workbook wb = new XSSFWorkbook(fs);
	        
	        //Sheet declaration
	        Sheet sh = wb.getSheet(sheet);
	        Row rowval = sh.getRow(row);
	        Cell cell = rowval.createCell(col);
	        cell.setCellValue(value);
	        
	        FileOutputStream fos = new FileOutputStream(excelPath);
	        wb.write(fos);
	        fos.close();
	        
	        
	    }
	
	public static String getDataFromExcel(int row, int col) throws IOException {
	    FileInputStream fs = new FileInputStream(excelPath);
	        
	        //workbook declaration
	        Workbook wb = new XSSFWorkbook(fs);
	        
	        //Sheet declaration
	        Sheet sh = wb.getSheet(sheet);
	        Row rows = sh.getRow(row);
	        Cell cell = rows.getCell(col);
	    //    String val = cell.getStringCellValue();
	    //    System.out.println("Value is " + val);
	        
	        DataFormatter df = new DataFormatter();
	    String formatValue =    df.formatCellValue(cell);
	    System.out.println("Formated value " + formatValue);
	    return formatValue;
	    }
	    
      public int GenerateRandomNum(int data) throws IOException
      {
    	  Random random = new Random();
    	  int randomno= random.nextInt(data);
    	  String val= String.valueOf(randomno);
    	  
    	 writeDataInExcel(1,8,val);
    	  return randomno;
    	  
      }
	
}
