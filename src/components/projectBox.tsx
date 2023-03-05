import * as React from "react"
import ProjectType from "../src/project.interface";


export function ProjectBox({project} : {project : ProjectType}){
  return (
    <div className="rounded-lg w-48 h-48 bg-slate-200">
      {project.name}
    </div>
  );
}