#! /usr/bin/env node

// Assignment no. 1

// installation complete:





// Assignment No.2 :

let perasonName1: string = "hello Eric, would you like to learn some today?"

let secand_variable: string = "and what is you name?"

console.log(perasonName1,secand_variable, "how are you?");





//  Assignment no 3 

let off: string = "hello G";
let touch: string = "miss,summaiya khan";
console.log( "what do you do?",`${off } ${touch}` );





// Assignment no.4

let perasonName2 = "suMMaIYA";
console.log ("lowercase:", perasonName2.toLowerCase());

let perasonName3 = "suMMaIYA kHan";
console.log ("Upercase:", perasonName3.toUpperCase());

let perasonName4 = "suMMaIYA kHan";
console.log ("tittlecase:", perasonName4.split(" ").map(item => item.charAt(0).toUpperCase() +
item.slice(1).toLowerCase()).join(" "));





// Assignment no.5

let fam: string = "i am not a perfect";
let dell: string = "hello";
console.log(fam ,`"but i am a motivated"`);
console.log(`"${fam}${dell}"`);

let famousperson1 = "Alebert Einstein"
console.log (`"Albert Einstain once said, "A person who never made a mistake never tried anything new"`);

let famousperson2 = "Alebert Einstein"
let message = "A person who never made a mistake never tried anything new"
console.log(famousperson2 , "once said" , message)
console.log(`${famousperson2} once said "${message}"`);





// Assignment no.6

let person_name: string = "\n\tperveen shah\n\t";
console.log(person_name);


// trim() this si finneshed space right to left:

let person_name2: string = person_name.trim();
console.log(person_name2);





// Assignment no.7+8

console.log(5+3);
console.log(11-3);
console.log(2*4);
console.log(16/2);





// Assignment no. 9
// this is frist way you can do
let myLovelyNumber1: number = 7;
console.log(`${myLovelyNumber1} ${"this is my favourite number"}`);

// this is secand way you can do
let myLovelyNumber2: number = 7;
console.log(`${myLovelyNumber2} this is my favourite number`);

// this is third way you can do
let myLovelyNumber3: number = 7;
let myLovelyNumber4: string = "this is my favourite number"
console.log(`${myLovelyNumber3} ${myLovelyNumber4}`);





// Assignment no.10
// Assignment is do comment this line:

// name : summaiya khan
// date : 8 may 2024





// Assignment No.11

let names: string[] = ["summaiya khan" , "ayesha", "saniya"];
// for lope
// 1. intialization 2. condition 3. increament/decrement

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    
}





// Assignment No.12

let names_2: string[] = ["summaiya khan" , "ayesha", "saniya"];
let name_3: string = "we are friend a forever";

// for lope
// 1. intialization 2. condition 3. increament/decrement

for (let i = 0; i < names_2.length; i++) {
    console.log(names_2[i],name_3);
    
    
}





// Assignment No.13

let names_4: string[] = ["house" , "banglo", "flat"];
let name_5: string = "we are friend a forever";

// for lope
// 1. intialization 2. condition 3. increament/decrement

for (let i = 0; i < names_4.length; i++) {
    console.log(names_4[i],name_5);
    


    
}





// Assignment no.14

let guestList: string[] = ["summaiya khan" , "ayesha" , "saniya"];
for (let index = 0; index < guestList.length; index++) {
   
    console.log("\ndear friend\n",guestList[index],"\nap ko invite kia ja raha ha humarry party may ager ap ay gay tu hamy bhoth khoshi ho gi\n", "\n\tthanks\n\t");
}





// Assignment no.15+16

 let guest_list: string[] = ["abdulRehaman" , "abdullha" , "perveen shah" ]
 let absent: string = "abdulRehaman";
 let namereplace: string = "ali";
 guest_list[2] = namereplace; 

 guest_list.unshift("naveed ahmed")
 guest_list.splice(2,0,"feroz")
 guest_list.push("summaiya khan")

    for (let i= 0; i< guest_list.length; i++) {
        console.log( "good news", guest_list[i],"i have found a begger table of dinner so i invite 3 more guest");
} 





// Assignment no.17

let listofguest1: string[] = ["abdulRehaman" , "abdullha" , "perveen shah" ]
  let replacename1: string = "ali";
  listofguest1[2] = replacename1; 

     listofguest1.unshift("naveed ahmed")
     listofguest1.splice(2,0,"feroz")
     listofguest1.push("summaiya khan")

console.log("sorry we can't arrange a bigger dinner table so only guest are invited");

while (listofguest1.length >2) {
    let removeguest1 = listofguest1.pop();
    console.log(removeguest1, "\nsorry you are not invited to dinner");
    
}

for (let index = 0; index < listofguest1.length; index++) {
    console.log("dear mr\n",listofguest1[index], "\nyou are not invited to dinner\n");
    
    
}

