function solution(topping) {
    var answer = 0;

    const cnt = Array(10001).fill(0);
    let kind = 0;
    //1. 갯수새기
    for (let i = 0; i < topping.length; i++) {
        if (cnt[topping[i]] == 0) kind++;
        cnt[topping[i]] += 1;
    }

    //2. 구분그릇 만들기
    const split = Array(10001).fill(false);
    let split_kind = 0;

    //3. 인덱스 증가하면서 토핑 갯수 새기
    for (let i = 0; i < topping.length; i++) {
        if (split_kind > kind) break;

        cnt[topping[i]] -= 1;
        if (cnt[topping[i]] == 0) kind--;
        if (split[topping[i]] == false) {
            split[topping[i]] = true;
            split_kind++;
        }
        if (split_kind == kind) answer++;
    }
    return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
console.log(solution([1, 1]));
