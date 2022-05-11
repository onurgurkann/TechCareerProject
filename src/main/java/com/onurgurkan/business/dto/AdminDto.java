package com.onurgurkan.business.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AdminDto {
    private Long adminId;
    private String adminName;
    private String adminSurname;
    private String adminMail;
    private String adminPassword;
    // private byte[] adminImage;
}
