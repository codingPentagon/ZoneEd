package codingpentagon.sms.backend.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import RoleModel.AuthUser;
import codingpentagon.sms.backend.RoleRepo.AuthUserRepo;
import codingpentagon.sms.backend.shared.exceptions.GeneralException;

@Service
public class AuthUserDetailsService implements UserDetailsService {


@Autowired
private AuthUserRepo authUserRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AuthUser user = authUserRepo.findByEmail(username) // Retrieve the user by email from the database
        .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

return AuthUserDetails.build(user); // Build and return the AuthUserDetails object
    }

    public Optional<AuthUser> getAuthUserByEmail(String email) {// Retrieve an AuthUser object by email from the database
        return authUserRepo.findByEmail(email);
    }

    public AuthUser getCurrentUser() {   // Retrieve the currently authenticated user

        UserDetails userDetails =
                (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        Optional<AuthUser> result = getAuthUserByEmail(userDetails.getUsername());   // Retrieve the corresponding AuthUser object from the database

        if (result.isEmpty())
            throw new GeneralException("cannot find current user");// If the user is not found, throw a GeneralException

        return result.get();    // Return the retrieved AuthUser object

    }
    
}
