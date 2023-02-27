package com.hm.bankApp.auth;

import com.hm.bankApp.model.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String firstname;
    private String lastname;
    private String loginname;
    private String email;
    private String address;
    private String phone;
    private String password;
    private Date opendate;
    private Role role;
}
