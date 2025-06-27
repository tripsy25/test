const users = [
  {
    nam: "Tripti",
    age: 28,
  },
  {
    name: "Priya",
    age: 32,
  },
  {
    name: "Esha",
    age: 24,
  },
];

function sortingByAge() {
  const data = users.sort((a, b) => a.age - b.age); 
  return data;
}

console.log(sortingByAge());

module.exports = sortingByAge;