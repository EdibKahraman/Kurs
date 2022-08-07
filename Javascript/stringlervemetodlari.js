const firstname = "Edib";
const lastname = "Kahraman";
const age = "29";



veri= 'Benim adım'+' '+ firstname+' '+'soyadım'+' '+lastname+' '+'yaşım'+' '+age;

 veri= veri.toUpperCase();                  // Hepsi büyük
 veri= veri.toLowerCase();                  // Hepsi küçük
 veri= veri.substring(1,4);               // 1den 4e kadar olan karakterli gösteriyor bize
 veri= veri.slice(1-3);                   // Buda substringin aynısı
 veri= veri.indexOf("b")                  // Bulmak istediğin karakteri giriyorsun, sana kaçıncı karakter olduğunu söylüyor.
 veri = veri.replace("edib","Lollik");    // edib yerine artık lollik yazmanı sağlıyor
 veri = veri.length;                      // atıyorum "benim adım edib yazdın", sana kaç tane karakter oluştuğunu söylüyor "15"




console.log(veri);