let array = ["in this project i reversed the order of array", 2, 3, 5, 4];
let index ;
for (index in array) {
  index++;
}
for (let i = index -1; i >= 0; i--) {
  console.log(array[i]);
}

