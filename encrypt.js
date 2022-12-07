const  rot13= (str) => {
  return [...str].map(e => {
      let returnLetter = e;
    if (e.charCodeAt(0) >= "A".charCodeAt(0) && 
          e.charCodeAt(0) <= "M".charCodeAt(0)){
      returnLetter = String.fromCharCode((+e.charCodeAt(0) + 13));
    } else if (e.charCodeAt(0) >= "N".charCodeAt(0) && 
                e.charCodeAt(0) <= "Z".charCodeAt(0)){
      returnLetter = String.fromCharCode(+e.charCodeAt(0) -13);
    }
    return returnLetter;
  }).join('');
}

console.log("String.fromCharCode(10): " + String.fromCharCode("A".charCodeAt(0)));
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ..."));