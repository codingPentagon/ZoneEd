package codingpentagon.sms.backend.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import codingpentagon.sms.backend.security.jwt.AuthEntryPointJwt;
import codingpentagon.sms.backend.security.jwt.AuthTokenFilter;
import codingpentagon.sms.backend.services.AuthUserDetailsService;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Configuration
@EnableWebSecurity

public class SecurityConfiguration  {
    // @Override
    // protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    //   auth.inMemoryAuthentication()
    //   .withUser("admin").password(passwordEncoder().encode("123")).roles("admin")
    //   .and()
    //   .withUser("user2").password(passwordEncoder().encode("dhdh1")).roles("admin");
      
      
      
    // }

    @Autowired
    AuthUserDetailsService userDetailsService;      // Autowire the AuthUserDetailsService for user details retrieval.

    @Autowired
    private AuthEntryPointJwt unauthorizedHandler;    // Autowire the AuthEntryPointJwt for handling unauthorized access.

    @Bean
    public AuthTokenFilter authenticationJwtTokenFilter() {  // Create and return a new instance of AuthTokenFilter as a bean.
        return new AuthTokenFilter();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

        authProvider.setUserDetailsService(userDetailsService); // Set the userDetailsService for retrieving user details and the passwordEncoder for password encoding
        authProvider.setPasswordEncoder(passwordEncoder());

        return authProvider; // Return the configured DaoAuthenticationProvider as a bean.
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager(); // Retrieve the AuthenticationManager from the AuthenticationConfiguration.
    }


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http,
                                           DaoAuthenticationProvider authenticationProvider,
                                           AuthTokenFilter authTokenFilter) throws Exception {
        http.cors().and().csrf().disable()
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeRequests()
                .antMatchers(
                        "/getmarks",
                        "/getmarkss",
                        "/report/{format}",
                        "/reports/{format}",
                        "/api/auth/reg/**",
//                        "/api/auth/tch/reg",
                        "/api/auth/account",
                        "/api/auth/signIn").permitAll()
                .anyRequest().authenticated();       // Configure the HTTP security settings, including CORS, CSRF, session management, and authorization rules.

        http.authenticationProvider(authenticationProvider);  // Set the authenticationProvider for the HTTP security.

        http.addFilterBefore(authTokenFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build(); // Build and return the configured SecurityFilterChain.
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();  // Create and return a new BCryptPasswordEncoder as a bean for password encoding
    }
}