package com.remoteassignments.assignments.remote;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CookieController {

    @GetMapping("/myName")
    public String getUserName(@CookieValue(value = "username", defaultValue = "") String username, Model model) {
        model.addAttribute("userName", username);
        if (!username.isEmpty()) {
            return "myName";
        } else {
            return "trackName";
        }
    }

    @GetMapping("/trackName")
    public String trackUserName(@RequestParam("username") String name, HttpServletResponse response) {
        if ((name != null) && (!name.isEmpty())) {
            Cookie cookie = new Cookie("username", name);
            response.addCookie(cookie);
        }
        return "redirect:/myName";
    }
}
