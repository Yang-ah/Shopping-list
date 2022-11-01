let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

let ceoList = [
  {
    name: "Larry Page",
    age: 23,
    ceo: true,
  },
  { name: "Tim Cook", age: 40, ceo: true },
  { name: "Elon Musk", age: 55, ceo: false },
];

// Map test
// Q1. 모든 이름을 대문자로 바꾸어서 출력하시오.

function mapTest1(names) {
  return names.map((item) => item.toUpperCase());
}

console.log(mapTest1(names));

// Q2. 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
function mapTest2(names) {
  return names.map((item) => item.split(" ", 1).join());
}

console.log(mapTest2(names));

// Q3. 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])

// Filter test
// 이름에 a를 포함한 사람들을 출력하시오.
// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)

/* function filterTest1(names) {
  return names.filter((item) => item.include("a"));
}
console.log(filterTest1(names)); */

const data1 = (names) =>
  names.forEach((item, index) => console.log(item, index));

data1(names);

const data3 = ceoList.map((item) => item.age);
console.log(data3);
