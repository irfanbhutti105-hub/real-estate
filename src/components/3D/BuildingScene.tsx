import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function Building() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 4, 2]} />
        <MeshDistortMaterial
          color="#d4a853"
          attach="material"
          distort={0.2}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <mesh position={[0, 3, 0]}>
        <boxGeometry args={[1.5, 2, 1.5]} />
        <MeshDistortMaterial
          color="#b8860b"
          attach="material"
          distort={0.15}
          speed={2}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
      <mesh position={[0, 5, 0]}>
        <coneGeometry args={[1, 1.5, 4]} />
        <MeshDistortMaterial
          color="#d4a853"
          attach="material"
          distort={0.1}
          speed={2}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </Float>
  )
}

function Particles() {
  const count = 200
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  const pointsRef = useRef<THREE.Points>(null!)

  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#d4a853" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshBasicMaterial color="#1a1f3a" wireframe transparent opacity={0.3} />
    </mesh>
  )
}

export default function BuildingScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#d4a853" />
        
        <Building />
        <Particles />
        <GridFloor />
        
        <Sparkles
          count={100}
          scale={15}
          size={2}
          speed={0.4}
          color="#d4a853"
          opacity={0.5}
        />
        
        <fog attach="fog" args={['#0a0d1c', 5, 25]} />
      </Canvas>
    </div>
  )
}
