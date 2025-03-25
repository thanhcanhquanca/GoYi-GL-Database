package com.example.goyi_gl.model;

import lombok.*;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "Videos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "video_id")
    private Long videoId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "video_url", nullable = false)
    private String videoUrl;

    @Column(name = "thumbnail_url")
    private String thumbnailUrl;

    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private Category category;

    @Column(name = "duration", nullable = false)
    private Integer duration;

    @Enumerated(EnumType.STRING)
    @Column(name = "privacy")
    private Privacy privacy = Privacy.PUBLIC;

    @Column(name = "is_paid")
    private Boolean isPaid = false;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    @OneToMany(mappedBy = "video", cascade = CascadeType.ALL)
    private List<Like> likes;

    @OneToMany(mappedBy = "video", cascade = CascadeType.ALL)
    private List<Comment> comments;

    @OneToMany(mappedBy = "video", cascade = CascadeType.ALL)
    private List<Share> shares;

    @OneToMany(mappedBy = "video", cascade = CascadeType.ALL)
    private List<WatchLater> watchLaters;

    @OneToMany(mappedBy = "video", cascade = CascadeType.ALL)
    private List<PlaylistVideo> playlistVideos;

    @OneToMany(mappedBy = "video", cascade = CascadeType.ALL)
    private List<ViewHistory> viewHistories;

    @OneToMany(mappedBy = "video", cascade = CascadeType.ALL)
    private List<Notification> notifications;

    public enum Category {
        MOVIE, ANIMATION, MUSIC, COOKING, ENTERTAINMENT, GAMING, TECH, SPORTS, NEWS, CULTURE, EDUCATION, SERIES
    }

    public enum Privacy {
        PUBLIC, PRIVATE, SUBSCRIBERS
    }
}
