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
    function getMessage() public view returns (string memory) {
        return message;
    }
}
