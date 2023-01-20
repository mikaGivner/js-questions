// Ex2.7 - Basic Math
// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.

const f = (operation, val1, val2) => {
    switch (operation){
    case '+':
        return val1+val2;

        case '-':
            return val1-val2;

            case ':':
            return val1/val2;

            case '*':
            return val1*val2;

            case '%':
            return val1%val2;

            case '/':
            return val1/val2;
            
            default: 
            return "this operation is not available"
    }

}

console.log(f('/',49, 7));