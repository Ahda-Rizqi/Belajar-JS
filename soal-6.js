// for (let i = 1; i <= 20; i++) {
//   if (i % 2 ==1) {
//     console.log(i);
//   }
// }
// let n = 20;
// let hasil = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 1) {
//     hasil += i;
//   }
// }
// console.log(hasil)

let n = 10; // Tentukan panjang deret Fibonacci
let fib = [0, 1]; // Array untuk menyimpan deret Fibonacci

// Menghitung angka Fibonacci dan menambahkannya ke array
for (let i = 2; i < n; i++) {
  // Angka berikutnya adalah penjumlahan dua angka terakhir di array
  fib[i] = fib[i - 1] + fib[i - 2];
}

console.log("Hasil akhir deret Fibonacci: ", fib);

