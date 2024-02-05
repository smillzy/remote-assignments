package com.remoteassignment.assignmentthree;

import com.remoteassignment.assignmentthree.service.BackEndService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class RemoteController {

    private final BackEndService backEndService;

    /**
     * Constructor to initialize the BackEndService dependency.
     *
     * @param backEndService Inject BackEndService.
     */
    public RemoteController(BackEndService backEndService) {
        this.backEndService = backEndService;
    }

    /**
     * Handles the root ("/") URL request.
     * Invoke the checkCookie function from the backEndService to check whether the user's cookie exists.
     *
     * @param username Username retrieved from the cookie.
     */
    @GetMapping("/")
    public String homepage(@CookieValue(value = "username", defaultValue = "") String username) {
        return backEndService.checkCookie(username);
    }

    /**
     * Handles the root ("/homepage") URL request.
     * Invoke the checkCookie function from the backEndService to check whether the user's cookie exists.
     *
     * @param username Username retrieved from the cookie.
     */
    @GetMapping("/homepage")
    public String home(@CookieValue(value = "username", defaultValue = "") String username) {
        return backEndService.checkCookie(username);
    }

    /**
     * Handles the "/logIn" URL request, processes user login action, and returns the result.
     * If there is an error, it will return error message.
     *
     * @param username Username retrieved from the cookie.
     * @param response The HttpServletResponse object.
     * @param model    The Model object for passing data to the view.
     * @param email    Get user's email from the request parameters.
     * @param password Get user's password from the request parameters.
     */
    @PostMapping("/log-in")
    public String logIn(@CookieValue(value = "username", defaultValue = "") String username,
                         HttpServletResponse response,Model model,
                         @RequestParam("email") String email,
                         @RequestParam("password") String password){
        return backEndService.getData(username, response, model, email, password);
    }

    /**
     * Handles the "/signUpForm" URL request, direct to the signUp.html.
     *
     */
    @GetMapping("/sign-up-form")
    public String signUp() {
            return "signUp";
    }

    /**
     * Handles the "/signUpName" URL request, processes user registration, add new account to database. Also set a cookie.
     *
     * @param userName Get nsw user's name from the request parameters.
     * @param email    Get nsw user's email from the request parameters.
     * @param password Get nsw user's password from the request parameters.
     */
    @PostMapping("/sign-up-name")
    public String create(@RequestParam("userName") String userName,
                         @RequestParam("email") String email,
                         @RequestParam("password") String password){
        return backEndService.createData(userName, email, password);
    }

}
