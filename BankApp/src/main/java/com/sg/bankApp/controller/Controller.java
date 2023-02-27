package com.sg.bankApp.controller;

import com.sg.bankApp.entity.User;
import com.sg.bankApp.repository.AccountRepository;
import com.sg.bankApp.repository.TransactionRepository;
import com.sg.bankApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

public class Controller {
    @Autowired
    UserRepository user;

    @Autowired
    AccountRepository account;

    @Autowired
    TransactionRepository transaction;






}
