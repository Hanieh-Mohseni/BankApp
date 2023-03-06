package com.hm.bankApp.controller;

import com.hm.bankApp.entity.Account;
import com.hm.bankApp.entity.Transaction;
import com.hm.bankApp.entity.User;
import com.hm.bankApp.model.*;
import com.hm.bankApp.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class BankController {

    @Autowired
    private BankService service;

    @PostMapping("/user")
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user) {

        return service.createUser(user);
    }

    @PostMapping("/account")
    @ResponseStatus(HttpStatus.CREATED)
    public String createAccount(@RequestBody Account account) {
        service.createAccount(account);
        return "Account is created";
    }

    @PostMapping("/operation")
    @ResponseStatus(HttpStatus.CREATED)
    public String depositOrWithdraw(@RequestBody Operation operation) {
        service.depositOrWithdraw(operation);
        return "Done.";
    }

    @PostMapping("/transfer")
    @ResponseStatus(HttpStatus.CREATED)
    public String transferMoney(@RequestBody Transaction transaction) {
        service.transfer(transaction);
        return "Money is transfered.";
    }

    @GetMapping("/user/{userId}")
    public User displayUser(@PathVariable int userId) {
        User user = service.displayUser(userId);

        return user;
    }

    @GetMapping("/accounts/user/{userId}")
    public List<Account> displayAccountsByUserId(@PathVariable int userId) {
        List<Account> accountList = service.displayAccountsByUserId(userId);

        return accountList;
    }

    @GetMapping("/account/{accountId}")
    public Account displayAccountsDetailById(@PathVariable int accountId) {
        return service.displayAccountDetail(accountId);
    }

    @GetMapping("/transaction/account/{accountId}")
    public List<TransactionModel> displayTransactionsByAccountId(@PathVariable int accountId,
                                                            @RequestParam int page, @RequestParam int size) {

        return service.displayTransactionsByAccountId(accountId, page, size);
    }


}
