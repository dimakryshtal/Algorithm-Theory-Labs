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
const list = [30, 19, 9, 15, 55, 24, 3, 78, 46, 41];
console.log(sortArr(list));

const end = new Date();
console.log(end - start);
