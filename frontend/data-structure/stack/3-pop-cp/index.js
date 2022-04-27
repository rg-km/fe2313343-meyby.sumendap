// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi pop.

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
        // TODO: answer here
        if (this.top == -1) {
            throw "stack underflow";
        }
        else {
            this.top -= 1;
            return this.data.pop();
        }
    }
}
