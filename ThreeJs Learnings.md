


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

### HTML5 Canvas is a very easy, but a little inflexible way of drawing Graphics. But you can embed SVG in HTML5 

### HTML 5 Canvas versus Scalable Vector Graphics (SVG)

https://en.wikipedia.org/wiki/Canvas_element#Canvas_versus_Scalable_Vector_Graphics_(SVG)

This section does not cite any sources. Please help improve this section by adding citations to reliable sources. Unsourced material may be challenged and removed. (October 2017) (Learn how and when to remove this template message)
SVG is an earlier standard for drawing shapes in browsers. However, unlike canvas, which is raster-based, SVG is vector-based, so that each drawn shape is remembered as an object in a scene graph or Document Object Model, which is subsequently rendered to a bitmap. This means that if attributes of an SVG object are changed, the browser can automatically re-render the scene.

Canvas objects, on the other hand, are drawn in immediate mode. In the canvas example above, once the rectangle is drawn the model it was drawn from is forgotten by the system. If its position were to be changed, the entire scene would need to be redrawn, including any objects that might have been covered by the rectangle. But in the equivalent SVG case, one could simply change the position attributes of the rectangle and the browser would determine how to repaint it. There are additional JavaScript libraries that add scene-graph capabilities to the canvas element. It is also possible to paint a canvas in layers and then recreate specific layers.

SVG images are represented in XML, and complex scenes can be created and maintained with XML editing tools.

The SVG scene graph enables event handlers to be associated with objects, so a rectangle may respond to an onClick event. To get the same functionality with canvas, one must manually match the coordinates of the mouse click with the coordinates of the drawn rectangle to determine whether it was clicked.

Conceptually, canvas is a lower-level API upon which an engine, supporting for example SVG, might be built. There are JavaScript libraries that provide partial SVG implementations using canvas for browsers that do not provide SVG but support canvas, such as the browsers in Android 2.x. However, this is not normally the case—they are independent standards. The situation is complicated because there are scene graph libraries for canvas, and SVG has some bitmap manipulation functionality.

https://www.w3schools.com/html/html5_svg.asp

### Canvas 
Resolution dependent
No support for event handlers
Poor text rendering capabilities
You can save the resulting image as .png or .jpg
Well suited for graphic-intensive games

#### SVG

Resolution independent
Support for event handlers
Best suited for applications with large rendering areas (Google Maps)
Slow rendering if complex (anything that uses the DOM a lot will be slow)
Not suited for game applications
