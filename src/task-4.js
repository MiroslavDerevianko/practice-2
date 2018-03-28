
export default function runRover(commandsList) {
    // Change me!
    let coord = {x: 0, y: 0};
    let direction = "N";

    commandsList.sort((a, b) => a.order - b.order);

    commandsList.map((item) => {

        let commands = item.command.split(" ");
        
        if (commands.length === 2) {

            if (commands[0] === "go") {
                let go = Number.parseInt(commands[1]);
                coord = move(coord, direction, go);
            }
       
            if (commands[0] === "turn" && (commands[1] === "right" || "left")) {
                direction = changedir(direction, commands[1]);
            }
        }
    });

    return coord;
}

function move(coord, dir, move) {
    if (dir === "N") coord.y += move;
    if (dir === "S") coord.y -= move;
    if (dir === "W") coord.x -= move;
    if (dir === "E") coord.x += move;
    return coord;
}

function changedir(dir, com) {
   if (com === "left") {
        if (dir === "N") return "W";
        if (dir === "W") return "S";
        if (dir === "S") return "E";
        if (dir === "E") return "N";
   } else if (com === "right") {
        if (dir === "N") return "E";
        if (dir === "E") return "S";
        if (dir === "S") return "W";
        if (dir === "W") return "N";
   }
}