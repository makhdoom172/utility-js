const filter = (arr, fn) => {
    return arr.filter(fn);
}

const filterUpperCase = (ch) => {
    if(ch>='A' && ch<='Z')
        return ch;
}

module.exports = {filter, filterUpperCase};