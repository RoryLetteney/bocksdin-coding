import Stack from "./stack";

const validateBrackets 
    = (str: string): boolean => {
    const stack = new Stack(140);

    const openingBrackets  = ["(", "{", "["],
          closingBrackets  = [")", "}", "]"],
          bracketPairs     = { ")": "(",
                               "}": "{",
                               "]": "["};

    for (let char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        }
        else if (closingBrackets.includes(char)) {
            const openingBracket = stack.pop();

            if (openingBracket !== bracketPairs[char])
                return false;
        }
    }

    if (stack.peek())
        return false;

    return true;
}

validateBrackets("(this is a simple valid example)");  // true
validateBrackets("if (2 + 2 === 4) { return true; }"); // true
validateBrackets(" { ] ");                             // false
validateBrackets(" ( ) { ");                           // false