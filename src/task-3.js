
export default function boundingRect(coordsList) {
    // Change me!
    
    if (coordsList.length === 0) {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
    }
    let result = {
        top: coordsList[0].y,
        right: coordsList[0].x,
        bottom: coordsList[0].y,
        left: coordsList[0].x
    }
    /*let top = coordsList[0].y;
    let right = coordsList[0].x;
    let bottom = coordsList[0].y;
    let left = coordsList[0].x;*/
    coordsList.reduce((result, item) => {
        result.top = (result.top <= item.y) ? item.y : result.top;
        result.bottom = (result.bottom >= item.y) ? item.y : result.bottom;
        result.left = (result.left >= item.x) ? item.x : result.left;
        result.right = (result.right <= item.x) ? item.x : result.right;
        return result;
    });
    /*coordsList.map((item) => {
        top = (top <= item.y) ? item.y : top;
        bottom = (bottom >= item.y) ? item.y : bottom;
        left = (left >= item.x) ? item.x : left;
        right = (right <= item.x) ? item.x : right;
    });*/
    
    return {
        top,
        right,
        bottom,
        left
    };
}

