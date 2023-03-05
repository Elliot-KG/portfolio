import * as React from "react"
import ProjectType from "../src/project.interface";
import ProjectsJson from "../src/projects.json"
import { ProjectBox } from "./projectBox"

export function Projects() {

    const [projects, setProjects] = React.useState<Array<ProjectType>> (ProjectsJson)
    
    return (
        <div className="p-10 flex justify-around">
            {projects.map((project)=>(
                <ProjectBox key={project.id} project={project}/>
            ))}
        </div>
  );
}