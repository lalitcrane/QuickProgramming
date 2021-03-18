


####   Ground Mesh

       - Easy to bring hills and mounds, etc etc.
       - Canot change shape - always rectangle.
       - Difficult to customize Texture. 
       - Could not change Color.

####   Derived Shapes

       - Trapezoid - Cylinder with 4 tesselations or 4 sides.
       - Cone - Cylinder with Zero Top Radius.
       - Tube Uneven - Tube radious can be changed along it's path.

####  Polygon - Methods Circle, Rectangle, startAt, PathTo, Parse, addHole.

         var rectangle = BABYLON.Polygon.Rectangle(-16, -15, 17, 15);
         var ground = new BABYLON.PolygonMeshBuilder("ground", rectangle, scene)
        .addHole(BABYLON.Polygon.Parse(birdData))
        .build();

        ground.material = new BABYLON.StandardMaterial("mat", scene);
	 ground.material.backFaceCulling = false;
