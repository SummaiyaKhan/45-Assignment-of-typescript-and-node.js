// assaiment no. 1
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// installation complete:
// Assaiment No.2 :
var perasonName1 = "hello Eric, would you like to learn some today?";
var secand_variable = "and what is you name?";
console.log(perasonName1, secand_variable, "how are you?");
//  assaiment no 3 
var off = "hello G";
var touch = "miss,summaiya khan";
console.log("what do you do?", "".concat(off, " ").concat(touch));
// assaiment no.4
var perasonName2 = "suMMaIYA";
console.log("lowercase:", perasonName2.toLowerCase());
var perasonName3 = "suMMaIYA kHan";
console.log("Upercase:", perasonName3.toUpperCase());
var perasonName4 = "suMMaIYA kHan";
console.log("tittlecase:", perasonName4.split(" ").map(function (item) { return item.charAt(0).toUpperCase() +
    item.slice(1).toLowerCase(); }).join(" "));
// assaiment no.5
var fam = "i am not a perfect";
var dell = "hello";
console.log(fam, "\"but i am a motivated\"");
console.log("\"".concat(fam).concat(dell, "\""));
var famousperson1 = "Alebert Einstein";
console.log("\"Albert Einstain once said, \"A person who never made a mistake never tried anything new\"");
var famousperson2 = "Alebert Einstein";
var message = "A person who never made a mistake never tried anything new";
console.log(famousperson2, "once said", message);
console.log("".concat(famousperson2, " once said \"").concat(message, "\""));
// assaiment no.6
var person_name = "\n\tperveen shah\n\t";
console.log(person_name);
// trim() this si finneshed space right to left:
var person_name2 = person_name.trim();
console.log(person_name2);
// assaiment no.7+8
console.log(5 + 3);
console.log(11 - 3);
console.log(2 * 4);
console.log(16 / 2);
// assaiment no. 9
// this is frist way you can do
var myLovelyNumber1 = 7;
console.log("".concat(myLovelyNumber1, " ").concat("this is my favourite number"));
// this is secand way you can do
var myLovelyNumber2 = 7;
console.log("".concat(myLovelyNumber2, " this is my favourite number"));
// this is third way you can do
var myLovelyNumber3 = 7;
var myLovelyNumber4 = "this is my favourite number";
console.log("".concat(myLovelyNumber3, " ").concat(myLovelyNumber4));
// assaiment no.10
// assaiment is do comment this line:
// name : summaiya khan
// date : 8 may 2024
// Assaiment No.11
var names = ["summaiya khan", "ayesha", "saniya"];
// for lope
// 1. intialization 2. condition 3. increament/decrement
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Assaiment No.12
var names_2 = ["summaiya khan", "ayesha", "saniya"];
var name_3 = "we are friend a forever";
// for lope
// 1. intialization 2. condition 3. increament/decrement
for (var i = 0; i < names_2.length; i++) {
    console.log(names_2[i], name_3);
}
// Assaiment No.13
var names_4 = ["house", "banglo", "flat"];
var name_5 = "we are friend a forever";
// for lope
// 1. intialization 2. condition 3. increament/decrement
for (var i = 0; i < names_4.length; i++) {
    console.log(names_4[i], name_5);
}
// Assaiment no.14
var guestList = ["summaiya khan", "ayesha", "saniya"];
for (var index = 0; index < guestList.length; index++) {
    console.log("\ndear friend\n", guestList[index], "\nap ko invite kia ja raha ha humarry party may ager ap ay gay tu hamy bhoth khoshi ho gi\n", "\n\tthanks\n\t");
}
// Assaiment no.15+16
var guest_list = ["abdulRehaman", "abdullha", "perveen shah"];
var absent = "abdulRehaman";
var namereplace = "ali";
guest_list[2] = namereplace;
guest_list.unshift("naveed ahmed");
guest_list.splice(2, 0, "feroz");
guest_list.push("summaiya khan");
for (var i = 0; i < guest_list.length; i++) {
    console.log("good news", guest_list[i], "i have found a begger table of dinner so i invite 3 more guest");
}
// Assaiment no.17
var listofguest1 = ["abdulRehaman", "abdullha", "perveen shah"];
var replacename1 = "ali";
listofguest1[2] = replacename1;
listofguest1.unshift("naveed ahmed");
listofguest1.splice(2, 0, "feroz");
listofguest1.push("summaiya khan");
console.log("sorry we can't arrange a bigger dinner table so only guest are invited");
while (listofguest1.length > 2) {
    var removeguest1 = listofguest1.pop();
    console.log(removeguest1, "\nsorry you are not invited to dinner");
}
for (var index = 0; index < listofguest1.length; index++) {
    console.log("dear mr\n", listofguest1[index], "\nyou are not invited to dinner\n");
}
listofguest1.splice(0, 2);
console.log(listofguest1);
// assaiment no.18
//  don't do alphabatical order
var not_alphabatical_order = ["karachi", "islamabad", "azad_kashmir", "peshawer", "lahore"];
console.log(not_alphabatical_order, "orignal order");
// alphabatical order
var _alphabatical_order = ["karachi", "islamabad", "azad_kashmir", "peshawer", "lahore"];
console.log(__spreadArray([], _alphabatical_order, true).sort(), "alphabatical order");
// sort means alphabatical order:
// again show orignal from
console.log(not_alphabatical_order, "orignal order");
// again alphabatical order
console.log(__spreadArray([], _alphabatical_order, true).sort(), "alphabatical order");
// reverse alphabatical order
console.log(__spreadArray([], _alphabatical_order, true).sort().reverse(), "reverse alphabatical order");
// reverse means puri line ko ulta print ker dana:
// orginal simple way
console.log(not_alphabatical_order, "orignal order");
// reverse way
console.log(_alphabatical_order.reverse(), "reverse order");
// put in the array
console.log([_alphabatical_order].reverse(), "again reverse order");
// reverse alphabatical order
console.log(_alphabatical_order.sort().reverse(), "again reverse order");
var place = _alphabatical_order;
console.log(place.sort().reverse(), "again reverse order");
// Assaiment no.19
// stard now
// Assaiment no.14
var guest_List = ["summaiya khan", "ayesha", "saniya"];
for (var index = 0; index < guest_List.length; index++) {
    console.log("\ndear friend\n", guest_List[index], "\nap ko invite kia ja raha ha humarry party may ager ap ay gay tu hamy bhoth khoshi ho gi\n", "\n\tthanks\n\t");
}
// Assaiment no.16
var listofguest2 = ["abdulRehaman", "abdullha", "perveen shah"];
var absentGuest2 = "abdulRehaman";
var replacename2 = "ali";
absentGuest2 = replacename2;
listofguest2[2] = replacename2;
listofguest2.unshift("naveed ahmed");
listofguest2.splice(2, 0, "feroz");
listofguest2.push("summaiya khan");
for (var i = 0; i < listofguest2.length; i++) {
    console.log("good news", listofguest2[i], "i have found a begger table of dinner so i invite 3 more guest");
}
//  assaiment no.17
var listofguest = ["abdulRehaman", "abdullha", "perveen shah"];
var absentGuest = "abdulRehaman";
var replacename = "ali";
listofguest[2] = replacename;
listofguest.unshift("naveed ahmed");
listofguest.splice(2, 0, "feroz");
listofguest.push("summaiya khan");
console.log("sorry we can't arrange a bigger dinner table so only guest are invited");
while (listofguest.length > 2) {
    var removeguest = listofguest.pop();
    console.log(removeguest, "\nsorry you are not invited to dinner");
}
for (var index = 0; index < listofguest.length; index++) {
    console.log("dear mr\n", listofguest[index], "\nyou are still invited to dinner\n");
}
listofguest.splice(0, 2);
console.log(listofguest);
console.log("how many people are invited to the dinner", listofguest.length);
//  Assaiment no. 20
// method no.1
// foreach means for loop and loop using this is write properly like a normal write.
// this assaiment you can do push, unsift:
var array1 = [];
array1.push("river");
array1.forEach(function (array1) {
    console.log(array1);
});
// method no.2
var array2 = ["mountain"];
array2.forEach(function (array2) {
    console.log(array2);
});
var personaData = {
    name: "summaiya khan",
    age: 15,
    education: "matric",
};
console.log(personaData);
// Assaiment no.22
var num1 = ["1", "2", "3", "4"];
// console.log(num1[5]);
console.log(num1[2]);
// Assaimnet no. 23
// conditional text
var car = 'subara';
console.log("is car == 'subara'?   i predict true.");
console.log(car == 'subaru');
// secand method
var car2 = 'subaru';
console.log("is car2 !== 'subara'?   i predict true.");
console.log(car2 !== 'subaru');
// assaiment no.24
// test of eqaulity and inequality test:
console.log("equality text:", "summaiya khan" === "summaiya khan");
console.log("inequality text:", "summaiya khan" === "abdullah");
// test using the lower case function:
console.log("lower case", ("SUMMAIYA KHAN".toLowerCase() === "summaiya khan"));
// numarical tests and involving equality and inequality, greater than and less then, greater then
console.log("equal test", 100 === 100);
console.log("equal test", 10 !== 9);
console.log("greater than", 1000 > 100);
console.log("greater than", 10 < 100);
console.log("greter than and equals to test", 10 >= 10);
console.log("greter than and equals to test", 5 <= 10);
// test using and, or operators:
console.log("and operator test", true && true);
console.log("or operator test", false || true);
// test weather an item is in a array:
var car0 = [1, 2, 3];
console.log("test number", car0.includes(1));
var car1 = [1, 2, 3];
console.log("test number", !car1.includes(7));
// this is don't do work:
// assaiment no.25
var alien_color1 = "green";
if (alien_color1 === "green") {
    console.log("you have won five points ");
}
// pass:
alien_color1 = "yellow";
if (alien_color1 === "green") {
    console.log("you have won five points ");
}
// // assaiment no.26
var alien_color2 = "green";
if (alien_color2 === "green") {
    console.log("you have won just five points ");
}
else {
    console.log("you have won ten points");
}
alien_color2 = "yellow";
if (alien_color2 === "green") {
    console.log("you have won five points ");
}
else {
    console.log("you have won just ten points");
}
// assaimnet no.27:
// run No.1
var alien_color = "green";
if (alien_color === "green") {
    console.log("you have won just 5 points");
}
else if (alien_color === "yellow") {
    console.log("you have won just 10 points");
}
else if (alien_color === "red") {
    console.log("you have won just 15 points");
}
else {
    console.log("unknow color");
}
// run No.2
alien_color = "yellow";
if (alien_color === "green") {
    console.log("you have won just 5 points");
}
else if (alien_color === "yellow") {
    console.log("you have won just 10 points");
}
else if (alien_color === "red") {
    console.log("you have won just 15 points");
}
else {
    console.log("unknow color");
}
// run No.3
alien_color = "red";
if (alien_color === "green") {
    console.log("you have won just 5 points");
}
else if (alien_color === "yellow") {
    console.log("you have won just 10 points");
}
else if (alien_color === "red") {
    console.log("you have won just 15 points");
}
else {
    console.log("unknow color");
}
// run No.4
alien_color = "blue";
if (alien_color === "green") {
    console.log("you have won just 5 points");
}
else if (alien_color === "yellow") {
    console.log("you have won just 10 points");
}
else if (alien_color === "red") {
    console.log("you have won just 15 points");
}
else {
    console.log("unknow color");
}
// assaiment no.28
// (&&) this is means (and):
var age = 60;
if (age < 2) {
    console.log("the peron is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("the person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("the person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("the person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("the person is a adult.");
}
else if (age >= 65 && age < 65) {
    console.log("the person is a elder");
}
// assaiment no.29
var favorite_fruits = ["mango", "banana", "charry"];
if (favorite_fruits.includes("banana")) {
    console.log("you are really like charry");
}
if (favorite_fruits.includes("charry")) {
    console.log("you are really like charry");
}
if (favorite_fruits.includes("mango")) {
    console.log("you are really like charry");
}
if (favorite_fruits.includes("apple")) {
    console.log("you are really like charry");
}
if (favorite_fruits.includes("strubbary")) {
    console.log("you are really like charry");
}
// assaimnet no.30
var users1 = ["admin", "eric", "haseeb", "ali", "fatima"];
for (var _i = 0, users1_1 = users1; _i < users1_1.length; _i++) {
    var user = users1_1[_i];
    if (user === "admin") {
        console.log("hello admin, would you like to see a status report?");
    }
    else {
        console.log("hello ".concat(users1, ", thank you for login logging in again"));
    }
}
// assaiment no.31
var users = ["admin", "eric", "haseeb", "ali", "fatima"];
if (users.length === 0) {
    console.log("we need to same user!");
}
else {
    for (var _a = 0, users_1 = users; _a < users_1.length; _a++) {
        var user = users_1[_a];
        if (user === "admin") {
            console.log("hello admin would you like to see a status report");
        }
        else {
            console.log("hello ".concat(users, ", thank you for logging to again"));
        }
    }
}
// assaimnet no.32
var current_user = ["SumMaiyA khaN", "ABduLlah", "AbduL reHman", "nadEem khAn", "PervEen ShAh"];
var new_users = ["abdullah", "nadeem khan", "perveen shah", "noor", "aliza"];
var current_user_lower = current_user.map(function (user) { return user.toLowerCase(); });
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_user = new_users_1[_b];
    if (current_user_lower.includes(new_user.toLowerCase())) {
        console.log("sorry , ".concat(new_user, ", that name is taken"));
    }
    else {
        console.log("yes ".concat(new_user, ",is still in avaliable list"));
    }
}
// assaiment no.33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var number = numbers_1[_c];
    if (number === 1) {
        console.log("".concat(numbers, "st"));
    }
    else if (number === 2) {
        console.log("".concat(numbers, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(numbers, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
// assaiment no.34
var favourite_pizza = ["papporoni", "chicken", "vag"];
for (var _d = 0, favourite_pizza_1 = favourite_pizza; _d < favourite_pizza_1.length; _d++) {
    var pizza = favourite_pizza_1[_d];
    console.log("i really like ".concat(pizza, " pizza"));
}
console.log("\n i really like pizza");
// assaiment no.35
var animals = ["cat", "lion", "dog"];
for (var _e = 0, animals_1 = animals; _e < animals_1.length; _e++) {
    var animal = animals_1[_e];
    console.log(animal);
}
console.log("\n");
// 2 step
for (var _f = 0, animals_2 = animals; _f < animals_2.length; _f++) {
    var animal = animals_2[_f];
    console.log("A ".concat(animal, " has a tell"));
}
// 3 step
console.log("\n all of the are great pets but i love dogs");
// assaiment no.36
// function makeshirt(size: string, text: string):void{
//     console.log(`\n you order a ${size} shirt that says ${text}`)
// }
// makeshirt(`large`,`"i love typescript"`)
// makeshirt(`medium`,`"i need a big shirt"`)
// assaiment no.37
function makeshirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'i love typescript'; }
    console.log("\n you have order a ".concat(size, " shirt that says ").concat(text));
}
// makeshirt();
// makeshirt('medium')
makeshirt('small', 'i need a big shirt to wear');
// assaiment no.38
function describe_city(city, country) {
    if (country === void 0) { country = 'pakistan'; }
    console.log("".concat(city, " ").concat(country));
}
describe_city('karachi');
describe_city('france', 'europe');
describe_city('lahore');
// assaiment no.39
function city_country(city, country) {
    return "".concat(city, ",").concat(country);
}
var city1 = city_country('lahore', 'pakistan');
var city2 = city_country('tokyo', 'japan');
var city3 = city_country('paris', 'france');
console.log(city1);
console.log(city2);
console.log(city3);
// assaiment no. 40
function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: artist.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("ali", "light");
console.log(album);
album = makeAlbum("bilal", "red wave");
console.log(album);
album = makeAlbum("hamza", "seenbreez");
console.log(album);
// how to do updtae a featers:
// jab ap (npm init) ki command challay gay tu ap kay pass (package.json) ki file ban gay gi:
// 1. npm init 
// (result: package.json)
// 2. tsc --init 
// (result: tsconfig.json)
// 3. npm i inquirer
// (result: import inquirer and make (package-lock.json))
// 4. npm i --save-dev @types/inquirer
// this import packages
// assaiment no.41
function show_magicions(magicions) {
    for (var _i = 0, magicions_1 = magicions; _i < magicions_1.length; _i++) {
        var magicion_1 = magicions_1[_i];
        console.log(magicion_1.charAt(0).toUpperCase() + magicion_1.slice(1));
    }
}
var magicion = ["ali", "hamza", "bilal"];
show_magicions(magicion);
// assaiment no.42
function make_great(magicions2) {
    for (var i = 0; i < magicions2.length; i++) {
        magicions2[i] = magicions2[i] + "\tthe great";
    }
}
var magicions2 = ["ali", "hamza", "bilal"];
make_great(magicions2);
show_magicions(magicions2);
// assaiment no.43
function make_great2(magicion) {
    var great_magicions = [];
    for (var index = 0; index < great_magicions.length; index++) {
        great_magicions.push(magicions2[index] + "the great");
    }
    return great_magicions;
}
var magicions3 = ["asman", "haseeb", "abdullah"];
var great_magicions2 = make_great2(magicions3);
show_magicions(magicions3);
show_magicions(great_magicions2);
// assaiment no.44
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich order:");
    for (var index = 0; index < items.length; index++) {
        console.log("- ".concat(items[index]));
    }
}
console.log("enjoy your sandwich summaiya khan");
sandwich('capricon', 'tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('garlic', 'chicken', 'mayo sauce');
function createcar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var myCar = createcar("toyoto", "corolla", { color: "black", year: "2024" });
console.log(myCar);
// here is complete all assaigment:
