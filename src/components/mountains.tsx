import { off } from "process";
import * as React from "react"

export const Mountains = () => {

	const offset = 10
	const width = 1000
	const height = 300
	const xGridDim = 9
	const yGridDim = 4
	const widthO = width - (2 * offset)
	const heightO = height - (2 * offset)
	const xGrid = [...new Array(xGridDim + 1)].map((_ , i)=> (i * (widthO/xGridDim)) + offset) //creating a 9 grid for width for easy computing chunks of mountain
	const yGrid = [...new Array(yGridDim + 1)].map((_ , i)=> (i * (heightO/yGridDim)) + offset) //max is so that the lowest value is offset and not 0


	interface pathObject{
		command : String
		coordinates : Array<number>
	}

	interface svgObject extends Array<pathObject>{}

	const mountain1 = [
		{ 
			command : "M",
			coordinates: [xGrid[0], yGrid[4]]
		},
		{
			command: "S",// command : "L",
			coordinates: [xGrid[1], yGrid[2], xGrid[1], yGrid[2]]// coordinates: [xGrid[1], yGrid[2]]
		},
		{
			command : "S",
			coordinates: [(xGrid[1] + xGrid[2])/ 2, yGrid[0], xGrid[2], yGrid[0]]
		},
	]

	function objectToPath(object : svgObject) : string{
		let string = ""
		object.forEach((path : pathObject)=>{
			string += path.command
			string += path.coordinates.join(",")

		})
		return string
	}

	return(
		<div className="p-12">
			{/* <svg  className="linecap-round stroke-white fill-none stroke-[10px]" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
					viewBox="0 0 964 262"> */}
			<svg className="bg-red-200 linecap-round stroke-white fill-none stroke-[10px]" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				viewBox={"0 0 " + width + " " + height}>
				<g >

					<path className="stroke-red-600" d={objectToPath(mountain1)}/>

					<path d="M40.5,223.6
						c79-111.6,129.7-172.3,152-182.3
						c33.5-15,27,30.8,53,30.8
						s45.4,24.1,63,58.9
						c11.7,23.2,41.9,54.1,90.6,92.7"/>


					<path d="M40.5,223.6c79-111.6,129.7-172.3,152-182.3c33.5-15,27,30.8,53,30.8s45.4,24.1,63,58.9
								c11.7,23.2,41.9,54.1,90.6,92.7"/>
					<path d="M527.1,183.1C639.6,66,709.9,18.7,737.8,41.2c27.9,22.5,46.3,34,55.1,34.5
								c29.6,6,49,25.4,58.1,58.2c9.1,32.8,33.3,63.7,72.4,92.7"/>
					<path d="M317.7,107.2C383.5,35.8,422,11.9,433.3,35.8c17,35.7,32.9-26.3,51.2,2.5s57.7,50.6,79.4,80.2"/>
				</g>
			</svg>
		</div>
	)
};