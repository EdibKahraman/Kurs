// OPERATORLER

let veri;
const a=20;
const b=10;
const c=5;
let d=2;

// 1.Aritmetik Operatörler

veri= a+b;
veri= a-b;
veri= a*b;  
veri= a/b;
veri= d++;
veri= ++d;
veri= a%b;

// 2.Atama Operatörleri

veri =a;
veri +=a;   // Burda veriyi a olarak atadık ve onun üzerinde yaptık, mantık şu veri+a, veri-b
veri -=b;   // veri= veri-b
veri *=a;   // veri= veri x a gibi düşün
veri %=a;

// 3.Karşıaştırma Operatörleri

veri= a==b;  //Bunun karşılığında veri tipi Boolean olarak geliyor ve cevabı true yada false olarak veriyor, a b'ye eşit mi diye soruyoruz.
veri= 5==="5";  // Burda demek istediğimiz şey 5 5'e eşit mi, normalde true alırdık ama burda şunu da sorguluyor, evet 5 5'e eşit ama karakter olarak eşit değiller o yüzden false değerini veriyorç
veri= a!=b;     // Eşit değildir anlamına geliyor.
veri= a!==b;    // Burası da 3 eşittir fonksiyonu gibi, a b'ye eşit değil o yüzden true, sonra türlerine de bakıyor onlar da eşit, yani true veriyor.
veri= a>b;

// 4.Mantıksal Operatörler

veri= (a>b) && (c<a) // a b'den büyük ve c a'dan küçük diyoruz true oluyor,  bu işaret &&(and) demek
veri= (a>b) || (c>a) // a b'den büyük true ama c a'dan büyük değil, yinede cevap true oluyor neden? Çünkü aradaki || bu işaret veya(or) demek
veri= !(a>b)         // a b'ben büyük diyoruz parantez içinde true ama başında ünlem işaret değil demek o yüzde false veriyor. !(not)
