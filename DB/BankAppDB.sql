DROP DATABASE IF EXISTS BankAppDB;
CREATE DATABASE BankAppDB;

USE `BankAppDB` ;
DROP DATABASE IF EXISTS BankAppDB;

CREATE DATABASE BankAppDB;

USE `BankAppDB` ;
CREATE TABLE `User` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(20) not null,
  `LastName` varchar(20) not null,
  `Phone` varchar(20) not null,
  `Address` varchar(20) not null,
  `OpenDate` datetime not null,
  `Email` varchar(20) not null,
  `LoginName` varchar(20) not null,
  `Password` varchar(20) not null,
  PRIMARY KEY (`ID`)
);
CREATE TABLE `Account` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `UserID` INT,
  `AccountNumber` int not null,
  `Name` varchar(20),
  `Type` VARCHAR(10),
  `Status` VARCHAR(10) not null,
  `Balance` decimal not null,
  `OpenDate` datetime not null,
  PRIMARY KEY (`ID`),
  FOREIGN KEY (`UserID`) REFERENCES `User`(`ID`)
);

CREATE TABLE `Transaction` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `FromAccount` INT NOT NULL,
  `ToAccount` INT NOT NULL,
  `Type` varchar(10) not null,
  `Amount` Decimal not null,
  `TransactionDate` datetime not null,
  `Description` varchar(100) not null,
  PRIMARY KEY (`ID`),
  FOREIGN KEY (`FromAccount`) REFERENCES `Account`(`ID`),
  FOREIGN KEY (`ToAccount`) REFERENCES `Account`(`ID`)
);



