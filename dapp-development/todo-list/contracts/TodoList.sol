pragma solidity >=0.5.0 <0.6.0;

contract TodoList {
    uint public taskCount = 0;


    // CREATE a Task struct


    //mapping(uint => Task) public tasks;


    // CREATE TaskCreated event


    // CREATE TaskToggled event


    constructor() public {
        createTask("Default Todo Task");
    }

    function createTask(string memory _content) public {

    }

    function toggleTask(uint _id) public {

    }

}
