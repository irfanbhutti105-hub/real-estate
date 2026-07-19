import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
  })

  const pointsMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.02,
      color: '#d4a853',
      transparent: true,
      opacity: 0.8,
    })
  }, [])

  const pointsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const radius = 2
    
    for (let i = 0; i < 500; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      
      vertices.push(x, y, z)
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    return geometry
  }, [])

  return (
    <group ref={meshRef}>
      <points geometry={pointsGeometry} material={pointsMaterial} />
      <mesh>
        <sphereGeometry args={[1.98, 32, 32]} />
        <meshStandardMaterial
          color="#1a1f3a"
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
    </group>
  )
}

export default function GlobeScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Globe />
        </Suspense>
      </Canvas>
    </div>
  )
}
