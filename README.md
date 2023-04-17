# Intent
To provide a calculator that handles basic operations in RPN (Reverse Polish Notation).  

# Parameters  
1. The calculator should use RPN accurately.  
2. The calculator functions should be tested.  
3. The calculator should store values in memory so that it can operate either:  
a. After a singular input is passed *or*  
b. After a series of inputs is passed
4. The calculator should operate the same in either input case, following RPN procedure.  

# Technical choices  
* CLI implementation  
    * Should allow values to be stored in memory until closed.
    * This needs to be a REPL-like experience in order to keep values in memory.

# Reference on RPN  
[https://mathworld.wolfram.com/ReversePolishNotation.html](https://mathworld.wolfram.com/ReversePolishNotation.html)