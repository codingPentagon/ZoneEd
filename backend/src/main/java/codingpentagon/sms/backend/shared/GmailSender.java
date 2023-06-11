package codingpentagon.sms.backend.shared;

import java.nio.charset.StandardCharsets;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import lombok.extern.slf4j.Slf4j;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.nio.charset.StandardCharsets;
import java.util.Locale;
import java.util.Map;


@Component
@Slf4j

public class GmailSender {
    

    
    @Value("${spring.mail.username}")
    private String username;

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private SpringTemplateEngine templateEngine;

    @Autowired
    private MessageSource messageSource;

    public void sendMail(Map<String, Object> props, String to, String templateName, String subject, String langKey) throws MessagingException {
        log.debug("Sending email to '{}'", to);

        sendEmailFromTemplate(
                props,
                templateName,
                subject,
                to,
                langKey
        );
    }

    private void sendEmailFromTemplate(Map<String, Object> props, String templateName, String titleKey, String to, String langKey) throws MessagingException {

        Locale locale = Locale.forLanguageTag(langKey);
        Context context = new Context(locale);
        context.setVariables(props);
        String content = templateEngine.process(templateName, context);
        String subject = messageSource.getMessage(titleKey, null, locale);
        sendEmail(to, subject, content, false, true);
    }

    private void sendEmail(String to, String subject, String content, boolean isMultipart, boolean isHtml) throws MessagingException {
        log.debug(
                "Send email[multipart '{}' and html '{}'] to '{}' with subject '{}' and content={}", isMultipart, isHtml, to,
                subject,
                content
        );

        // Prepare message using a Spring helper
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        MimeMessageHelper message = new MimeMessageHelper(
                mimeMessage,
                isMultipart,
                StandardCharsets.UTF_8.name()
        );
        message.setTo(to);
        message.setFrom(username);
        message.setSubject(subject);
        message.setText(content, isHtml);
        javaMailSender.send(mimeMessage);
        log.debug("Sent email to User '{}'", to);

    }
}
