import { Document } from "./document"

let OriginalDoc = new Document('ORIGINAL', [[1, 2, 3, 4],[5, 6, 7, 8]]);
let Copy1 = OriginalDoc.clone(2);
Copy1.name = 'Shallow Copy1';
Copy1.array[1][2] = 70;


console.log(OriginalDoc);
console.log(Copy1);
console.log("**************************");

let Copy2 = OriginalDoc.clone(2);
Copy2.name = 'Shallow Copy2';
Copy2.array[1] = [50, 60, 70, 80];


console.log(OriginalDoc);
console.log(Copy2);
console.log("**************************");


let Copy3 = OriginalDoc.clone(1);
Copy3.name = 'Deep Copy3';
Copy3.array[1][1] = 600;


console.log(OriginalDoc);
console.log(Copy3);
console.log("**************************");

