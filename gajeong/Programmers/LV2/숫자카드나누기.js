function solution(arrayA, arrayB) {
    var answer = 0;
    arrayA.sort();
    arrayB.sort();
    let min = Math.min(arrayA[0], arrayB[0]);
    for (let i = 2; i <= min; i++) {
        if (arrayA[i] % min === 0) {
        } else {
        }
    }

    const checkA = () => {
        for (let i = 0; i < arrayA.length; i++) {
            if (arrayA[i] % min !== 0) {
                return false;
            }
        }
        return true;
    };

    const checkB = () => {
        for (let i = 0; i < arrayA.length; i++) {
            if (arrayB[i] % min !== 0) {
                return false;
            }
        }
        return true;
    };
    return answer;
}

solution([10, 17], [5, 20]);
