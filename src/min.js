const min = (arr) => {
    if(arr.length == 0)
        return null;
    return Math.min(...arr);
}

module.exports = min;