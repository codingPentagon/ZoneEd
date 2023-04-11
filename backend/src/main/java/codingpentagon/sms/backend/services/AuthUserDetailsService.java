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
        AuthUser user = authUserRepo.findByEmail(username)
        .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

return AuthUserDetails.build(user);
    }

    public Optional<AuthUser> getAuthUserByEmail(String email) {
        return authUserRepo.findByEmail(email);
    }

    public AuthUser getCurrentUser() {

        UserDetails userDetails =
                (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        Optional<AuthUser> result = getAuthUserByEmail(userDetails.getUsername());

        if (result.isEmpty())
            throw new GeneralException("cannot find current user");

        return result.get();

    }
    
}
