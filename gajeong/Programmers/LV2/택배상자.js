function solution(order) {
    var answer = 0;
    const N = order.length;
    //1.order.length ~ 1  스택 만들어 5, 4, 3, 2 ,1
    const s1 = [];
    for (let i = N; i > 0; i--) {
        s1.push(i);
    }

    //2. 빈 스택 만들어
    const s2 = [];

    //3. pop하면서 비교하자
    let start = 0;
    while (true) {
        if (start == N) break;
        let num = order[start];

        let n1 = s1[s1.length - 1];
        // s1의 순서가 맞을 경우
        if (n1 == num) {
            answer++;
            start++;
            s1.pop();
            continue;
        }

        // s2의 순서가 맞을 경우
        if (s2.length > 0) {
            let n2 = s2[s2.length - 1];
            if (num < n2) break;
            if (n2 == num) {
                s2.pop();
                answer++;
                start++;
                continue;
            }
        }

        s2.push(n1);
        s1.pop();
    }

    return answer;
}

console.log(solution([5, 4, 3, 2, 1]));
