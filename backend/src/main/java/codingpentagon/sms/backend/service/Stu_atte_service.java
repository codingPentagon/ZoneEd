package codingpentagon.sms.backend.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import RoleModel.Stu_atten;
import codingpentagon.sms.backend.RoleRepo.Stu_atte_Repo;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Service
@RestController
public class Stu_atte_service {
@Autowired
private Stu_atte_Repo stu_atte_Repo;


@GetMapping("/getmarkss")
public List<Stu_atten> geStu_marks  (){
    return stu_atte_Repo.findAll();
    //Load the file and compile it
  

}

@GetMapping("/reports/{format}")
public String generateReport(@PathVariable String format) throws FileNotFoundException, JRException{
  return exportReport(format);
}


    public String exportReport(String reportFormat) throws FileNotFoundException, JRException {
        String path = "C:\\Users\\nuwan\\OneDrive\\Desktop\\reports";
        List<Stu_atten> employees = stu_atte_Repo.findAll();
        //load file and compile it
        File file = ResourceUtils.getFile("classpath:stu_atten.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(employees);
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("createdBy", "Java Techie");
        parameters.put("indexNo", "aadda");
        parameters.put("name", "karu");
        parameters.put("year","2023");
        parameters.put("month", "may");
        parameters.put("classes", "123A");
        parameters.put("teacher", "perera");
        parameters.put("test1", "p");
        //parameters.put("stu_grade", "12A");
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSource);
        if (reportFormat.equalsIgnoreCase("html")) {
            JasperExportManager.exportReportToHtmlFile(jasperPrint, path + "\\attendance.html");
        }
        if (reportFormat.equalsIgnoreCase("pdf")) {
            JasperExportManager.exportReportToPdfFile(jasperPrint, path + "\\attendance.pdf");
        }
    
        return "report generated in path : " + path;
    }
    
}