listofguest1.splice(0,2);
console.log(listofguest1);





// Assignment no.18

//  don't do alphabatical order

let not_alphabatical_order: string[] = ["karachi","islamabad","azad_kashmir","peshawer","lahore"]

console.log(not_alphabatical_order,"orignal order");

// alphabatical order

let _alphabatical_order: string[] = ["karachi","islamabad","azad_kashmir","peshawer","lahore"]

console.log([..._alphabatical_order].sort(),"alphabatical order");

// sort means alphabatical order:

// again show orignal from

console.log(not_alphabatical_order,"orignal order");

// again alphabatical order

console.log([..._alphabatical_order].sort(),"alphabatical order");

// reverse alphabatical order

console.log([..._alphabatical_order].sort().reverse(),"reverse alphabatical order");
// reverse means puri line ko ulta print ker dana:

// orginal simple way
console.log(not_alphabatical_order,"orignal order");

// reverse way
console.log(_alphabatical_order.reverse(),"reverse order");

// put in the array
console.log([_alphabatical_order].reverse(),"again reverse order");


// reverse alphabatical order

console.log(_alphabatical_order.sort().reverse(),"again reverse order");

let place = _alphabatical_order

console.log(place.sort().reverse(),"again reverse order");





// Assignment no.19

// stard now

// Assignment no.14

let guest_List: string[] = ["summaiya khan" , "ayesha" , "saniya"];
for (let index = 0; index < guest_List.length; index++) {
   
    console.log("\ndear friend\n",guest_List[index],"\nap ko invite kia ja raha ha humarry party may ager ap ay gay tu hamy bhoth khoshi ho gi\n", "\n\tthanks\n\t");
}





// Assignment no.16

 let listofguest2: string[] = ["abdulRehaman" , "abdullha" , "perveen shah" ]
  let absentGuest2: string = "abdulRehaman";
  let replacename2: string = "ali";

  absentGuest2= replacename2
  listofguest2[2] = replacename2; 

     listofguest2.unshift("naveed ahmed")
     listofguest2.splice(2,0,"feroz")
     listofguest2.push("summaiya khan")

     for (let i= 0; i< listofguest2.length; i++) {
         console.log( "good news", listofguest2[i],"i have found a begger table of dinner so i invite 3 more guest");
 }





//  Assignment no.17

   let listofguest: string[] = ["abdulRehaman" , "abdullha" , "perveen shah" ]
   let absentGuest: string = "abdulRehaman";
   let replacename: string = "ali";
   listofguest[2] = replacename; 

      listofguest.unshift("naveed ahmed")
      listofguest.splice(2,0,"feroz")
     listofguest.push("summaiya khan")

     
console.log("sorry we can't arrange a bigger dinner table so only guest are invited");

while (listofguest.length >2) {
     let removeguest = listofguest.pop();
     console.log(removeguest, "\nsorry you are not invited to dinner");
    
 }

 for (let index = 0; index < listofguest.length; index++) {
     console.log("dear mr\n",listofguest[index], "\nyou are still invited to dinner\n");
    
    
 }

 listofguest.splice(0,2);
 console.log(listofguest);

console.log("how many people are invited to the dinner",listofguest.length);





//  Assignment no. 20

// method no.1

// foreach means for loop and loop using this is write properly like a normal write.
// this assaiment you can do push, unsift:

let array1 = [];

array1.push("river");
 array1.forEach(array1 => {
      
console.log(array1);
 });



// method no.2


let array2 = ["mountain"];

array2.forEach(array2 => {
    console.log(array2); 
    
 });





 // Assignment no.21

// we are going to learning objects
// what is this?

interface personaData{
    name: string;
    age: number;
    education: string;

}

let personaData = {
    name:"summaiya khan",
    age: 15,
    education:"matric",

}

console.log(personaData);





// Assignment no.22

let num1 = ["1","2","3","4"];
// console.log(num1[5]);

console.log(num1[2]);





// Assignment no. 23

// conditional text


let car = 'subara';

console.log("is car == 'subara'?   i predict true.");

console.log(car == 'subaru');




// secand method

let car2 = 'subaru';

console.log("is car2 !== 'subara'?   i predict true.");

console.log(car2 !== 'subaru');






// Assignment no.24

// test of eqaulity and inequality test:
console.log("equality text:",("summaiya khan" as string) === "summaiya khan");

console.log("inequality text:",("summaiya khan" as string) === "abdullah");

// test using the lower case function:
console.log("lower case",("SUMMAIYA KHAN".toLowerCase() === "summaiya khan"));

// numarical tests and involving equality and inequality, greater than and less then, greater then
console.log("equal test", 100 === 100);
console.log("equal test", (10 as number) !== 9 );

