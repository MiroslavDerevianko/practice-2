
export default function sum(...values) {
    let result = 0;
    values.map((item) => {
    	result += item;
    });

    return result;
}
