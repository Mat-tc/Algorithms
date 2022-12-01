function solution(survey, choices) {
    const test = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    };

    for (let i = 0; i < survey.length; i++) {
        let [a, b] = survey[i].split("");
        let num = choices[i];

        if (num > 4) {
            test[b] += num - 4;
        } else if (num < 4) {
            test[a] += 4 - num;
        }
    }

    var answer = "";
    if (test.R >= test.T) answer += "R";
    else answer += "T";
    if (test.C >= test.F) answer += "C";
    else answer += "F";
    if (test.J >= test.M) answer += "J";
    else answer += "M";
    if (test.A >= test.N) answer += "A";
    else answer += "N";

    return answer;
}