console.log("greater than", 1000 > 100);
console.log("greater than", 10 < 100);

console.log("greter than and equals to test", 10 >= 10);
console.log("greter than and equals to test", 5 <= 10);

// test using and, or operators:
console.log("and operator test", true && true);
console.log("or operator test", false || true);

// test weather an item is in a array:
 const car0 = [1 ,2 ,3];
 console.log("test number", car0.includes(1));


 const car1 = [1 ,2 ,3];
 console.log("test number", !car1.includes(7));

// this is don't do work:





// Assignment no.25

let alien_color1 = "green";

if (alien_color1 === "green"){
console.log("you have won five points ");

} 

// pass:

alien_color1 = "yellow";

if (alien_color1 === "green"){
    console.log("you have won five points ");
    
    } 
    




// // Assignment no.26

let alien_color2 = "green";

if (alien_color2 === "green"){
console.log("you have won just five points ");

} 

else {
    console.log("you have won ten points");
    
}

alien_color2 = "yellow";


if (alien_color2 === "green"){
console.log("you have won five points ");

} 

else {
   console.log("you have won just ten points");
   
}





// Assignment no.27:

// run No.1
let alien_color = "green";

if (alien_color === "green"){
    console.log("you have won just 5 points");
    
    } 

   else if (alien_color === "yellow"){
    console.log("you have won just 10 points");
    
   }
    
   else if (alien_color === "red"){
    console.log("you have won just 15 points");
    
   }
    
    else {
       console.log("unknow color");
       
    }

    // run No.2

     alien_color = "yellow";

if (alien_color === "green"){
    console.log("you have won just 5 points");
    
    } 

   else if (alien_color === "yellow"){
    console.log("you have won just 10 points");
    
   }
    
   else if (alien_color === "red"){
    console.log("you have won just 15 points");
    
   }
    
    else {
       console.log("unknow color");
       
    }

    // run No.3

     alien_color = "red";

if (alien_color === "green"){
    console.log("you have won just 5 points");
    
    } 

   else if (alien_color === "yellow"){
    console.log("you have won just 10 points");
    
   }
    
   else if (alien_color === "red"){
    console.log("you have won just 15 points");
    
   }
    
    else {
       console.log("unknow color");
       
    }

    // run No.4

   alien_color = "blue";

if (alien_color === "green"){
    console.log("you have won just 5 points");
    
    } 

   else if (alien_color === "yellow"){
    console.log("you have won just 10 points");
    
   }
    
   else if (alien_color === "red"){
    console.log("you have won just 15 points");
    
   }
    
    else {
       console.log("unknow color");
       
    }





// Assignment no.28

// (&&) this is means (and):

let age = 60;

if (age <2){
console.log("the peron is a baby.");

}
else if (age >=2 && age < 4){

    console.log("the person is a toddler");
    
}

else if (age >=4 && age < 13){
console.log("the person is a kid");

}

else if (age >=13 && age < 20){
    console.log("the person is a teenager");
    
}

else if (age >=20 && age < 65){
    console.log("the person is a adult.");
    
}

else if (age >=65 && age < 65){
    console.log("the person is a elder");
    
}





//Assignment no.29

let favorite_fruits = ["mango", "banana" , "charry"]

if (favorite_fruits.includes("banana")){
    console.log("you are really like charry");
    
}

if (favorite_fruits.includes("charry")){
    console.log("you are really like charry");
    
}

if (favorite_fruits.includes("mango")){
    console.log("you are really like charry");
    
}

if (favorite_fruits.includes("apple")){
    console.log("you are really like charry");
    
}

if (favorite_fruits.includes("strubbary")){
    console.log("you are really like charry");
    
}




// Assignmentno.30

let users1 : string [] = ["admin","eric","haseeb","ali","fatima"]

for(let user of users1){
    if(user === "admin"){
        console.log("hello admin, would you like to see a status report?");
        
    }else{
        console.log(`hello ${users1}, thank you for login logging in again`);
        
    }
}





// Assignment no.31

let users : string [] = ["admin","eric","haseeb","ali","fatima"];

if (users.length === 0){
    console.log("we need to same user!");
    
}
else{
   for(let user of users){
    if (user === "admin"){
        console.log(`hello admin would you like to see a status report`);
    }
        else{
            console.log(`hello ${users}, thank you for logging to again`);
            
        }
    }    
}





// Assignment no.32

let current_user : string[] = ["SumMaiyA khaN","ABduLlah","AbduL reHman","nadEem khAn","PervEen ShAh"]
let new_users : string[] = ["abdullah","nadeem khan","perveen shah","noor","aliza"]


let current_user_lower: string[] = current_user.map(user => user.toLowerCase());

for (let new_user of new_users){
    if (current_user_lower.includes(new_user.toLowerCase())){
        console.log(`sorry , ${new_user}, that name is taken`);
        
    } else{
        console.log(`yes ${new_user},is still in avaliable list`);
        
    }
}





