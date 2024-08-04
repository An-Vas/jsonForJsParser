const { parseJson } = require('./algo/jsonParse');
const { jsonStringify } = require('./algo/jsonStringify');



var obj = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 100,
    city: 'St Petersburg',
    hobbies: ['reading', 'programming', 'sports'],
};

var arr = [1, "2", obj, [10, 11]]
var num = 12;
var simpleStr = "Hello";
var nullVar = null;
var undefinedVar = undefined;


console.log(" ---- json Stringify ---- ")
console.log(jsonStringify(obj))
console.log(JSON.stringify(obj))
//output for both: {"name":"Ivan","surname":"Ivanov","age":100,"city":"St Petersburg","hobbies":["reading","programming","sports"]}
console.log(jsonStringify(arr))
console.log(JSON.stringify(arr))
//output for both: [1,"2",{"name":"Ivan","surname":"Ivanov","age":100,"city":"St Petersburg","hobbies":["reading","programming","sports"]},[10,11]]
console.log(jsonStringify(num))
console.log(JSON.stringify(num))
//output for both: 12
console.log(jsonStringify(simpleStr))
console.log(JSON.stringify(simpleStr))
//output for both: "Hello"
console.log(jsonStringify(nullVar))
console.log(JSON.stringify(nullVar))
//output for both: null
console.log(jsonStringify(undefinedVar))
console.log(JSON.stringify(undefinedVar))
//output for both: undefined


console.log(" ")
console.log(" ")
console.log(" ")

console.log(" ---- json Parse ---- ")
var Ivan = "{\"name\":\"Ivan\",\"Programmer\":\"true\",\"surname\":\"Ivanov\",\"age\":100,\"city\":\"St Petersburg\", \"hobbies\":[\"reading\",\"programming\",\"sports\"]}"
var IvanAndCo = "[{\"name\":\"Ivan\",\"surname\":\"Ivanov\",\"age\":100,\"city\":\"St Petersburg\", \"hobbies\":[\"reading\",\"programming\",\"sports\"]}, 2, \"Hello\"]"

console.log(parseJson(Ivan));
console.log(JSON.parse(Ivan))
//output for both: {
//   name: 'Ivan',
//   Programmer: 'true',
//   surname: 'Ivanov',
//   age: 100,
//   city: 'St Petersburg',
//   hobbies: [ 'reading', 'programming', 'sports' ]
// }
console.log(parseJson(IvanAndCo));
console.log(JSON.parse(IvanAndCo))
// output for both:[
//   {
//     name: 'Ivan',
//     surname: 'Ivanov',
//     age: 100,
//     city: 'St Petersburg',
//     hobbies: [ 'reading', 'programming', 'sports' ]
//   },
//   2,
//   'Hello'
// ]