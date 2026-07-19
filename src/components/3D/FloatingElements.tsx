import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Torus } from '@react-three/drei'
import * as THREE from 'three'

function FloatingRing() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Torus ref={meshRef} args={[1.5, 0.1, 16, 100]}>
        <meshStandardMaterial
          color="#d4a853"
          metalness={0.9}
          roughness={0.1}
          emissive="#d4a853"
          emissiveIntensity={0.2}
        />
      </Torus>
    </Float>
  )
}

function FloatingSpheres() {
  return (
    <>
      {[
        { position: [-3, 2, -2] as [number, number, number], scale: 0.5 },
        { position: [3, -1, -1] as [number, number, number], scale: 0.3 },
        { position: [-2, -2, -3] as [number, number, number], scale: 0.4 },
        { position: [2, 3, -2] as [number, number, number], scale: 0.35 },
      ].map((sphere, i) => (
        <Float key={i} speed={1.5 + i * 0.3} floatIntensity={1 + i * 0.2}>
          <mesh position={sphere.position} scale={sphere.scale}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#d4a853' : '#b8860b'}
              metalness={0.8}
              roughness={0.2}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#d4a853" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#b8860b" />
        
        <FloatingRing />
        <FloatingSpheres />
      </Canvas>
    </div>
  )
}
