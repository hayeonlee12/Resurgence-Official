package org.resurg.resurgence;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/resurgence/About")
    public String aboutPage() {
        return "About"; // Looks for src/main/resources/templates/About.html if using Thymeleaf
    }

    @GetMapping("/resurgence/Blog")
    public String blogPage() {
        return "Blog";
    }

    @GetMapping("/resurgence/Post1")
    public String firstPage() {
        return "Post1";
    }

    @GetMapping("/resurgence/Blog/2")
    public String secondPage() {
        return "Post2";
    }
}
