package org.resurg.resurgence.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/resurgence/Blog")
public class BlogViewController {
    private final BlogPostService blogPostService;

    @Autowired
    public BlogViewController(BlogPostService blogPostService) {
        this.blogPostService = blogPostService;
    }

    @GetMapping("/{id}")
    public String viewBlogPost(@PathVariable Long id, Model model) {
        BlogPost post = blogPostService.getPostById(id);
        if (post == null) {
            return "error/404"; // Make sure a 404 error page template exists
        }
        model.addAttribute("post", post);
        return "Post"; // Thymeleaf template name (e.g., blogPost.html)
    }
}
