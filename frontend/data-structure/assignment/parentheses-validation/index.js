const Stack = require('./stack')

function IsValidParentheses(s) {
    // TODO: answer here
    const stack = [];
      const characters = { ')': '(', '}': '{', ']': '['};
      if (s === '') {
        return false;
      }
    for (const char of s) {
          
        if (!characters[char]){
           stack.push(char); 
        } 
        else if (stack.pop() !== characters[char]){
            return false;
        } 
      }
      return stack.length === 0;
    };
    
    module.exports = {
    IsValidParentheses
}