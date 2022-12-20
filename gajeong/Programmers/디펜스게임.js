function solution(n, k, enemy) {
    var answer = 0;
    let sum = enemy.reduce((ac, cur) => ac + cur, 0) + 1;
    let enemy_length = enemy.length;

    //무적권이 적 배열 보다 많다면,
    if (k >= enemy_length) return enemy_length;

    let avg = parseInt(sum / enemy_length) + 1;
    for (let i = 0; i < enemy_length; i++) {
        //종료조건
        if (n < enemy[i] && k < 1) {
            answer = i;
            break;
        }
        // 적이 평균이상일때 무적권
        if (enemy[i] > avg) {
            k -= 1;
            continue;
        }
        // 현재 군인보다 적이 많을때 무적권
        if (n < enemy[i] && k > 0) {
            k -= 1;
            continue;
        }
        n -= enemy[i];
    }
    return answer;
}
