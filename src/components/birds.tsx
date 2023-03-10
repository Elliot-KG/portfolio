import * as React from "react"

export function Birds() {

    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const width = 600
    const height = 200
    const updateIndex = 20
    let context : CanvasRenderingContext2D
    let i = {x: 0, y: 100}
    let start = 0;

    React.useEffect(()=>{
        if(canvasRef != null){
            const canvas : HTMLCanvasElement = canvasRef.current!
            context = canvas.getContext('2d') as CanvasRenderingContext2D
            if(context == null){
                return
            }
            animate(0)
        }
        
    }, [canvasRef])

    function animate(timestamp : DOMHighResTimeStamp){
        if(context == null) return
        const elapsed = timestamp - start;
        if (elapsed > updateIndex) {
            start = timestamp;
            context.clearRect(0, 0, width, height)
            context.fillRect(i.x, i.y, 10, 10);
            context.fillStyle = "white"
            if(i.x < width){
                i.x += 1
            }
          }
          requestAnimationFrame(animate);
    }

  return (
    <div className="absolute text-white">
        <canvas width={width} height={height} ref={canvasRef}/> 
    </div>
  );
}