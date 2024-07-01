let str="Nagarajan Ramakrishnan";
let ar = str.split(" ");
let finalName="";
for(let i=ar.length-1;i>=0;i--){
    finalName=finalName+ar[i]+" ";
}

console.log(finalName);

