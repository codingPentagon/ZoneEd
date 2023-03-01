package codingpentagon.sms.backend.service;

import RoleModel.Role;
import org.apache.catalina.User;

public interface RoleService {
    String save(User user);

    Role save(Role role);
}
