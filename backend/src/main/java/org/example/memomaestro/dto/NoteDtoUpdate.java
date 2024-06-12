package org.example.memomaestro.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import java.time.LocalDate;

@Data
public class NoteDtoUpdate {
    private String record;
}
