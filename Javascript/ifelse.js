const firstName = "edib";
const username = "edibkahraman";
const isStudent = true;
const ages = 29;
const school = "university";

if( username == "edibkahraman"){
    console.log("Hoşgeldin Edib");
}else{
    console.log("Kullanıcı Bulunamadı")
}

// if(ages === 29){
//     console.log("Yaşınız: 29");
// }

if(isStudent){
    console.log("Hangi Bölümde Okuyorsunuz?");
}else{
    console.log("Mesleğiniz Nedir?")
}

if(ages >=18){
    if(school == "university"){
        console.log("Ehliyete Uygun.")
    }else{
        console.log("Eğitimin yeterli değil.")
    }
}else{
    console.log("Yaşın Ehliyet Almak için Yeterli Değil.")
}

let id = "Uygun"

if (id != "undefined"){
    console.log("id: "+ id);
}else{
    console.log("no id")
}