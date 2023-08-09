/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 holoboard.gltf --transform 
Files: holoboard.gltf [21.24MB] > holoboard-transformed.glb [1.37MB] (94%)
Author: TooManyDemons (https://sketchfab.com/toomanydemons)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/holoboard-0644f1b2450543e2a96d5eae496798b6
Title: HoloBoard
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/holoboard-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.MAT_Holoboard} />
      <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.MAT_Holoboard_Main} />
    </group>
  )
}

useGLTF.preload('/holoboard-transformed.glb')
