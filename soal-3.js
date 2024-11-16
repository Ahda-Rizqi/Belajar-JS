let nilaiAwal = 1;
let nilaiAkhir = 50;

for (nilaiAwal; nilaiAwal <= nilaiAkhir; nilaiAwal++) {
  if (nilaiAwal % 4 == 0 && nilaiAwal % 7 == 0) {
    console.log("Lucky Four");
  } else if (nilaiAwal % 4 == 0) {
    console.log("Four");
  } else if (nilaiAwal % 7 == 0) {
    console.log("Lucky");
  } else {
    console.log(nilaiAwal);
  }
}
