package com.hm.bankApp.service;

import com.hm.bankApp.entity.Account;
import com.hm.bankApp.entity.Transaction;
import com.hm.bankApp.entity.User;
import com.hm.bankApp.repository.AccountRepository;
import com.hm.bankApp.repository.TransactionRepository;
import com.hm.bankApp.repository.UserRepository;
import com.hm.bankApp.model.Operation;
import com.hm.bankApp.model.Status;
import com.hm.bankApp.model.TransType;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BankService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    TransactionRepository transactionRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<Account> displayAccountsByUserId(int userId) {
        User user = userRepository.findById(userId).orElseThrow();
        List<Account> accountList = accountRepository.findAllByUser(user);

        return accountList;
    }

    public User displayUser(int userId) {
        User user = userRepository.findById(userId).orElse(null);

        return user;
    }

    public Account createAccount(Account account) {
        User user = userRepository.findById(account.getUser().getId()).orElseThrow();
        account.setBalance(new BigDecimal("0"));
        account.setStatus(Status.ACTIVE);
        account.setUser(user);
        return accountRepository.save(account);
    }

    @Transactional
    public Transaction transfer(Transaction transaction) {
        transaction.setDescription("Make a transfer.");
        Account accountFrom = accountRepository.findById(transaction.getFromaccount().getID()).orElseThrow();
        Account accountTo = accountRepository.findById(transaction.getToaccount().getID()).orElseThrow();

        accountFrom.setBalance(accountFrom.getBalance().subtract(transaction.getAmount()));
        accountTo.setBalance(accountTo.getBalance().add(transaction.getAmount()));
        accountRepository.save(accountFrom);
        accountRepository.save(accountTo);

        return transactionRepository.save(transaction);
    }

    public Account displayAccountDetail(int accountId) {
        return accountRepository.findById(accountId).orElseThrow();

    }

    public List<Transaction> displayTransactionsByAccountId(int accountId, int page, int size) {
        Account account = accountRepository.findById(accountId).orElseThrow();
        Pageable paging = PageRequest.of(page, size);
        return transactionRepository.findByFromaccount(account, paging);
    }

    @Transactional
    public Transaction depositOrWithdraw(Operation operation) {
        Transaction transaction = new Transaction();
        Account account = accountRepository.findById(operation.getAccountId()).orElseThrow();
        if (operation.getAction().equals(TransType.WITHDRAW)) {
            account.setBalance(account.getBalance().subtract(operation.getAmount()));
        } else if (operation.getAction().equals(TransType.DEPOSIT)) {
            account.setBalance(account.getBalance().add(operation.getAmount()));
        }
        transaction.setFromaccount(account);
        transaction.setType(operation.getAction());
        transaction.setAmount(operation.getAmount());
        transaction.setTransactiondate(new Date());
        transaction.setDescription("Operation");
        transactionRepository.save(transaction);
        accountRepository.save(account);
        return transaction;

    }
}
