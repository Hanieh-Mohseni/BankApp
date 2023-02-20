CREATE TABLE `User` (
  `UserID` INT NOT NULL AUTO_INCREMENT,
  `BankID` INT NOT NULL,
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

CREATE TABLE `UserAccount` (
  `UserID` INT NOT NULL AUTO_INCREMENT,
  `AccountTypeID` INT NOT NULL AUTO_INCREMENT,
  `AccountNumber` Integer,
  `Balance` Decimal,
  `Status` boolean default true,
  `TransactionID` INT NOT NULL,
  PRIMARY KEY (`UserID`, `AccountTypeID`)
);

CREATE TABLE `Accounts` (
  `AccountTypeID` INT NOT NULL AUTO_INCREMENT,
  `AccountType` varchar(20) not null,
  PRIMARY KEY (`AccountTypeID`)
);

CREATE TABLE `Banks` (
  `BankID` INT NOT NULL AUTO_INCREMENT,
  `BankName` varchar(20) not null,
  `Phone` varchar(20) not null,
  `Address` varchar(20) not null,
  PRIMARY KEY (`BankID`),
  FOREIGN KEY (`BankName`) REFERENCES `User`(`Address`)
);

CREATE TABLE `Transactions` (
  `TransactionID` INT NOT NULL AUTO_INCREMENT,
  `AccountTypeID` INT NOT NULL,
  `UserID` INT NOT NULL,
  `Deposit` Decimal,
  `Withdraw` Decimal,
  `TransferToChequing` Decimal,
  `TransferToSaving` Decimal,
  PRIMARY KEY (`TransactionID`),
  FOREIGN KEY (`TransferToSaving`) REFERENCES `Accounts`(`AccountTypeID`)
);

