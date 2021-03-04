const map = (arr, fn) => {
    return arr.map(fn);
}

const cube = (n) => {
    return n*n*n;
}

const identity = (n) => {
    return n;
}

module.exports = {map, cube, identity};
