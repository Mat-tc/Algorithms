function solution(id) {
    var answer = "";
    let len = parseInt(id.length / 2);
    let cnt = 0;
    const spell = id.split("");
    for (let i = 0; i < spell.length; i++) {
        if (i >= parseInt(len / 2) && cnt < len) {
            answer += "*";
            cnt++;
        } else answer += spell[i];
    }
    return answer;
}

solution("da2ssb3v");
