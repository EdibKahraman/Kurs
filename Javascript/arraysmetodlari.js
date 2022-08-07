//ARRAY = DİZİ

let names = ["arda", "kerem", "aslı", "mert"]
let ages = [1990,1980,2000,2005]
let mix = ["arda","yilmaz",1990, undefined, null, ["futbol", "basket"]]

console.log(names)
console.log(ages)
console.log(mix)

// Get Array Item

console.log(names[3]);              // namesin içindeki kaçıncı stringi çağırmak istiyorsan oraya numarasını yazıyorsun sana getiriyor.

// Set Array Item

names[2]="edib";                     // 0-1-2 diye gidiyor numaralar, arrayin içinde 2 yazarsan, 3.sıradaki elemanı cıkarıyor yani yukarıdan bak neymiş aslı, aslıyı cıkarıyor senin yazdığını yazıyor.
names[names.length] = "mehmet";      // length komutu normalde say demek biliyorsun, burda diyorsun ki, sen bu elemanları say, bunlara ilave yap, o yüzden en sona mehmet yazdı ama normalde eklemek için add item kısmını kullan.
console.log(names);

// Add Item

//names.push("Eda");                 // En sonuna eda yazdı
names.unshift("Osman");              // En başa Osman yazdı
console.log(names);

// Remove Item

ages.pop();                          // Bu en sondaki stringi sildi
console.log(ages);

ages.shift();                        // Bu da en baştaki stringi sildi
console.log(ages)

let index = names.indexOf("kerem");  // Mesela burda keremi sorgulatmışız, bize keremin kaçıncı sırada olduğunu söylüyor.
console.log("index :"+ index);

ages.sort();                         // sort sıralama komutu, burda mesela yılları sıraladı bize
console.log(ages);      

names.sort();                       // Aynı şekilde burda da alfabeye göre isimleri sıraladı.
console.log(names)

let veri= names.concat(ages);       // 2 ayrı arrayi birleştirdik burda.
console.log(veri);

names.splice(2,0,"Ammo");           // Şimdi bu 2.indexe Ammo yaz demek, 0'ın anlamı da 2.indexteki arkadaşı silme demek.
console.log(names);

names.splice(2,1,"Valtan");         // Eğer 1 dersen, 2.indexteki arkadaşı sil, yerine Valtan yaz demek. 
console.log(names);


