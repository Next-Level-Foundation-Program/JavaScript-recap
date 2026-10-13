// export import

function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    if(a > b){
        return a - b; 
    }
    else {
        return b - a;
    }
}


// export default means that this is the default export of the module, and it can be imported without using curly braces.
export const pi = 3.1419;
export default add;
