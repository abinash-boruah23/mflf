let arr = [1,1,2,2,4,4,4,4,5];

let max = 0;
let least = 9999;
let mf;
let lf;

for(let i=0;i<arr.length;i++){
  let count = 0;
  for(let j=0;j<arr.length;j++){
    if(arr[i]==arr[j]){
      count++;
    }
  }
  if(max<count){
    max = count;
    mf = arr[i];
  }
  if(least>count){
    least = count;
    lf = arr[i]
  }
}

console.log(mf + "," + lf)
