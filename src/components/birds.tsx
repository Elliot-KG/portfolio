import * as React from "react"

export function Birds() {

    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    React.useEffect(()=>{
        if(canvasRef != null){
            const canvas : HTMLCanvasElement = canvasRef.current!
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
            if(ctx == null){
                return
            }
            ctx.fillRect(25, 25, 100, 100);
            ctx.clearRect(45, 45, 60, 60);
            ctx.strokeRect(50, 50, 50, 50);
        }
        
    }, [canvasRef])

  return (
    <div className="absolute text-white">
        <canvas width="600" height="200" ref={canvasRef}/> 
    </div>
  );
}