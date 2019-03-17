/**
 * @param preferences - an array of integers. Indices of people, whom they love  
                        (массив целых чисел. показатели людей, которых они любят)
 * 
 * @returns number of love triangles (Количество любовных треугольников)
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    

    let result = 0;

    for(let i = 0; i < preferences.length; i++) {

        let a = preferences[i] - 1;
        if (a == i) continue;

        let b = preferences[a] - 1;
        if (b == a) continue;

        let c = preferences[b] - 1;
        if (c == b) continue;

        if ( c == i) {
            result++;
        }
    }
    return result / 3;

};
