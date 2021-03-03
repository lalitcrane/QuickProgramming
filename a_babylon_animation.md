

#### Animation Function. Rotate, Move around (change x and Y)

    https://playground.babylonjs.com/#XQI4UY#3
    
    var phi = 0;
    scene.registerAfterRender(function () {
        matrix = cylinder.getWorldMatrix();
        cylinder.rotate(BABYLON.Axis.Y, Math.PI / 150, BABYLON.Space.LOCAL);
        cylinder.rotate(BABYLON.Axis.Z, Math.PI / 200, BABYLON.Space.LOCAL);
        cylinder.position = new BABYLON.Vector3(15 * Math.cos(phi), 16 * Math.sin(phi), 5)
        phi +=0.01;

    })
    
    
 #### Using Pivot Point
 
    https://playground.babylonjs.com/#T6IN6X
 
    const box = BABYLON.MeshBuilder.CreateBox("Box", {faceColors:faceColors, size:2}, scene, true);
	spherePivot.parent = box;
    spherePivot.position = new BABYLON.Vector3(-1, -1, -1);
    sphereLocalOrigin.parent = box;
    box.setPivotPoint(new BABYLON.Vector3(-1, -1, -1));
    box.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
    box.material.wireframe = true;
    /*******************End Box Creation*****************************************/
	
	/*******Animation******************************/
    let angle = 0;
    scene.registerBeforeRender(function(){
        box.rotation.y = angle;
        angle += 0.01;

    })
