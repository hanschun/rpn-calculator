# Installation  
1. Clone this repo to your computer by entering `git clone https://github.com/hanschun/rpn-calculator.git` in your terminal; do this in a directory you have permissions to install files to.  
2. Enter the new folder `cd rpn-calculator` and install node modules `npm i`.  
3. While running scripts you may be asked to install `tsc` or `ts-node`. Install these packages.  

# Usage  
1. In a terminal, go to the `rpn-calculator` folder and enter the command `npm run build`. This will build the file for execution.  
2. Now enter the command `npm start`. This will run the program.  
3. To end the program, enter `CTRL + D` or type `q` or `.exit` in the command prompt.  

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
* CLI implementation: uses Node:Repl module  
    * Should allow values to be stored in memory until closed.  
    * This needs to be a REPL-like experience in order to keep values in memory.  
* Usage: running a built file provides an easy-to-use interface but allows me to use Typescript to ensure known input and output types during development.  
* Architecture: the goal of the project was a simple calculator. Evaluation and output are divided into separate files to make them more clearly interchangeable.  
* Future expansion: The Node REPL is easy to expand upon, changing out the inputs and outputs, making connections to other systems as needed. [https://nodejs.org/docs/latest-v18.x/api/repl.html#starting-multiple-repl-instances-against-a-single-running-instance](https://nodejs.org/docs/latest-v18.x/api/repl.html#starting-multiple-repl-instances-against-a-single-running-instance)

# Trade Offs  
The one thing I'm really unhappy about is that the Jest tests continue to return a warning about a leaky test. I think this is because I'm starting the REPL but not shutting it down properly at the end of the `index.spec.ts` tests. I spent some time trying to get a proper exit function to work, but it seems to end up in a race condition with test execution. Definitely something I would either spend more time on or remove the test in favor of a better overall test suite.

# Reference on RPN  
[https://mathworld.wolfram.com/ReversePolishNotation.html](https://mathworld.wolfram.com/ReversePolishNotation.html)