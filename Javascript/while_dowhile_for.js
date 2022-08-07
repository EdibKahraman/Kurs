// LOOPS (DÖNGÜLER)

// ---WHİLE---   (While döngüsünde önce koşula bakıyor, eğer koşul gerçekleşiyorsa içerisindeki komutları çalıştırıyor ve döngüye alıyor.)

// let i= 0;
// while (i<10){
//     console.log(i);
//     i++;
// }

// let i=10;
// while (i>0){
// console.log(i)
// i--;

// }

// let i=0;
// while (i<10){
//     console.log(i);
//     i++;
// }

// -break ve continue-

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     if (i == 6) {
//         break
//     }

//     i++;
// }

// let i = 5;

// while (i<10){
//     if(i==9){
//         break
//     }
//     i++;
//     console.log(i);
// }

// let i = 0;

// while (i<10){
//     if(i==8){
//         continue
//     }
//     i++;
//     console.log(i)
// }

// ---DO WHİLE---   (Önce komutu çalıştırıyor, ondan sonra while'daki komuta bakıyor, koşul devam ediyorsa eğer tekrar başa dönüp döngüyü çalıştırmaya devam ediyor.)

// let i=0;

// do {
//     console.log(i);
//     i++;
// }while(i<10);

// --- FOR ---

// for (let i=0; i<10; i++){
// console.log(i);
// }

// for (let i=0; i<10; i++){    
//     if(i==5){
//         continue             // continue yaptığımızda 0dan 5e kadar geldi ama durmadı, neden? çünkü continue dedik o yüzden devam etti döngüye.
//     }
//     console.log(i);
// }

// for (let i=0; i<10; i++){
//     if(i==5){
//         break                // burda break dediğimiz için 0dan başladı 5e gelince durdu
//     }
//     console.log(i);
// }


// let toplam =0;

// for (let i=0; i<10; i++){       // bunun çalışma mantığı şöyle, for dedikten sonra değişkeni veriyorsun, ne demişiz i 0a eşittir, sonra i 10dan küçükse çalışmaya başla diyoruz, çalışma şekli de birer bireri art diyoruz, 
//     toplam +=i;                 // sonra açtık süslü parantezi yapmasını istediğimiz şeyi yazdık, console.log diyerek direkt gösterebilirdik ama bütün o sayıları toplamasını istedik bu yüzden toplam = toplam+i dedik yani kısaltması toplam +=i;
    
// }
// console.log(toplam);
