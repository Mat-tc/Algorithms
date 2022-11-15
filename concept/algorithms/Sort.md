# SORT

## 1. 버블 정렬

앞에서부터 두개의 원소를 비교해서, 가장 마지막에 가장 큰 값의 원소가 위치하게 함

```javascript
const arr = [1, 5, 2, 6, 7];
let n = 5;
for (let i = 0; i < n; i++)
  for (let j = 0; j < n - 1 - i; j++)
    if (arr[j] > arr[j + 1]) swap(arr[j], arr[j + 1]);
```

### 시간복잡도 -> O(N^2)

## 2. Merge Sort (병합 정렬)

JS 내장 sort 함수는 merge sort로 구현이 되어있다. 그러므로 sort 내장함수 사용해도 됨.
하지만 정렬해야 할 원소에 음수가 함께 있다면, 올바른 정렬이 되지 않는다. compareFunction 을 추가해 줘야함.

사람이 생각하는 정렬로 되지 않는 이유 ?? sort 내장 함수는 배열의 각 요소를 문자열로 변환헤 각 문자의 유니 코드 코드 포인트 값에 따라 정렬되기 때문 ! ! !

```javascript
const arr = [-2, -5, 3, 7, 2, 6];
arr.sort((a, b) => {
  return a - b;
});
```

### 시간 복잡도 -> O(NlogN)
