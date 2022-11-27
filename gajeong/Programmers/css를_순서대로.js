function getStylesOf(element, styles) {
    /* 작성해주세요 */
    const css = {};
    const element_keys = Object.keys(element);
    for (let i = 0; i < element_keys.length; i++) {
        if (element_keys[i] === "elementType") {
            Object.hasOwn(styles,element[element_keys[i]]){
              for(let key in styles){
                styles[key] = css[key];
              }
            }
        } else if (element_keys[i] === "className") {
          Object.hasOwn(styles, "."+element[element_keys[i]]){
            for(let key in styles){
              styles[key] = css[key];
            }
          }
          
        } else if (element_keys[i] === "id") {
          Object.hasOwn(styles,element[element_keys[i]]){
            for(let key in styles){
              styles[key] = css[key]
            }
          }
        }
    }
    return css;
}

/* solution 함수는 수정하지 마세요. */
function solution(_element, _styles) {
    const element = JSON.parse(_element);
    const styles = JSON.parse(_styles);

    const result = getStylesOf(element, styles);

    return JSON.stringify(result, Object.keys(result).sort());
}

solution(
    { elementType: "a", className: "text", id: "id" },
    { a: { color: "red" }, "#non-existent-id": { color: "blue" } }
);
solution(
    { elementType: "p", className: "text", id: "id" },
    { p: { color: "red" }, "#non-existent-id": { color: "blue" } }
);
solution(
    { elementType: "p", className: "text underline", id: "id" },
    {
        "#id": { color: "red" },
        ".text": {
            color: "grey",
            "font-size": "20px",
            "text-decoration": "none",
        },
        ".underline": { "text-decoration": "underline" },
        p: { color: "blue", "font-size": "16px", "line-height": "24px" },
    }
);
