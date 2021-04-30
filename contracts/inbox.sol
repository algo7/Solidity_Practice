// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.4;

contract Inbox {
    // Storage variable
    string public message;

    // The constructor function will be executed everytime the code is called
    // Mem vs calldata:
    // https://ethereum.stackexchange.com/questions/74442/when-should-i-use-calldata-and-when-should-i-use-memory
    // Visibility is not required for the constructor function
    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    /**
    The "view" keyword indicates that the function returns but does not modify the contract data
    This 1st Gotcha => when you decalre a storage variable with the "public" keyword, 
    solidity automatically creates a function with the name of the variable for it, 
    which will return the variable itself. So the getMessage function below is not necessary. 
    It's here for leaning's sake
     */
    // function getMessage() public view returns (string memory) {
    //     return message;
    // }
}

/**
Contract creation trasaction has no "To" field & 
the "Data" field will contain the  compiled byte code of the contract
The "v","r","s" property still exist. 
The "value" field still can present => create the contract + send eth
 */

/**
2 Types of contract function:
The 1st => can't modify the contract's data, returns data, runs instantly, free => getMessage()
The 2nd => modifies the contract's data, returns the transaction's hash, takes time to execute, cost money
 Invovles a transaction and needs to be mined (verified) => setMessage()
 This type of function doesn't have a return value even when explicitly specified
 Transactions costs time on real network
 */

// 1 Eth = 10^17 wei
// Other units are gwei, finey, ..etc
// Checkout etherconverter.online

/**
gasPrice (in wei) that a sender is willing to pay
gasLimit (in unit of gas) that the transaction can consume
Execution of the function halts when the limit is reached
Extra gas gets send back to the sender if not comsumed
https://docs.google.com/spreadsheets/d/1n6mRqkBz3iWcOlRem_mO09GtSKEKrAsfO7Frgx18pNU/edit#gid=0
 */

// 12 word-Mnemonic => BIP39 mnemonic algo => https://iancolename.io/bip39
