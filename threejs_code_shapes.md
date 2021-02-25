
#### Add Tube 

    const addTube = function(scene) {

        const geometry = new THREE.TorusGeometry( 5, 1, 16, 100 );
        const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
        const torus = new THREE.Mesh( geometry, material );
        scene.add( torus );
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
