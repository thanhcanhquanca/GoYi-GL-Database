package com.example.goyi_gl.model;

import lombok.*;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "WatchLater")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class WatchLater {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "watch_later_id")
    private Long watchLaterId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "video_id", nullable = false)
    private Video video;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}
