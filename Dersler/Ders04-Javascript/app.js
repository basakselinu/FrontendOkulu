//Js Giriş
// console.log("Merhaba Js");

//Değişkenler
// var a = 10;
// var b = 3.5;
// var c = "Javascript";

// console.log(a);
// console.log(typeof a);
// console.log(a, b, c);

//Otomatik tip dönüşümleri - type  conversion
// var firstNumber =10;
// var secondNumber ="20";
// var result = firstNumber + secondNumber; // + olduğunda 1020
// var result = firstNumber - secondNumber; // - olduğunda -10

// console.log(result);
// console.log( typeof result);

//fonksiyonu tanımlamadan çağırdığımız için undefined gelir - fonksiyon declaration
//okuyor - çalıştırıyor
//hoisting!
// var firstNumber;
// console.log(firstNumber);
// firstNumber=20;
// deneme();
// function deneme(){
//     console.log("a fonksiyonu");
// }

//boolean
// if(age){
//     age>=18 ? console.log("Ehliyet alabilir"):console.log("Ehliyet alamaz");
// }

//undefined - tanımsız
// var userName;
// console.log(userName);
// console.log(typeof userName);

//null - değer yok
// var isNull=null;
// console.log(isNull);
// console.log(typeof isNull);

//object - nesne
// var user={
//     name:"Başak",
//     age:24,
//     isActive:true,
// notlar:{
//     mat:90,
//     fizik:80,
// },
// favoriteFruits:["muz","çilek","kivi"],
// };

// console.log(user);
// console.log(typeof user);
// console.log(user.name);
// console.log(user.notlar.mat);

//Array - dizi
//  var fruits=["muz","çilek","kivi"];
//  console.log(fruits);
//  console.log(typeof fruits);
//  console.log(fruits[0]);
//  console.log(fruits[fruits.length-1]);

//functions - fonksiyonlar
// function hello(){
//     console.log("Merhaba Javascript")
// }
// hello();
// console.log(hello);
// console.log(typeof hello);

//date - tarih
// var date = new Date();
// console.log(date);
// console.log( typeof date);

// var a =10;
// var b=a;
// console.log("1-",a,b);
// a=20;
// console.log("2-",a,b);

// var a =[10];
// var b=a;
// console.log("1-",a,b);
// a=[20];
// console.log("2-",a,b);
// console.log("3-",a*b);

// var a =[10,20,30,40,50];
// var b=a;
// console.log("1-",a,b);
// // a[0]=60;
// a.push(60); //sona ekler
// console.log("2-",a,b);

//scope - kapsam
// var a = 10; //global scope

// function scope() {
//   var b = 20; //function scope
//   console.log(a, b);
// }
// scope();

// if (true) {
//   let c = 30; //block scope
//   b =40;
// }

// {
//   let d = 40; //block scope
// }
// //let dediğimiz an dışarısında kullanımı kapatıyor- block scope oluyor

// console.log(a, b, c, d);

//tip donüşümleri

// var a=5;
// console.log(a,typeof a);
// a=String(a);
// console.log(a,typeof a);

// var a="5";
// console.log(a,typeof a);
// a=Number(a);
// console.log(a,typeof a);

// var a="deneme";
// console.log(a,typeof a);
// a=Number(a);
// console.log(a,typeof a);

// var a = 5 + "2";
// console.log(a, typeof a);

// var a = 5 - "2";
// console.log(a, typeof a);

//Operatörler -Operators
//Atama Operatörü (=)
// var a=10;
// //let sonradan değiştirilebilir, const değiştirilemez
// const a =10;

//Aritmetik operatörler
// console.log(10+5); //Toplama
// console.log(10-5); //Çıkarma
// console.log(10*5); //Çarpma
// console.log(10/5); //Bölme
// console.log(10%5); //Mod Alma
// console.log(10**5); //Üs Alma

//Math Fonksiyonları

// let sonuc;
// sonuc=Math.PI;
// sonuc=Math.round(3.6); //yuvarlama
// sonuc=Math.ceil(3.2); //üste yuvarlama
// sonuc=Math.floor(3.9); // alta yuvarlama
// sonuc=Math.sqrt(16); // karekök alma
// sonuc=Math.floor(Math.random() * 100);// normalde 0-1 arası
// console.log(sonuc);

//String Methodları
let value;
const firstName = "Başak";
const lastName = "Ünsal";
const department = "Yazılım";
const age = 24;

value = firstName + " " + lastName;
value = firstName;
value += " " + lastName;
value = firstName.length;
value = firstName.toUpperCase();
value = firstName.toLowerCase();
value = firstName[0];
value = firstName[firstName.length - 1];
value = firstName.indexOf("a");
value = firstName.includes("a");
value = firstName.concat(" ", lastName, " - ", "Yazılım");
// value =
//   "İsim:" +" "+
//   firstName +
//   "\nSoyisim:" +" "+
//   lastName +
//   "\nYaş:" +" "+
//   age +
//   "\nDepartman:" +" "+
//   department;

