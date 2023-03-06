import * as React from "react"
import ProjectsJson from "../src/projects.json"
import { ProjectBox } from "./projectBox"

export function Projects() {
    return (
        <div className="p-10 flex justify-around">
            {ProjectsJson.map((project)=>(
                <ProjectBox key={project.id} project={project}/>
            ))}
        </div>
  );
}