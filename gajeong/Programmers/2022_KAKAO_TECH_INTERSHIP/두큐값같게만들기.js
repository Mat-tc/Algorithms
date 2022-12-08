function solution(queue1, queue2) {
    var answer = 0;
    let sum1 = queue1.reduce((a, b) => a + b, 0);
    let sum2 = queue2.reduce((a, b) => a + b, 0);
    queue1 = [...queue1, ...queue2];
    queue2 = [...queue2, ...queue1];
    let N = queue1.length;
    let q1 = 0;
    let q2 = 0;

    while (q1 < 2 * N - 2 && q2 < 2 * N - 2) {
        if (sum1 === sum2) break;
        if (sum1 > sum2) {
            sum1 -= queue1[q1];
            sum2 += queue1[q1];
            q1++;
        } else {
            sum2 -= queue2[q2];
            sum1 += queue2[q2];
            q2++;
        }
        answer += 1;
    }
    if (sum1 === sum2) {
        console.log(answer);
        return answer;
    }
    console.log(-1);
    return -1;
}

solution([1, 2, 1, 2], [1, 10, 1, 2]);
