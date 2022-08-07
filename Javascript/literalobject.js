//Bunu amacı sitede bilgi barındırmak istediğimizde, gerek kullanıcı bilgileri olabilir gerekse ürün kodları vs. tüm bunları tek bir obje oluşturup pratik bir şekilde almak yada bulmak için.

let veri;
let user = {
    username: "edibkahraman",
    firstName: "Edib",
    lastname: "Kahraman",
    age: 29,
    address: {
        city: "İstanbul",
        country: "Türkiye",
        phone: 05000000,
    }
}


// Böyle yazarak verileri çekebiliyoruz istediğimize bakabiliyoruz.

veri = user;
veri = user.firstName;
veri = user.address.city;

console.log(veri)