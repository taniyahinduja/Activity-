waterTrap = (height) => {
    let res = 0;
    for (let i = 1; i < n - 1; i++) {


        let left = arr[i];
        for (let j = 0; j < i; j++) {
            left = Math.max(left, arr[j]);
        }


        let right = arr[i];
        for (let j = i + 1; j < n; j++) {
            right = Math.max(right, arr[j]);
        }


        res += Math.min(left, right) - arr[i];
    }
    console.log(res)
    return res;
}

let arr = [4, 2, 0, 3, 2, 5];
let n = arr.length;
waterTrap(arr);


