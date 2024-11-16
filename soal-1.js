let nilaiAwal = 1;
let nilaiAkhir = 20;

for (nilaiAwal; nilaiAwal <= nilaiAkhir; nilaiAwal++) {
  if (nilaiAwal % 3 == 0 && nilaiAwal % 5 == 0) {
    console.log("FizzBuzz");
  } else if (nilaiAwal % 3 == 0) {
    console.log("Fizz");
  } else if (nilaiAwal % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(nilaiAwal);
  }
}
