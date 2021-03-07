

#### Circular Path (for TubeGeometry)

      var path = [];
          var step = Math.PI * 2 / 120;
          for(var i = 0; i < 100; i++) {
        	  var point = new BABYLON.Vector3(3 * Math.cos(step * i), 3 * Math.sin(step * i), 0);
        	  path.push(point); 
          }
          
          
####  M shape for Geometry.

        var shape = [
            new BABYLON.Vector3(1, 0.5, 0),
            new BABYLON.Vector3(0.2, 1.3, 0),
            new BABYLON.Vector3(0, 1, 0),
            new BABYLON.Vector3(-0.2, 1.3, 0),
            new BABYLON.Vector3(-1, 0.5, 0),
          ];
