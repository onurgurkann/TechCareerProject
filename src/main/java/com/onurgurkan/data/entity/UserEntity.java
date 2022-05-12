package com.onurgurkan.data.entity;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@NoArgsConstructor
@Builder

@Entity
@Table(name = "users")
public class UserEntity extends BaseEntity implements Serializable {
    public final static long serialVersionUID=1L;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "user_surname")
    private String userSurname;

    @Column(name = "user_mail")
    private String userMail;

    @Column(name = "user_password")
    private String userPassword;

    @Column(name = "user_image")
    private byte[] userImage;

    public UserEntity(String userName, String userSurname, String userMail, String userPassword, byte[] userImage) {
        this.userName = userName;
        this.userSurname = userSurname;
        this.userMail = userMail;
        this.userPassword = userPassword;
        this.userImage = userImage;
    }
}
