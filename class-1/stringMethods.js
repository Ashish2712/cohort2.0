// subtring

str = "Hello world"



substitute_stirng = str.substr(3,5)

console.log("Hello World".substr(3,5))

// write a custom substring function

const customSubstr = (originalStr, startIdx, endIdx) => {
    var result = "";
    for (let i=startIdx; i<startIdx + endIdx; i++){
        result += originalStr[i];
    }
    return result;
}

console.log(customSubstr("Hello World", 3, 5));

const str = "Hello world";
console.log(str.replace(str, "world", "javascript"))


console.log("hello world".split('l'));


console.log(parseInt("dsdsds42.32"))

array1 = [1,2,4,5,56,6]
array2 = [3,2,5,6,7,7]

array1.concat(array2);

console.log(array1)