// Assignment no.33

let numbers : number[] = [1,2,3,4,5,6,7,8,9]

for (let number of numbers){

if (number === 1){
    console.log(`${numbers}st`);
}
    else if(number === 2){
        console.log(`${numbers}nd`);
        
    }

    else if(number === 3){
        console.log(`${numbers}rd`);
        
    }
    
else{
    console.log(`${number}th`);
    
}

}





// Assignment no.34

let favourite_pizza : string [] = ["papporoni","chicken","vag"]

for(let pizza of favourite_pizza){
    console.log(`i really like ${pizza} pizza`);
    
}

console.log("\n i really like pizza");






// Assignment no.35

let animals: string[] = ["cat","lion","dog"]

for(let animal of animals){
    console.log(animal);
}  

console.log("\n");

// 2 step
for (let animal of animals){
    console.log(`A ${animal} has a tell`);
    
}
// 3 step

console.log("\n all of the are great pets but i love dogs");





// Assignment no.36

// function makeshirt(size: string, text: string):void{
//     console.log(`\n you order a ${size} shirt that says ${text}`)
    
// }

// makeshirt(`large`,`"i love typescript"`)
// makeshirt(`medium`,`"i need a big shirt"`)





// Assignment no.37

function makeshirt(size: string = 'large', text: string = 'i love typescript'):void{
         console.log(`\n you have order a ${size} shirt that says ${text}`)
        
}
// makeshirt();
// makeshirt('medium')

makeshirt('small','i need a big shirt to wear')





// Assignment no.38

function describe_city(city: string, country: string = 'pakistan'):void{
    console.log(`${city} ${country}`);
    
}

describe_city('karachi')
describe_city('france','europe')
describe_city('lahore')





// Assignment no.39

function city_country(city: string, country: string):string{
    return `${city},${country}`
}

let city1 = city_country('lahore','pakistan')
let city2 = city_country('tokyo','japan')
let city3 = city_country('paris','france')

console.log(city1);
console.log(city2);
console.log(city3);





// Assignment no. 40

function makeAlbum (artist: string, title: string):{artist: string; title: string}{
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase()+ artist.slice(1),
        title: artist.charAt(0).toUpperCase()+ title.slice(1)
    };
    return dictionaries;
}

let album = makeAlbum("ali","light")
console.log(album);

 album = makeAlbum("bilal","red wave")
console.log(album);

 album = makeAlbum("hamza","seenbreez")
console.log(album);

// how to do update a featers:
// jab ap (npm init) ki command challay gay tu ap kay pass (package.json) ki file ban gay gi:

// 1. npm init 
// (result: package.json)

// 2. tsc --init 
// (result: tsconfig.json)

// 3. npm i inquirer
// (result: import inquirer and make (package-lock.json))

// 4. npm i --save-dev @types/inquirer
// this import packages





// Assignment no.41

function show_magicions(magicions: string[]): void {
     for (const magicion of magicions){
        console.log(magicion.charAt(0).toUpperCase() + magicion.slice(1));
        
     }

}
const magicion: string[] = ["ali","hamza","bilal"];
show_magicions(magicion)




// Assignment no.42

function make_great(magicions2: string[]): void{
    for (let i = 0; i < magicions2.length; i++) {
        magicions2[i] = magicions2[i] + "\tthe great"
        
    }
}

const magicions2: string[] = ["ali","hamza","bilal"];
make_great(magicions2)
show_magicions(magicions2)



// Assignment no.43

function make_great2(magicion: string[]): string[] {
    const great_magicions: string[] = [];
    for (let index = 0; index < great_magicions.length; index++) {
        great_magicions.push(magicions2[index] + "the great")
        
    }
    return great_magicions
}


const magicions3 : string[] =["asman","haseeb","abdullah"]

const great_magicions2: string[] = make_great2(magicions3)
show_magicions(magicions3);
show_magicions(great_magicions2)





// Assignment no.44

function sandwich(...items: string[]): void{
    console.log("sandwich order:");
    
    for (let index = 0; index < items.length; index++) {
        console.log(`- ${items [index]}`);
        
        
    }
}

console.log("enjoy your sandwich summaiya khan");


sandwich('capricon','tomato','chicken')
sandwich('beef','cheese')
sandwich('garlic','chicken','mayo sauce')





// Assignment no.45

type car = {
    manufacture : string
    model: string
    [key: string]: any;


}

function createcar(manufacture: string, model: string, optional: Record<string, any>): car{
    return{
           manufacture,
           model,
           ...optional
    }
}

const myCar: car = createcar("toyoto","corolla",{ color: "black", year: "2024"})

console.log(myCar);

// here is complete all assaigment:
