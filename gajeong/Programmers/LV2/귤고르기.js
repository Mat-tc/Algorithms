function solution(k, tangerine) {
    let answer = 0;
    const map = new Map();

    tangerine.forEach((num) => {
        if (map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1);
    });
    const mapSort = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

    let sum = 0;
    const arr = [...mapSort.entries()];

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][1];
        if (sum >= k) {
            answer = i + 1;
            break;
        }
    }
    return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
