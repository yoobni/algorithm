function solution(clothes) {
    let count = 1;
    const obj = {};

    for (let arr of clothes) {
        obj[arr[1]] = (obj[arr[1]] || 0) + 1;
    }

    for(let key in obj) {
        count *= (obj[key] + 1);
    }

    return count - 1;
}
