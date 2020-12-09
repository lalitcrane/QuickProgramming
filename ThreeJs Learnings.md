


## Three Js along with Bootstrap

   * Bootstrap works fine with ThreeJS
   
## Angular with Three JS
   * ThreeJS script inside angular component did not work.
   * But in the index.html, ThreeJs script outside app-component works fine.
       * start body tag
          * <app-root></app-root>
           * ---- Beow is ThreeJS Scripts ----
           * <script src="https://threejs.org/build/three.js"></script>
           * <script>
              const scene = new THREE.Scene();
              const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
              ### --- Full script below ----
           * </script>
       *  end body tag
        
        
