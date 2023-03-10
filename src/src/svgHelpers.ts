import {randInt} from "../src/utilities"

export interface pathObject{
    command : String
    coordinates : Array<number>
}

export interface svgObject extends Array<pathObject>{}

function wiggle(randAmount : number):number{
    return randInt(-randAmount, randAmount)
}

{/* Modifying */}
export function wigglePath(mountain : svgObject, amount : number){
    mountain.forEach((_, i, paths)=>{
        paths[i].coordinates.forEach((_, j, coords)=>{
            coords[j] = coords[j] + wiggle(amount)
        })
    })
}

export function objectToPath(object : svgObject) : string{
    let string = ""
    object.forEach((path : pathObject)=>{
        string += path.command
        string += path.coordinates.join(",")

    })
    return string
}       