

#### Animation Function. Rotate, Move around (change x and Y)

    var phi = 0;
    scene.registerAfterRender(function () {
        matrix = cylinder.getWorldMatrix();
        cylinder.rotate(BABYLON.Axis.Y, Math.PI / 150, BABYLON.Space.LOCAL);
        cylinder.rotate(BABYLON.Axis.Z, Math.PI / 200, BABYLON.Space.LOCAL);
        cylinder.position = new BABYLON.Vector3(15 * Math.cos(phi), 16 * Math.sin(phi), 5)
        phi +=0.01;

    })
