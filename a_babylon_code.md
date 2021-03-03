

#### Animation 

    * Guide 
    * Moving
    * Rotating
    * Dimmer Intensity
    * https://babylonjsguide.github.io/gamelets/Sequence

#### Material
      * To see all faces.
         mat.backFaceCulling = false;  //Show all faces
      * Use Flat Shades to see it correctly
           mymesh.convertToFlatShadedMesh();



#### Dispose of a Mesh 

   * cylinder.dispose()

#### Getting Points and Drawing Edge Lines of a Mesh

     * https://playground.babylonjs.com/#1H7L5C#37
     * Get Points Data. It comes in single array with x, y, z for each point.
     * For36 points, there will be 108 array elements.
     *   var pdata = cylinder.getVerticesData(BABYLON.VertexBuffer.PositionKind);
	      var ndata = cylinder.getVerticesData(BABYLON.VertexBuffer.NormalKind);
     * Recreate the original Mesh with edges

             var cyPoints = [] ;

              for (var p = 0; p < pdata.length; p += 3) {
                const cylinder = BABYLON.MeshBuilder.CreateCylinder("cylinder", {
                   tessellation: 3, diameterTop : 0.1, diameterBottom : 0.1, height: 0.1
                });

                cylinder.position.x = pdata[p] ;
                cylinder.position.y = pdata[p+1] ;
                cylinder.position.z =  pdata[p+2] ;

                const tmpVector = new BABYLON.Vector3(pdata[p], pdata[p+1], pdata[p+2]) ;
                cyPoints.push(tmpVector) ;

                cylinder.material = redMat ;

              }
              
       * Draw Edge Lines

              const lineOptions = {
                   points: cyPoints, //vec3 array,
                   updatable: true
               }

                 let lines = BABYLON.MeshBuilder.CreateLines("lines", lineOptions);  //scene is optional and defaults to the current scene


#### Text and GUI in Babylon JS 
##### e.g. Buttons, Text, Containers, Images, Color Picker, Input - Keyboard 

    * Adding Text to scene
          // GUI
          var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

          var text1 = new BABYLON.GUI.TextBlock();
          text1.text = "Hello world";
          text1.color = "white";
          text1.fontSize = 24;
          text1.fontFamily = "open sans";
          advancedTexture.addControl(text1);
          
     * Use GUI to Add Text, Buttons, Checkboxes, Radio Buttons, etc etc to 

           https://www.babylonjs.com.cn/how_to/gui.html
           
     
