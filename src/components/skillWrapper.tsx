import * as React from "react"

export function SkillWrapper({deactivated, children} : {deactivated : Boolean, children : React.ReactElement}) {
  return (
    <div className={(deactivated? "bg-blue-800"  : "") + " w-10 h-10 rounded-md bg-slate-300 flex justify-center"}>
        {children}
    </div>
  );
}