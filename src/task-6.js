
export default function findPath(obj) {
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === "object") {
            const path = findPath(value); 
            if (path) {
                return `${key}.${path}`;
            }
            continue;
        }

        if (value === 15) {
            return key;
        }
    }
    return null;
}

/*export default function findPath(obj) {
    // Change me!
 
    let result = [];
    let link = "";

    rec(obj, link, "", result);
    if(result.length === 0) {
        return null;
    } else {
        return result[0];
    }
    return rec(obj);
}*/

/*function rec(obj, link, l, result ) {
    if (obj === 15) {
       link += l;
       link = link.slice(0, -1);
       result.push(link);
       return link;
    } else if (typeof obj === "object") {
        link += l;
        for (const item in obj) {
            l = `${item}.`;
            rec(obj[item], link, l, result);
        }
    }
}*/

/*function rec(value) {
    
   
}*/