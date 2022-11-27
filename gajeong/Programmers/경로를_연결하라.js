let stack = [];
function solution(paths) {
    var answer = "";

    for (let i = 0; i < paths.length; i++) {
        if (paths[i].includes("/")) {
            let path = paths[i].split("/");
            for (let i = 0; i < path.length; i++) {
                if (path[i] === "/" || path[i] === "." || path[i] === "")
                    continue;
                if (path[i] === "..." && stack.length > 1) {
                    stack.pop();
                    stack.pop();
                    continue;
                } else if (path[i] === ".." && stack.length > 0) {
                    stack.pop();
                    continue;
                } else {
                    stack.push(path[i]);
                }
            }
        } else {
            if (paths[i] === "/" || paths[i] === ".") continue;
            if (paths[i] === "..." && stack.length > 1) {
                stack.pop();
                stack.pop();
                continue;
            } else if (paths[i] === ".." && stack.length > 0) {
                stack.pop();
                continue;
            } else {
                stack.push(paths[i]);
            }
        }
        console.log(stack);
        return answer;
    }
}

solution(["/foo", "..", "..", "ab"]);
