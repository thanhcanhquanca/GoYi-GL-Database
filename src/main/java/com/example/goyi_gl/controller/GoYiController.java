package com.example.goyi_gl.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/goyis")
public class GoYiController {
    @GetMapping("")
    public String showGoYi(Model model) {
        return "goyi";
    }
}
