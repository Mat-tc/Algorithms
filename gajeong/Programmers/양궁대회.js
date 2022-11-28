function solution(n, info) {
    var answer = [];
    const list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    let result = [];
    const res = pwc([], 0, 3, list, result);
    console.log(res);

    return answer;
}

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

solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
