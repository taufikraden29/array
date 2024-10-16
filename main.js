// const arrayRaden = ["👋", "🥳", "🐣", "🦷", "🧠"];
// const dadah = arrayRaden.includes("👋");

// if (dadah) {
//   const posisiDadah = arrayRaden.indexOf("👋");
//   const indexBefore = posisiDadah - 1;
//   const indexAfter = posisiDadah + 1;
//   const before = arrayRaden[indexBefore];
//   const after = arrayRaden[indexAfter];
//   console.log(`Icon sebelum dadah adalah ${before}`);
//   console.log(`Icon setelah dadah adalah ${after}`);
//   console.log(`Dadah ada pada array ini dan terletak di posisi ${posisiDadah}`);

//   const iconAkhir = arrayRaden.pop();
//   console.log(`Icon terakhir adalah ${iconAkhir}`);
// } else {
//   console.log("Saya tidak tau posisinya dimana");
// }

// const arraySaya = ["🍏", "🍎", "🍐", "🍒", "🥑", "🥝"];
// const newArraySaya = arraySaya;
// const newArraySaya = [...arraySaya];
// const newArraySaya = arraySaya.slice();
// const newArraySaya = Array.from(arraySaya);
// const newArraySaya = Array.from(arraySaya);
// const newArraySaya = JSON.parse(JSON.stringify(arraySaya));

// console.log({ arraySaya });
// console.log({ newArraySaya });
// const arraySaya = ["🍏", 10, { tomato: true }, ["eat"]];

// console.log({ arraySaya });

const arraySaya = ["🍏", "🍎", "🍐"];
// const arrayKamu = ["🍒", "🥑", "🥝"];

// const gabungArray = arraySaya.concat(arrayKamu);

// for (list of gabungArray) console.log(list);
// for (list in gabungArray) console.log(list);
// gabungArray.map((value, index) => console.log(value, index));

const datas = [
  {
    nama: "Raden",
    stuck: "PHP",
    usia: 21,
  },
  {
    nama: "Muhamad",
    stuck: "JS",
    usia: 22,
  },
  {
    nama: "Irsyad",
    stuck: "HTML",
    usia: 23,
  },
  {
    nama: "Taufik",
    stuck: "React",
    usia: "24",
  },
];

// datas.map((values, index) => {
//   console.log(values.nama, values.stuck);
// });

// Sort by
// datas.sort((a, b) => b.usia - a.usia).map((values) => console.log(values));

// Filter
datas.filter((x) => x.usia < 29).map((values) => console.log(values));
