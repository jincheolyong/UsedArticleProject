package com.sky.usedarticle.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class FileDto {

    private String fileId;

    private String fileName;

    private int productId;


    public FileDto(String fileId, String fileName, String filePath) {
    }
}
