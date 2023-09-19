//! S E T

//? Diziler ile benzer işleri görebilir ancak bazı temel farklılıklar içerir.
//? Set - Yalnızca benzersiz elemanları içerebilir.
//? En önemli özelliği aynı değeri kabul etmez yani almaz. Her bir değeri yalnız bir defa tutar.


//todo: Bir set sınıfı başlatalım

const names = new Set();

console.log(names);

// Çıktımız --> İçi boş bir Set göreceğiz Entriesleri "0"

//todo: Bir diziyi set metodunun içine dahil edebiliriz.

const myArray=["Muz","Kivi","Elma","Karpuz","Kavun"];

const Fruits = new Set(myArray);

console.log(Fruits);

//Çıktımızda Entriesin içinin dolu olduğunu göreceğiz. 0:muz 1:kivi 2:elma .... gibi


//todo: Dizi içerisindeki yani set içindeki her bir değeri yazdırabilirim.

for(let fruit of Fruits){  
    console.log("Meyve : ",fruit)
}
//for ile döndürme işlemini yaptık.

//forEach döngüsü ile de yapılabilirdi.



//todo : Set'e özel metodlar vardır. "Add";

const carsArray = ["Doblo","Kia","Renault"]
const cars = new Set();

cars.add("doblo");
cars.add("ferrari");
cars.add("ford");
cars.add("mercedes");
cars.add("bmw");

// Add metodu ile set içinde değer gönderebiliriz.

//todo : Dizi içindeki değerleri setleyebiliriz.(For Döngüsü kullanacağım)

const MyNames = ["Mehmet","Ali","Hamza"]
const newnames = new Set();

for(let names of MyNames){
    newnames.add(names);
}

console.log(newnames);

//? : Ayrıca dizilerde uzunluğu Lenght olarak alırız. Set kullanımda ".size kullanmalıyız.

//todo: Set remove kullanımı

newnames.delete('Mehmet')//--> Mehmeti set içinden sildik

//todo: Set has() kullanımı

newnames.has('Ali') //---> Aliyi içeriyor mu? Yani True dönecektir.

//todo: Set clear kullanımı

newnames.clear(); //--> Bütün değerleri sildi.





//! Elimizde bir dizi var ve bunun içindeki değerleri benzersiz olmasını istersek set kullanabiliriz.

const Students = ["Hacı","İbrahim","Elif","Polat","Hacı","Hamza","Ali","Elif","Mehmet","Onur","Onur"]
// Dizi içersine bir değeri tekrar ve tekrar alabilir.
console.log(Students)
//Ancak "Set" Kullanımı ile dizimizi benzersiz değerler tutan bir hale getirebiliriz.

console.log(new Set(Students));
//yeni bir dizi olarak almak istersek
console.log([... new Set(Students)])


//!Diziyi Benzersiz olarak alma örneği yapalım

const languages = ["English","English","French","Spanish","Finnish","Polish","French"];

const langSet = new Set(languages);

console.log(langSet);

 



//! M A P

//Object gibi davranır. Ancak farklılıkları bulunuyor
// Objeler key-value yaklaşımında keyi sadece belli bir veri tipinde kullanırken Map bütün veri tiplerini key olarak alabilir.

const map = new Map();

//? Bazı Map metodları vardır.
//Map içerisinde bir değer gönderelim
//todo : "Set"

map.set('name','hamza');
map.set(1,'hamza');
map.set(true,'hamza');

// Map'in en önemli  özelliği olabilir key değerini her türden verebiliriz yukarda oldugu gibi boolan veya number olarak verebiliriz.



