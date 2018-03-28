
import task4 from "./task-4"
import task3 from "./task-3"

function getExpeditionsTargets(commandSeries) {
    let result = [];
    commandSeries.map((item) => {
    	result.push(task4(item));
    });
    //console.log(result);
    return result;
}

export default function boundingRover(commandSeries) {
    return task3(getExpeditionsTargets(commandSeries));
}
