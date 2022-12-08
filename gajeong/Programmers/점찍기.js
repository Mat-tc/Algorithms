function solution(k, d) {
    var answer = 0;
    let K = k ** 2;
    let D = d ** 2;

    let m = parseInt(D / K) + 1;
    for (let i = 0; i < m; i++) {
        for (let j = m - i ** 2; j > -1; j--) {
            if (K * i ** 2 + K * j ** 2 > D) continue;
            else {
                answer += j + 1;
                break;
            }
        }
    }
    return answer;
}

console.log(solution(2, 4));
console.log(solution(1, 5));
