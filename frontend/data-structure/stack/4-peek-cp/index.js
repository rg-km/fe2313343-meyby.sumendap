// Dari inisiasi stack dengan maksimal elemen sebanyak 10, implementasikan operasi peek.

module.exports = class Stack {
    constructor() {
        this.size = 10;
        this.data = [];
        this.top = -1;
    }

    push(elemen) {
        
        if (this.top === this.size -1){
            throw 'stack overflow' ;
        }
        this.data[(this.top += 1)] = elemen;
    }

    pop() {
        if (this.top == -1) {
        throw "stack underflow";
        }
        else {
            this.top -= 1;
            return this.data.pop();
        }
    }

    peek() {
        // TODO: answer here
        if (this.top == -1) {
        throw'stack is empty';  
        } 
        else {
            this.top -= 1;
            return this.data.peek();
        }
    }
}
