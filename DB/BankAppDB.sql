DROP DATABASE IF EXISTS BankAppDB;
CREATE DATABASE BankAppDB;

USE `BankAppDB` ;
CREATE TABLE `User` (
  `UserID` INT NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(20) not null,
  `LastName` varchar(20) not null,
  `Phone` varchar(20) not null,
  `Address` varchar(20) not null,
  `OpeningDate` datetime not null,
  `Email` varchar(20) not null,
  `UserName` varchar(20) not null,
  `Password` varchar(20) not null,
  PRIMARY KEY (`UserID`)
);
CREATE TABLE `Accounts` (
  `AccountID` INT NOT NULL AUTO_INCREMENT,
  `UserID` INT,
  `AccountNumber` int not null,
  `Name` varchar(20),
  `AccountType` VARCHAR(10),
  `Status` VARCHAR(10) not null,
  `Balance` decimal not null,
  `opendate` datetime not null,
  PRIMARY KEY (`AccountID`),
  FOREIGN KEY (`UserID`) REFERENCES `User`(`UserID`)
);

CREATE TABLE `Transactions` (
  `TransactionID` INT NOT NULL AUTO_INCREMENT,
  `FromAccountID` INT NOT NULL,
  `ToAccountID` INT NOT NULL,
  `Type` varchar(10) not null,
  `Amount` Decimal not null,
  `TransactionDate` datetime not null,
  `Description` varchar(100) not null,
  PRIMARY KEY (`TransactionID`),
  FOREIGN KEY (`FromAccountID`) REFERENCES `Accounts`(`AccountID`),
  FOREIGN KEY (`ToAccountID`) REFERENCES `Accounts`(`AccountID`)
);



