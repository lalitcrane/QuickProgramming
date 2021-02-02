

#### Axis Hacks 

   * By Default Y Axis is up. X and Z are on ground. X is Horizontal and Z is the remaining one.
   * Change Axis direction with x and y as ground and z up.
       * THREE.Object3D.DefaultUp.set(0, 0, 1);


#### Curves
    * 2D curve - Spline Curve 
    * 2D Path - PathTo - Curve following a Path. See example below
    * 3D Curve 
       * Bezier Curve - Two Control Point between Start and End.
       * Quadratic Bezier Curve - Single Control Point between Start and End.
       * CatmullRomCurve - From a series of points.
       * 

#### 2d Path Path To example 

          const path = new THREE.Path();

          path.lineTo( 0, 0.8 );
          path.quadraticCurveTo( 0, 1, 0.2, 1 );
          path.lineTo( 1, 1 );

          const points = path.getPoints();

          const geometry = new THREE.BufferGeometry().setFromPoints( points );
          
 #### Transparent Color
 
        var color = "green" ;
         const material = new THREE.MeshPhongMaterial({
            color,
            opacity: 0.5,
            transparent: true,
          });
          
  #### Set Position 
  
       mesh.position.set(100, 100, 100);
       or 
       mesh.position.setX(100);
       mesh.position.setZ(100, 100, 100);



#### Wireframes, Lines, Faces, Points Geometry

     * https://blog.mozvr.com/threejs-lines-and-faces/
     * Points Geometry
     
        const geo = new THREE.SphereGeometry(2)
        const mat = new THREE.PointsMaterial({
            color:0xffffff,
            size: 0.1,
        })
        mesh = new THREE.Points(geo,mat)
        
        * Wireframe
        
        var geo = new THREE.SphereGeometry( 2 );
        var geometry = new THREE.WireframeGeometry2( geo );
        matLine = new THREE.LineMaterial( {
            color: 0xff0000,
            linewidth: 5, // in pixels
        } );
        matLine.resolution.set( window.innerWidth, window.innerHeight );
        mesh = new THREE.Wireframe( geometry, matLine );
        mesh.position.z = -10
        scene.add( mesh );

