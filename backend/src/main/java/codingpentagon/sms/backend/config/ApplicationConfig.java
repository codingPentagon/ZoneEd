package codingpentagon.sms.backend.config;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

@Configurable
public class ApplicationConfig {
    @Bean
    public ObjectMapper getObjectMapper() { //used for JSON serialization and deserialization.
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);     // Configure the ObjectMapper to ignore unknown properties during deserialization
        mapper.registerModule(new JavaTimeModule()); // Register the JavaTimeModule, which provides support for Java 8 date/time classes
        mapper.registerModule(new JavaTimeModule());
        return mapper;
    }
}
