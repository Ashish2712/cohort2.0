// console.log("Hello world!");

// function greet(firstName, lastName){
//     console.log(`hello ${firstName} ${lastName}`);
// }

// greet("Ashish", "Singh");

// function greetWithGender(gender){
//     if(gender == "Male"){
//         console.log("Hello Sir");
//     }
//     else if(gender == "Female"){
//         console.log("Hello Mam")
//     }
//     else{
//         console.log("Please specify your gender from Male or Female")
//     }

// }

// greetWithGender("Male");

// re-do it using object lookup

// function greetWithGender(gender){
//     const greetings = {
//         Male: "Hello sir!",
//         Female: "Hello mam!"
//     }

//     console.log(greetings[gender] || "Please specify your gender as Male or Female" )

// }

// greetWithGender("Female");


function countValues(){
    for(let i=0; i<1000; i++){
        console.log(i)
    }
}

countValues();