// Template Literals
// value = `İsim: ${firstName}
// Soyisim: ${lastName}
// Yaş: ${age}
// Departman: ${department}`;

// value = `
// <ul>
//   <li>İsim: ${firstName}</li>
//   <li>Soyisim: ${lastName}</li>
//   <li>Yaş: ${age}</li>
//   <li>Departman: ${department}</li>
// </ul>
// `;

// console.log(value);

// Array Methodları
// const langs = ["Python", "Java", "C++", "Javascript"];
// const numbers = [43, 22, 35, 4, 12, 80, 50, 8, 99];

// value = numbers.length; // Eleman sayısı
// value = numbers[0]; // İlk eleman
// value = numbers[numbers.length - 1]; // Son eleman
// value = numbers.indexOf(12); // Elemanın indexi
// value = numbers.includes(12); // Elemanın varlığı
// value = numbers.push(100); // Dizinin sonuna eleman ekler
// value = numbers.unshift(200); // Dizinin başına eleman ekler
// value = numbers.pop(); // Dizinin sonundan eleman çıkarır
// value = numbers.shift(); // Dizinin başından eleman çıkarır
// value = numbers.reverse(); // Diziyi ters çevirir
// value = numbers.sort(); // Diziyi sıralar
// value = numbers.sort(function (a, b) {
//   return a - b;
// }); // Küçükten büyüğe sıralama

// console.log(numbers);

// Object

// const student = {
//   fullName: "Varol Maksutoğlu",
//   age: 30,
//   adres: {
//     city: "İstanbul",
//     country: "Türkiye",
//   },
//   langs: ["Python", "Java", "Javascript"],
//   work: function () {
//     console.log("Çalışıyor...");
//     return "Çalışıyor...";
//   },
// };

// value = student;
// value = student.fullName;
// value = student.adres.city;
// value = student.langs[0];
// value = student.work();

// let date = new Date();
// value = date;
// value = date.getMonth() + 1; // Ay
// value = date.getDate(); // Gün
// value = date.getDay(); // Haftanın günü
// value = date.getFullYear(); // Yıl
// value = date.getHours(); // Saat
// value = date.getMinutes(); // Dakika
// value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; // Tarih

// Karşılaştırma Operatörleri
// a = 10;
// b = 20;
// c = "10";
// d = 10;

// value = a == c; // Eşit mi?
// value = a === c; // Tip ve değer eşit mi?
// value = a != b; // Eşit değil mi?
// value = a !== c; // Tip ve değer eşit değil mi?
// value = a > b; // Büyük mü?
// value = a < b; // Küçük mü?
// value = a >= b; // Büyük eşit mi?
// value = a <= b; // Küçük eşit mi?

// && (And) Operatörü
// value = a == d && a < b;

// || (Or) Operatörü
// value = a == b || b < a;

// Koşullar - Conditions

// let a = 10;
// let b = 20;

// if (a > b) {
//   value = `${a} büyüktür ${b}`;
// } else if (a == b) {
//   value = `${a} eşittir ${b}`;
// } else {
//   value = `${a} küçüktür ${b}`;
// }

// const islem = 5;

// switch (islem) {
//   case 1:
//     value = "İşlem 1";
//     break;
//   case 2:
//     value = "İşlem 2";
//     break;
//   case 3:
//     value = "İşlem 3";
//     break;
//   case 4:
//     value = "İşlem 4";
//     break;
//   default:
//     value = "Geçersiz işlem";
//     break;
// }

// console.log(value);

//  Döngüler - Loops
// For Döngüsü
// for (let i = 0; i < 10; i++) {
//   if (i == 3) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// const langs = ["Python", "Java", "C++", "Javascript"];

// for (let index = 0; index < langs.length; index++) {
//   console.log(langs[index]);
// }

// Function - Fonksiyonlar
// function merhaba() {
//   console.log("Merhaba");
// }
// merhaba();

// function merhaba() {
//   return "Merhaba";
// }
// console.log(merhaba());

// function user(name, age) {
//   console.log(`İsim: ${name} Yaş: ${age}`);
// }
// user("Varol", 30);

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {
//   console.log(`İsim: ${name} Yaş: ${age}`);
// }
// user("Varol");

// return function

// function square(x) {
//   return x * x;
// }
// const result = square(5) * 3;
// console.log(result);

// Arrow Function

// const square = (x) => {
//   return x * x;
// }
// const square = (x) => x * x;
// console.log(square(5));

// while Döngüsü

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// while (i < 10) {
//   if (i == 3) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// do while Döngüsü

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// forEach Döngüsü
// const langs = ["Python", "Java", "C++", "Javascript"];

// langs.forEach(function (lang, index) {
//   console.log(lang, index);
// });

// Map Döngüsü
// langs.map(function (tamer, hasan) {
//   console.log(tamer, hasan);
// });