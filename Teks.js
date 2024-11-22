// // 1. length
// // Deskripsi: Properti length mengembalikan jumlah elemen yang ada dalam array.

// // Contoh:
// let fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits.length);  // Output: 3
//Penjelasan:
// .length adalah properti bukan metode. Ini memberi tahu kita berapa banyak elemen yang ada di array.

// 2. join()
// Deskripsi: Menggabungkan semua elemen dalam array menjadi satu string. Pemisah antara elemen bisa ditentukan.
// array.join(separator);
// Contoh:
// let fruits = ['apple', 'banana', 'cherry'];
// let result = fruits.join(', ');
// console.log(result);  // Output: "apple, banana, cherry"
// Penjelasan:
// Jika tidak memberikan separator, secara default join() akan memisahkan elemen dengan koma (,).
// Kamu bisa menentukan separator, misalnya spasi atau tanda hubung.

// 3. push()
// Deskripsi: Menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang array yang baru.
// array.push(element1, element2, ...);
// Contoh:
// let fruits = ['apple', 'banana'];
// fruits.push('cherry', 'date');
// console.log(fruits);  // Output: ['apple', 'banana', 'cherry', 'date']
// Penjelasan:
// push() menambahkan elemen ke akhir array.
// Array akan bertambah panjang dengan bertambahnya elemen.

// 4. pop()
// Deskripsi: Menghapus elemen terakhir dari array dan mengembalikan elemen yang dihapus.
// array.pop();
// Contoh:
// let fruits = ['apple', 'banana', 'cherry'];
// let last = fruits.pop();
// console.log(fruits);  // Output: ['apple', 'banana']
// console.log(last);    // Output: "cherry"
// Penjelasan:
// pop() menghapus elemen terakhir dan mengembalikan elemen tersebut.
// Panjang array akan berkurang satu elemen.

// 5. shift()
// Deskripsi: Menghapus elemen pertama dari array dan mengembalikan elemen yang dihapus.
// array.shift();
// Contoh:
// let fruits = ['apple', 'banana', 'cherry'];
// let first = fruits.shift();
// console.log(fruits);  // Output: ['banana', 'cherry']
// console.log(first);   // Output: "apple"
// Penjelasan:
// shift() menghapus elemen pertama dan mengembalikan elemen tersebut.
// Panjang array berkurang satu elemen.

// 6. unshift()
// Deskripsi: Menambahkan satu atau lebih elemen ke awal array dan mengembalikan panjang array yang baru.
// array.unshift(element1, element2, ...);
// Contoh:
// let fruits = ['banana', 'cherry'];
// let newLength = fruits.unshift('apple');
// console.log(fruits);      // Output: ['apple', 'banana', 'cherry']
// console.log(newLength);   // Output: 3
// Penjelasan:
// unshift() menambahkan elemen ke depan array, sehingga array berubah urutannya.
// Panjang array bertambah.

// 7. slice()
// Deskripsi: Mengambil sebagian array dan mengembalikannya sebagai array baru, tanpa mengubah array asli.
// array.slice(start, end);
// Contoh:
// let fruits = ['apple', 'banana', 'cherry', 'date'];
// let sliced = fruits.slice(1, 3);
// console.log(sliced);      // Output: ['banana', 'cherry']
// console.log(fruits);      // Output: ['apple', 'banana', 'cherry', 'date']
// Penjelasan:
// slice() mengembalikan elemen dari start hingga end - 1.
// Array asli tidak berubah.

// 8. splice()
// Deskripsi: Menambahkan, menghapus, atau mengganti elemen dalam array pada posisi yang ditentukan.
// array.splice(start, deleteCount, item1, item2, ...);
// Contoh:
// let fruits = ['apple', 'banana', 'cherry', 'date'];
// fruits.splice(1, 2, 'grape', 'orange');
// console.log(fruits);  // Output: ['apple', 'grape', 'orange', 'date']
// Penjelasan:
// splice() memungkinkan untuk menambah, menghapus, atau mengganti elemen mulai dari indeks start.
// deleteCount menentukan jumlah elemen yang akan dihapus.

// 9. forEach()
// Deskripsi: Menjalankan fungsi untuk setiap elemen dalam array.
// array.forEach(function(element, index, array) { ... });
// Contoh:
// let fruits = ['apple', 'banana', 'cherry'];
// fruits.forEach(function(fruit, index) {
//   console.log(index + ': ' + fruit);
// });
// // Output:
// 0: apple
// 1: banana
// 2: cherry
// Penjelasan:
// forEach() mengeksekusi fungsi untuk setiap elemen di array. Tidak mengembalikan nilai apa pun.

// 10. map()
// Deskripsi: Membuat array baru dengan hasil pemrosesan elemen dari array asli.
// array.map(function(element, index, array) { ... });
// Contoh:
// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(function(number) {
//   return number * 2;
// });
// console.log(doubled);  // Output: [2, 4, 6, 8]
// Penjelasan:
// map() membuat array baru yang berisi hasil dari fungsi yang diterapkan pada setiap elemen.

// 11. sort()
// Deskripsi: Mengurutkan elemen dalam array secara ascending (naik) secara default, atau sesuai dengan fungsi perbandingan yang diberikan.
// array.sort(function(a, b) { return a - b; });
// Contoh:
// let numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;  // Ascending order
// });
// console.log(numbers);  // Output: [1, 2, 3, 4, 5]
// Penjelasan:
// sort() mengubah array asli.
// Untuk urutan numerik, perlu memberikan fungsi pembanding, seperti a - b.

// 12. filter()
// Deskripsi: Membuat array baru dengan elemen-elemen yang lolos dari kondisi yang ditentukan.
// array.filter(function(element, index, array) { ... });
// Contoh:
// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(function(number) {
//   return number % 2 === 0;
// });
// console.log(evenNumbers);  // Output: [2, 4]
//Penjelasan:
// filter() mengembalikan array baru yang berisi elemen-elemen yang memenuhi kondisi tertentu.

// 13. find()
// Deskripsi: Mencari dan mengembalikan elemen pertama yang memenuhi kondisi tertentu.
// array.find(function(element, index, array) { ... });
// Contoh:
// let numbers = [1, 2, 3, 4, 5];
// let firstEven = numbers.find(function(number) {
//   return number % 2 === 0;
// });
// console.log(firstEven);  // Output: 2
//Penjelasan:
// find() hanya mengembalikan elemen pertama yang memenuhi kondisi. Jika tidak ada yang memenuhi, mengembalikan undefined.

// objek

// didalm objek,karena objek tersebut sudah didefinisikan maka konteks this disini itu mengembalikan isi dari objek tersebut,kalau fungsi global,ketika dia tidak berada didalam objek atau konstuktor dia akan menjadi window(window === this) ,kalau konstruktor dia akan mejadi penunjuk arah / membantu agar konstruktor terjadi,sedangkan arrow function itu



// Dot notation (toko.Laptop) lebih sering digunakan jika kamu sudah tahu nama properti secara eksplisit dan nama propertinya valid.
// racket notation (toko["Laptop"]) lebih fleksibel dan digunakan ketika nama properti berupa variabel, atau jika nama propertinya tidak valid untuk dot notation (misalnya ada spasi atau karakter khusus).
//Template Literals (${}) – Digunakan untuk menggabungkan string dan ekspresi/variabel di dalamnya.
