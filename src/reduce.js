const reduce = (arr, fn, ini_val) => {
    if(ini_val==undefined && arr.length>0)
        return arr.reduce(fn);
    return arr.reduce(fn, ini_val);
}

module.exports = reduce;