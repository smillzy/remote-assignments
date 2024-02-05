package com.remoteassignment.assignmentthree.service;


import com.remoteassignment.assignmentthree.entity.User;
import com.remoteassignment.assignmentthree.repository.UserRepo;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.HashMap;
import java.util.Map;

@Service
public class BackEndService {
    @Autowired
    UserRepo userRepo;

    /**
     * Check cookie exists.
     * If true return index.html.
     * Else return logIn.html.
     *
     * @param username Username retrieved from the cookie.
     */
    public String checkCookie(String username){

        boolean isUsernameEmpty = username.isEmpty();

        if(!isUsernameEmpty){
            return "index";
        }else{
            return "logIn";
        }
    }

    /**
     * Retrieves user data from the database.
     * If user is existed in the database, set a cookie and cookie will expire after 24 hours.
     * After setting cookie, return index.html.
     * Else return logIn.html again. This time the page will show error message with small red word.
     *
     * @param username Username retrieved from the cookie.
     * @param response The HttpServletResponse object.
     * @param model    The Model object for passing data to the view.
     * @param email    Get user's email from the request parameters.
     * @param password Get user's password from the request parameters.
     */
    public String getData(String username, HttpServletResponse response, Model model, String email, String password) {

        User user = userRepo.findByEmailAndPassword(email, password); // Compare value where is located in DB.

        if (user != null) {

            String nameFromDB = user.getUserName();  // Get UserName value in DB.
            Cookie cookie = new Cookie("username", nameFromDB);
            cookie.setMaxAge(60 * 60 * 24); // Set cookie will expire after 24 hours.
            response.addCookie(cookie);  // Set it to a cookie.

            model.addAttribute("userName", nameFromDB);
            return "index";
        } else {
            model.addAttribute("error", "Invalid email or password. Please try again.");
            return "logIn";
        }
    }

    /**
     * Creates a new user, save it to the database.
     * After saving, redirect to homepage.
     *
     * @param userName Get user's username from the request parameters.
     * @param email    Get user's email from the request parameters.
     * @param password Get user's password from the request parameters.
     */
    public String createData(String userName, String email, String password){

        User newUser = new User(userName, email, password);
        userRepo.save(newUser);  // Save data to MySQL.

        return "redirect:/homepage";
    }
}
