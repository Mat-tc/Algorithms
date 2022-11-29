function solution(n, info) {
    var answer = [];
    const list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    let result = [];
    let max = 1;
    result = pwc([], 0, n, list, result);

    for (let i = 0; i < result.length; i++) {
        let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let j = 0; j < n; j++) {
            arr[10 - result[i][j]] += 1;
        }
        let k = 0;
        let apeach = 0;
        let rion = 0;
        for (k; k < 11; k++) {
            if (arr[k] > info[k]) rion += 10 - k;
            if (arr[k] <= info[k] && info[k] > 0) apeach += 10 - k;
        }
        if (k == 11 && rion - apeach >= max) {
            answer = arr;
            max = rion - apeach;
        } else continue;
    }

    return answer.length != 0 ? answer : [-1];
}

//중복조합
function pwc(items, idx, k, list, result) {
    if (items.length === k) {
        result.push(items);
        return;
    }

    for (let i = idx; i < list.length; i++) {
        pwc([...items, list[i]], i, k, list, result);
    }
    return result;
}

solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]);
