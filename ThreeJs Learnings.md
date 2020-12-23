


## Three Js along with Bootstrap

   * Bootstrap works fine with ThreeJS
   
## Angular with Three JS - Outside Angular Components
   * ThreeJS script inside angular component did not work.
   * But in the index.html, ThreeJs script outside app-component works fine.
       * start body tag
          * app-root - app-root end tag
           * ---- Beow is ThreeJS Scripts ----
           * <script src="https://threejs.org/build/three.js"></script>
           * <script>
              const scene = new THREE.Scene();
              const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
              ### --- Full script below ----
           * </script>
       *  end body tag
       
### Angular with Three JS - Inside Component

    * Use link https://stackoverflow.com/questions/59149154/how-to-use-three-js-with-angular-7
    * Add the script in component's constructor.
    * All HTML text (from all components) will appear at the top, and all game appear at bottom,  irrespective of order of components. 
    * You can add More than one simulation in the same page.
    * Demo fle available at https://stackblitz.com/edit/angular7-threejs-outside-component?file=src/index.html
    * My answer for this query available at https://stackoverflow.com/questions/59149154/how-to-use-three-js-with-angular-7/65418557#65418557

### HTML5 Canvas is a very easy, but a little inflexible way of drawing Graphics. But you can embed SVG in HTML5 

### HTML 5 Canvas versus Scalable Vector Graphics (SVG)

https://en.wikipedia.org/wiki/Canvas_element#Canvas_versus_Scalable_Vector_Graphics_(SVG)

SVG is an earlier standard for drawing shapes in browsers. However, unlike canvas, which is raster-based, SVG is vector-based, so that each drawn shape is remembered as an object in a scene graph or Document Object Model, which is subsequently rendered to a bitmap. This means that if attributes of an SVG object are changed, the browser can automatically re-render the scene.

Canvas objects, on the other hand, are drawn in immediate mode. In the canvas example above, once the rectangle is drawn the model it was drawn from is forgotten by the system. If its position were to be changed, the entire scene would need to be redrawn, including any objects that might have been covered by the rectangle. But in the equivalent SVG case, one could simply change the position attributes of the rectangle and the browser would determine how to repaint it. There are additional JavaScript libraries that add scene-graph capabilities to the canvas element. It is also possible to paint a canvas in layers and then recreate specific layers.

SVG images are represented in XML, and complex scenes can be created and maintained with XML editing tools.

The SVG scene graph enables event handlers to be associated with objects, so a rectangle may respond to an onClick event. To get the same functionality with canvas, one must manually match the coordinates of the mouse click with the coordinates of the drawn rectangle to determine whether it was clicked.



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

### Great HTML5 Canvas Libraries
* Paper.js
* Pt.js


### Multiple Canvas and Multiple Scenes

  https://threejsfundamentals.org/threejs/lessons/threejs-multiple-scenes.html
