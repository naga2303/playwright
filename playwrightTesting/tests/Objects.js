let obj = {fname:"",lname:"",date:"23-03-2024"};
obj["fname"]="a";
console.log(obj);

let dateFormat = obj["date"];
let dt = new Date(dateFormat);


console.log(dt.getDay());