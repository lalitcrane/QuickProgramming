
#### Add Tube 

    const addTube = function(scene) {

       // Use Sine Curve to follow the Path of Tube
       
        const path = new CustomSinCurve( 1 );
        const geometry = new THREE.TubeGeometry( path, 10, 1, 8, true );
        const material = new THREE.MeshBasicMaterial( { color: "white" } );
        const mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

    }

#### Add Trapezoid 

        const addTrapezoid = function(scene){

            var geometry = new THREE.CylinderGeometry( 0.8 / Math.sqrt( 2 ), 1 / Math.sqrt( 2 ), 1, 4, 1 ); // size of top can be changed

            geometry.rotateY( Math.PI / 4 );
            //geometry.computeFlatVertexNormals();

            const material = new THREE.MeshBasicMaterial( { color: "blue" } );

            var mesh = new THREE.Mesh( geometry, material );

            // Scale the trapezoid 
            var width = 8, height = 5, depth = 5 ;
            mesh.scale.set( width, height, depth );

            scene.add(mesh) ;

        } 
