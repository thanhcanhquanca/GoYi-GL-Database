package com.example.goyi_gl.model;

import lombok.*;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "PlaylistVideos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlaylistVideo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "playlist_video_id")
    private Long playlistVideoId;

    @ManyToOne
    @JoinColumn(name = "playlist_id", nullable = false)
    private Playlist playlist;

    @ManyToOne
    @JoinColumn(name = "video_id", nullable = false)
    private Video video;

    @Column(name = "added_at")
    private LocalDateTime addedAt = LocalDateTime.now();
}
