

##### Shapes with holes in it. Ring, Square with hole in it.

          const mat = new BABYLON.StandardMaterial("mat");
          mat.backFaceCulling = false;  //Show all faces

        const myShape = [
          new BABYLON.Vector3(2, 0, 0),
              new BABYLON.Vector3(4, 0, 0),
              new BABYLON.Vector3(4, 1, 0),
              new BABYLON.Vector3(2, 1, 0)
        ];

        //Create lathe
        const options = {shape: myShape, cap: BABYLON.Mesh.NO_CAP, radius: 2, tessellation:4, sideOrientation: BABYLON.Mesh.DOUBLESIDE} ;
        const lathe = BABYLON.MeshBuilder.CreateLathe("lathe",options );
        lathe.convertToFlatShadedMesh();
        lathe.material = mat;
