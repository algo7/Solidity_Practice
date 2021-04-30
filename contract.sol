// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.4;

contract Inbox {
    string public message;

    // The constructor function will be executed everytime the code is called
    // Mem vs calldata:
    // https://ethereum.stackexchange.com/questions/74442/when-should-i-use-calldata-and-when-should-i-use-memory
    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
