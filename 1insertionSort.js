const start = new Date();

const sortArr = arr => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
      let x = arr[i];
      let j = i;
      while((j > 0 && arr[j - 1] >= x) || (j > 0 && arr[j - 1] % 2 != 0)) {
        arr[j] = arr[j - 1];
        j--;
      }
      arr[j] = x;
    }
  }

  for(let i = arr.length - 1; i > 0; i--) {
    if(arr[i] % 2 != 0) {
      let x = arr[i];
      let j = i;
      while(j > 0 && arr[j + 1] >= x) {
        arr[j] = arr[j + 1];
        j++;
      }
      arr[j] = x;
    }
  }
  return arr;
}

const list1 = [30, 19, 9, 15, 55, 24, 3, 78, 46, 41];
const list2 = [15 , 12, 43, 65, -1, 44, 32, -11, 11, 42, -8 , 14, -3, -8];
const list3 = [12, 33, 21, 35, 34, -1, 3, 24,2 ,5, 88, 99,-2, 22, -15]

console.log(sortArr(list1));  //[ 24, 30, 46, 78, 55, 41, 19, 15, 9, 3 ]
console.log(sortArr(list2));  //[ -8, -8, 12, 14, 32, 42, 44, 65, 43, 15, 11, -1, -3, -11 ]
console.log(sortArr(list3));  //[ -2, 2, 12, 22, 24, 34, 88, 99, 35, 33, 21, 5, 3, -1, -15 ]

const end = new Date();
console.log(end - start);
