package com.remoteassignments.Assignments.remote;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class RemoteController {

    private final NumberService numberService;

    @Autowired
    public RemoteController(NumberService numberService) {
        this.numberService = numberService;
    }

    @GetMapping
    public String hello() {
        return "Hello， My Server！";
    }

    @GetMapping("/data")
    public String getStatus(@RequestParam(required = false) String number) {
        return numberService.calculateSum(number);
    }

    @GetMapping("/myName")
    public String getUserName(@CookieValue(value = "username", defaultValue = "") String username) {  // 檢索username，不存在則默認為空，防止報錯 NullPointerException
        if (!username.isEmpty()) {  // 如果不為空值
            return "username: " + username;
        } else {  // 如果為空值，跳出表單
            return numberService.generateHtmlForm();
        }
    }

    @GetMapping("/trackName")
    public String trackUserName(@RequestParam("username") String name, HttpServletResponse response) {

        Cookie cookie = new Cookie("username", name);
        response.addCookie(cookie);
        return "Go back to :/myName";
    }
}