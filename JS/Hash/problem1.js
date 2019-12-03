function solution(array1, array2) {
    array1.sort();
    array2.sort();

    for (let i = 0, len = array1.length; i < len; i++) {
        if (array1[i] !== array2[i]) {
            return array1[i];
        }
    }
}
