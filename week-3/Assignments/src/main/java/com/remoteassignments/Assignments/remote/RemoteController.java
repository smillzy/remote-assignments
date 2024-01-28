package com.remoteassignments.Assignments.remote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RemoteController {

    private final NumberService numberService;

    @Autowired
    public RemoteController(NumberService numberService){
        this.numberService = numberService;
    }

    @GetMapping
    public String hello() {
        return "Hello， My Server！";
    }

    @GetMapping("/data")
    public String getStatus(@RequestParam(required = false) String number){
        return numberService.calculateSum(number);
    }
}
