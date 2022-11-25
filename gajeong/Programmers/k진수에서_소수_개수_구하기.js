function solution(n, k) {
    var answer = -1;
    // 1. 일단 진법 변환
    let num = n.toString(k);
    const nums = num.split('0').map(Number);

    const result = nums.filter(isPrime);

    answer = result.length;
    return answer;
}

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) return false;
    }
    return true;
};

solution(437674, 3);
solution(110011, 10);
