
export default function getPolynomial(...coefficients) {
    
    let iter = coefficients.length - 1;
    if (coefficients.length === 0) return 0;
    
    let result = coefficients.reduce((result, item) => {
      result += form(item, iter);
      iter--;
      return result;
    }, "") || "0";
    /*coefficients.map((item) => {
        result += form(item, iter);
        iter--;
    });*/

    //if (result === "") return 0;

    result = (result.charAt(0) === '+') ? result.slice(1) : result;
    return result;
}

function form(numb, i) {

    //let numb = (n === 1 && i !== 0) ? "" : n;

    if (numb === 0) return "";
    if (numb === 1 || numb === -1) {
        if (i === 0) {
            return (numb < 0) ? `${numb}` : `+${numb}`;
        } else if (i === 1 && numb === -1) {
            return `-x`;
        } else if (i === 1) {
            return (numb < 0) ? `x` : `+x`;
        } else {
            return (numb < 0) ? `x^${i}` : `+x^${i}`;
        }
    } else {
    	if (i === 0) {
            return (numb < 0) ? `${numb}` : `+${numb}`;
        } else if (i === 1) {
            return (numb < 0) ? `${numb}*x` : `+${numb}*x`;
        } else {
            return (numb < 0) ? `${numb}*x^${i}` : `+${numb}*x^${i}`;
        }
    }
        
}
