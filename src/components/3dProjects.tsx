import * as THREE from 'three'
import * as React from "react"


export function ThreeDProjects() {

    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const width = 600
    const height = 600
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshPhongMaterial({ color: '#433F81' })
    const cube = new THREE.Mesh(geometry, material)
    let renderer: THREE.WebGLRenderer

    React.useEffect(() => {
        camera.position.z = 4
        //ADD RENDERER
        if (canvasRef.current == null) return
        renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current!, antialias: true })

        renderer.setClearColor('#000000')
        renderer.setSize(width, height)
        scene.add(cube)
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
        animate()
    })

    const animate = () => {
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        renderScene()
        window.requestAnimationFrame(animate)
    }
    const renderScene = () => {
        renderer.render(scene, camera)
    }

    return (
        <canvas width={width} height={height} ref={canvasRef} />
    );
}



