// First of all when ever we create a .js file
// A Global Execution context is created. And the 
// Global Execution context is saved in to a keyword
// called "this". If you are on the browser the "this"
// keyword always refers to window object.
// After that there are two more execution context that
// is created (i) Functional execution context
// (ii) eval execution context.
// JavaScript is a synchronous single threaded programming 
//language

// In any .js file codes run in two phases  
// (i) Memory creations phase / creation phase
// in memory creation phase memory is allocated to
// the variables and functions that a developer creates. 
// the code is not executed in memory allocation phase.

// (ii)Code execution phase
// lets understand this by an example, lets say
// I created 2 variable, val1 = 10, val2 = 20;
// then created an addNum function with 2 parameters, num1,
// num2, and inside the addNum function I create a variable
// total = num1 + num2; and returned it from the function
// please look at the code snippet below.
// I 

// let val1 = 10;
// let val2 = 5;
// function addNum(num1, num2) {
//     let total = num1 + num2;
//     return total;
// }
// here I have created a result1 variable, to store the 
// addNum execution and passed val1 and val2 variable 
// that were created earlier
// let result1 = addNum(val1, val2);

// here I have created a result2 variable, to store the 
// addNum execution and have passed values directly
// let result2 = addNum(10, 2);


// So, how is this code executed, lets start from 
// the begining step wise.

// 1-> Global execution, so first of all any code you run
    // in javascript its run from global execution and 
    // global execution is allocated in "this" keyword
// 2-> Creation phase/ creation phase. In this phase
    // memory is allocated to variable and functions
    // suppose a variable is created (let a = 10)
    // what will be stored in val1 ?  undefined.
    // why? because this what happens in memory creation
    // phase, same with val2 variable.
    // But, this is not the case with functions
    // when we create a function, i.e function addNum(){}
    // addNum : {
    //     let total = num1 + num2;
    //     return total;
    // }
    // addNum is the function's name in memory and it holds
    // the definition of itself, in memory phase.
    // After the function, we created 2 variables result1,
    // and result2 where I stored the function call 
    // i.e. let result1 = addNum(val1, val2),
    // let result2 = addNum(12, 2); now what will be stored 
    // in result1 and result2 ? undefined, yes undefined
    // because this is memory creation phase.

    // 3-> execution phase
    // what will happen in execution phase ? In execution
    // phase in variables val1, and val2, 10 and 5 would
    // get added respectively, now what about 
    // addNum ? nothing, because there is nothing to 
    // execute there, the whole defination was already stored 
    // in it, now we get to the result1, what would be added
    // to result1, (remember this is execution phase);
    // in the result1 addNum() has to be added, and
    // addNum() is a function, So what happens is that
    // addNum creates a new execution context. In this
    // execution context there will be created a new
    // variable-environment and execution context of its own.
    // Now that addNum() has its own execution context
    // the whole process will take place again, the memory 
    // creation phase and execution phase, this process will
    //  take place as many times as, as many functions you 
    // have creat. Lets go throught the process once again.

    let val1 = 10;
    let val2 = 5;
    function addNum(num1, num2) {
        let total = num1 + num2;
        return total;
    }
    let result1 = addNum(val1, val2);
    let result2 = addNum(10, 2);

    // 1-> memory creation phase (in addNum execution context)
    // we have 2 parameters val1 and val2, which will hold 
    // undefined, we also have a variable "total", which
    // will also hold undefined, after this we are done with
    // memory creation phase because we dont have anything
    // else in the our function.

    // 2-> execution Phase (in addNum execution context)
        // So in this execution context our num1 and num2
        //  will get replaced with 10 and 5 respectively.
        // and in variable total will get replaced by the
        // result of addition of num1 and num2 which is 15
        // the function is returning the total, So where 
        // will it return the total to ? Global execution
        // context. After returning, the execution context
        // is deleted. And result1 which is in global execution context, will hold 15;
        // after that we will get to result2 variable, 
        // when we get to result2 the process will start
        // over because we have a function in it.
        // again 
        // new execution context
        // 1-> new variable environment + execution thread
        // again
        // 1-> memory creation phase 
            // from here all the process will take exactly same as before, because we are calling the 
            // same function again and storing it in result2
        // 2-> execution phase 
        // in execution phase all, same

        // +++++++++++++++ Call stact +++++++++++++++++++++++
        // there is another thing known as call stack
        // imagine a call stack like a stack of 
        // execution contexts, the first execution
        // context that enter the call stack is the global
        // execution context, and depending on the line of 
        // code when ever there is a function called, 
        // execution context is create, the call stack will
        // get populated with that context until its work
        // is done and it is deleted, the last thing
        // that gets out of the call stack is the the 
        // global excution context because the call stack
        // works on the basis of data structure FILO(first 
        // in last out), like a stack, when we see stack of 
        // books, we put 1 book first, on top of that another
        // book, and so on, so the first book which we have 
        // put is in the bottom of all books, to pick it we 
        // would have to remove all the books on top of
        // it and then we will get to that one.


        









    




    
