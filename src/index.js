module.exports = function reverse (n) {
  let nStr = n.toString();

  let newString = "";
    for (let i = nStr.length - 1; i >= 0; i--) {
        newString += nStr[i];
    }

  if(n < 0) newString = newString.substring(0, newString.length - 1);
  return Number(newString);
}
