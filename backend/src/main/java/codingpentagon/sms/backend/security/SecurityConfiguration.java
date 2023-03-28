package codingpentagon.sms.backend.security;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Configuration
@EnableWebSecurity

public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
      auth.inMemoryAuthentication()
      .withUser("admin").password(passwordEncoder().encode("123")).roles("admin")
      .and()
      .withUser("user2").password(passwordEncoder().encode("dhdh1")).roles("admin");
      
      
      
    }



    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
         .authorizeRequests()
        .antMatchers("/api/v1/stu/regStu").permitAll()
        .antMatchers("/api/v1/login/{fullName}").permitAll()
        .antMatchers("/api/v1/stu/regStuData").permitAll()
        .anyRequest().authenticated()
        .and()
        .httpBasic();
        //.formLogin()
       // .loginPage("/api/v1/login/{fullName}");
       
    }

    @Bean
PasswordEncoder passwordEncoder(){
    return new BCryptPasswordEncoder();
}
}