// you are given an unsorted array sort it using merge sort
//       2 1 4 3 5 0
//   2 1 4             3 5 0
// 2   1 4            3   5 0
//    1  4               5  0
//
function merge(arr1, arr2) {
  let array = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
      array.push(arr1[p1]);
      array.push(arr2[p2]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      array.push(arr1[p1]);
      p1++;
    } else {
      array.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < arr1.length) {
    array.push(arr1[p1]);
    p1++;
  }

  while (p2 < arr2.length) {
    array.push(arr2[p2]);
    p2++;
  }
  return array;
}

function mergeSort(arr1, start, end) {
  if (start >= end) {
    return [arr1[start]];
  }
  let mid = Math.floor((start + end) / 2);
  let narr1 = mergeSort(arr1, start, mid);
  let narr2 = mergeSort(arr1, mid + 1, end);
  arr1 = merge(narr1, narr2);
  return arr1;
}

function mergeMain(arr1) {
  arr1 = mergeSort(arr1, 0, arr1.length - 1);
  return arr1;
}

console.log(mergeMain([1, 0, -2, 5, 9, 10, 3, 100, 2]));

