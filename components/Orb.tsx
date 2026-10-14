'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
function Sculpture(){
 const group=useRef<THREE.Group>(null);
 useFrame(({clock,pointer})=>{if(!group.current)return;group.current.rotation.y=clock.elapsedTime*.18+pointer.x*.15;group.current.rotation.x=pointer.y*.08+Math.sin(clock.elapsedTime*.24)*.07;});
 return <group ref={group} rotation={[.15,0,-.45]}>
   <Float speed={1.2} rotationIntensity={.12} floatIntensity={.24}>
    <mesh><torusKnotGeometry args={[1.03,.32,180,16,2,3]}/><meshPhysicalMaterial color="#a59aff" metalness={.21} roughness={.2} clearcoat={1} clearcoatRoughness={.12} /></mesh>
    <mesh scale={.55}><icosahedronGeometry args={[1,2]}/><meshPhysicalMaterial color="#f8a47e" metalness={.12} roughness={.28} transparent opacity={.95}/></mesh>
   </Float>
   <mesh position={[1.48,1.18,.6]} scale={.14}><sphereGeometry args={[1,24,24]}/><meshStandardMaterial color="#fc6d4f" metalness={.18} roughness={.18}/></mesh>
   <mesh position={[-1.65,-.65,-.4]} scale={.09}><sphereGeometry args={[1,24,24]}/><meshStandardMaterial color="#7068f1" metalness={.2} roughness={.2}/></mesh>
 </group>;
}
export default function Orb(){return <div className="orb-canvas" aria-hidden="true"><Canvas camera={{position:[0,0,5.4],fov:43}} dpr={[1,1.5]} gl={{alpha:true,antialias:true}}><ambientLight intensity={2.4}/><directionalLight position={[3,6,7]} intensity={3.1} color="#ffffff"/><pointLight position={[-4,-2,4]} intensity={28} distance={11} color="#f6a881"/><Sculpture/></Canvas></div>}
