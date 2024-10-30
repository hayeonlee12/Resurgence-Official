package org.resurg.resurgence.blog;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class BlogPostService {
    private final Map<Long, BlogPost> posts = new ConcurrentHashMap<>();
    private AtomicLong idCounter = new AtomicLong();

    public List<BlogPost> getAllPosts() {
        return new ArrayList<>(posts.values());
    }

    public BlogPost getPostById(Long id) {
        return posts.get(id);
    }

    public BlogPost createPost(BlogPost post) {
        post.setId(idCounter.incrementAndGet());
        post.setTimestamp(LocalDateTime.now());
        posts.put(post.getId(), post);
        return post;
    }

    public BlogPost updatePost(Long id, BlogPost post) {
        post.setId(id);
        post.setTimestamp(LocalDateTime.now());
        posts.put(id, post);
        return post;
    }

    public void deletePost(Long id) {
        posts.remove(id);
    }
}
