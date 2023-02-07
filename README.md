# FBX Model Render using Three.js and Put Texture
### Import FBX Model
```

function Scene() {
  const fbx = useFBX("SkullDagger3PartLP.fbx");
});

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
        <primitive object={fbx} scale={0.05}/>
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
}
```
### Put Texture to FBX
```
  fbx.traverse(function (child) {
    if (child instanceof THREE.Mesh) {
        child.material.map = colorMap
        child.material.needsUpdate = true;
    }
});
```
![ezgif-5-73bd2b1bac](https://user-images.githubusercontent.com/92864027/217254624-c12a21f5-d5e7-4bdf-9afc-521a42095b51.gif)
