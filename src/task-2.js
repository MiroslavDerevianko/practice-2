
export default function createCounter(n) {
    // Change me!
    let iter = -n; //хардкод 
    let numb = n;
    return function() {
    	//console.log(iter);
    	return iter += numb;
    };
}