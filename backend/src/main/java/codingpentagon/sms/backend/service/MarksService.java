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

import RoleModel.Stud_marks;
import codingpentagon.sms.backend.RoleRepo.MarksRepo;
import net.sf.jasperreports.engine.JRDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.*;

@Service
@RestController
public class MarksService {
    private final MarksRepo marksRepo;




    @Autowired
    public MarksService(MarksRepo marksRepo){
        this.marksRepo=marksRepo;
    }

    @GetMapping("/getmarks")
    public List<Stud_marks> geStu_marks  (){
        return marksRepo.findAll();
        //Load the file and compile it
      

    }

    @GetMapping("/report/{format}")
  public String generateReport(@PathVariable String format) throws FileNotFoundException, JRException{
    return exportReport(format);
  }

  public String exportReport(String reportFormat) throws FileNotFoundException, JRException {
    String path = "C:\\Users\\nuwan\\OneDrive\\Desktop\\reports";
    List<Stud_marks> employees = marksRepo.findAll();
    //load file and compile it
    File file = ResourceUtils.getFile("classpath:marksheet.jrxml");
    JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
    JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(employees);
    Map<String, Object> parameters = new HashMap<>();
    parameters.put("createdBy", "Java Techie");
    parameters.put("year","2023");
    parameters.put("term", 2);
    parameters.put("stu_id", "123A");
    parameters.put("stu_name", "Thilina");
    parameters.put("stu_grade", "12A");
    JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSource);
    if (reportFormat.equalsIgnoreCase("html")) {
        JasperExportManager.exportReportToHtmlFile(jasperPrint, path + "\\employees.html");
    }
    if (reportFormat.equalsIgnoreCase("pdf")) {
        JasperExportManager.exportReportToPdfFile(jasperPrint, path + "\\employees.pdf");
    }

    return "report generated in path : " + path;
}
}
