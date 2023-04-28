package codingpentagon.sms.backend.services;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import RoleModel.AuthUser;

public class AuthUserDetails implements UserDetails {
    
    private static final long serialVersionUID = 1L;

    private String id;  // The ID of the user.

    private String username;   // The username of the user.

    private String email;  // The email of the user.

    @JsonIgnore
    private String password;

    private Collection<? extends GrantedAuthority> authorities;

    public AuthUserDetails(String id, String username, String email, String password,
                           Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
    }  // Constructor to initialize the AuthUserDetails object with the provided information.

    public static AuthUserDetails build(AuthUser user) {
        List<GrantedAuthority> authorities = user.getRole().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().toUpperCase()))
                .collect(Collectors.toList());

        return new AuthUserDetails( //parse the user data and authorities with user role
                user.getId(),
                user.getEmail(),
                user.getEmail(),
                user.getPassword(),
                authorities);
    }



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
      return authorities;//This method returns the authorities (roles) assigned to the user.
    }

    @Override
    public String getPassword() {
        return password;//This method returns the user's password
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {//always returns true, indicating that the account is not locked.
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
