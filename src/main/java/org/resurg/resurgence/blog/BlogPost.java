package org.resurg.resurgence.blog;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BlogPost {
    private Long id;
    private String title;
    private String content;
    private String author;
    private LocalDateTime timestamp;
    private String media;
}
