// 1. Buat object 'employees' dengan data karyawan (name, position, age, city)
let employees = {
  emp1: {
    name: "Joko",
    position: "Teacher",
    age: 25,
    city: "abc",
  },
  emp2: {
    name: "Ucup",
    position: "Office Boy",
    age: 19,
    city: "def",
  },
  emp3: {
    name: "Asep",
    position: "headmaster",
    age: 35,
    city: "ghi",
  },
  emp4: {
    name: "Siti",
    position: "Fondation",
    age: 44,
    city: "jkl",
  },
};
// 2. Gunakan 'for...in' untuk iterasi setiap key (karyawan) dalam object employees

for (let empID in employees) {
  // 3. Ambil data karyawan berdasarkan empID
  let employe = employees[empID];
  // 4. Jika usia karyawan lebih dari 30, tampilkan nama dan posisi
  if(employe.age > 30){
    console.log(employe.name);
    console.log(employe.position);
  }
}
