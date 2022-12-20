function solution(arrayA, arrayB) {
    var answer = 0;
    const length = arrayA.length;
    //A배열이 모두 나누어지는 경우
    let minA = Math.min(...arrayA);
    const divA = divide(minA);
    let st = true;

    for (let i = 0; i < divA.length; i++) {
        let num = divA[i];
        st = true;
        for (let idx = 0; idx < length; idx++) {
            if (arrayA[idx] % num != 0 || arrayB[idx] % num == 0) {
                st = false;
                break;
            }
        }
        st == true && num > answer ? (answer = num) : "";
    }

    //B배열이 모두 나누어지는 경우
    let minB = Math.min(...arrayB);
    const divB = divide(minB);

    for (let i = 0; i < divB.length; i++) {
        let num = divB[i];
        st = true;
        for (let idx = 0; idx < length; idx++) {
            if (arrayB[idx] % num != 0 || arrayA[idx] % num == 0) {
                st = false;
                break;
            }
        }
        st == true && num > answer ? (answer = num) : "";
    }

    return answer;
}

function divide(num) {
    let el = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) el.push(i);
    }
    return el;
}

console.log(solution([10], [10]));
