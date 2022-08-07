// Degisken Turleri

// PRIMITIVE TYPES

// String

let firstName="edib";
console.log(typeof firstName) //burda typeof dememizin sebebi sayfa incele deyip console'dan baktığımızda bize bu yazdığımızın "string" veri türünde olduğunu gösteriyor.

// Number

let yas= 29;
console.log(typeof yas) //burda da mesela konsolda number olarak görülüyor değişken türümüz.

// Boolean

let kredi_kullanimi= false;
console.log(typeof kredi_kullanimi) //Burda da boolean olarak goruyor cunku true yada false olarak kesin hüküm var.

// Undefined

let phone;
console.log(typeof phone)  //Tanımsız oluyor birşey belirtmediğimiz için.

// REFERENCE TYPES : Objects

// Array

let liste= ["Ayse","Fatma","Ahmet"]  // Object
console.log(typeof liste)

// Object Literals

let address= {                      // Object
    city:"İstanbul",
    country:"Türkiye",
}
console.log(typeof address)

// Function

let hesapla = function(){           //Function
    return 0;
}
console.log(typeof hesapla)