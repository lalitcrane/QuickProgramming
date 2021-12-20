
### Including bootstrap SVG icons in Angular Button using CSS stylesheet.
##### Step 1: Include bootstrap icons css file in html head tags. 

##### Step 2: Add Icon inside button tag
      <i class="bi bi-circle red"></i>
##### Step 3: To change Color of Icon, Add color in css styles file. Then use it as class in icon tag
      .red{color:red}

### Including bootstrap SVG icons in Angular Button using npm install.
      https://stackoverflow.com/questions/60365440/how-to-programmatically-use-bootstrap-icons-in-an-angular-project
      
##### Step 1: Install bootstrap icons package in angular project.
  * Go to angular project top level folder. And call below method.
  * $ npm i bootstrap-icons --save
  * Use i in above command so that dependances are added in angular.json file.
  
##### Step 2: Import bootstrap-icons.css file in styles.css file. 
    @import "~bootstrap-icons/font/bootstrap-icons.css";

#### Step 3: Add Icon inside button tag
      <i class="bi bi-circle red"></i>
#### Step 4: To change Color of Icon, Add color in css styles file. Then use it as class in icon tag
      .red{color:red}
  
### Including Custom SVG Icons in Angular html.
##### Step 1: Add svg file to assets folder.
   * You can add multiple svg icons in single svg file and refer svg icons by #id from svg file.
   * e.g. in assets folder add customsvg/mysvgicons.svg file.
   * In svg file add multiple svg icons with each icon assigned id. 

    <svg xmlns="http://www.w3.org/2000/svg">
       <symbol id="exampleid" viewBox="0 0 256 256">
        <path d="M120.... />
      </symbol>
    </svg>
##### Step 2: In your styles file add color fills if you want to change colors.

    In your html file, you want something like this:
      <style>
        .fill-red { fill: red; }
        .fill-blue { fill: blue; }
      </style>

##### Step 3: In your html file access svg file from assets folder. And access svg icon using # id. e.g. #exampleid
      <a href="//www.example.com/">
        <svg class="fill-red">
          <use xlink:href="assets/customsvg/mysvgicons.svg#exampleid"></use>
        </svg>
      </a>

### Adding HTML Elements or Angular Components dynamically
#### Use ViewChild or ViewChildren or Renderer2


          * ViewChild or ViewChildren gives reference to ElementRef which can be used to add/remove new elementts.
          * Renderer2 is best for DOM Manupulation.....add/remove, change elements etc etc. 
          * Refer: https://www.tektutorialshub.com/angular/renderer2-angular/
          * https://www.concretepage.com/angular-2/angular-4-renderer2-example
          * Understanding ViewChild and QuerySelector: https://www.pluralsight.com/guides/querying-the-dom-with-@viewchild-and-@viewchildren
          * ViewChild Examples: https://blog.angular-university.io/angular-viewchild/
          * Use ngAfterViewInit() method.
#### Code Snippets for ViewChild etc etc.

            export class AppComponent implements AfterViewInit {

             name = "Angular";

             // Accessing multiple native DOM elements using QueryList
             @ViewChildren(HelloComponent) myValue: QueryList<HelloComponent>;

             ngAfterViewInit() {
                 console.log("Hello ", this.myValue);
             }
 
#### Adding Elements Dynamically.

            import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

            @Component({
               selector: 'app-append',
               templateUrl: './append-demo.component.html'
            })
            export class AppendDemoComponent { 
               @ViewChild('abcd') 
               private abcd = {} as ElementRef;
               constructor(private renderer: Renderer2) {
               }
               onClick() {
                 const li = this.renderer.createElement('li');
                 const text = this.renderer.createText('Click here to add li');
                 this.renderer.appendChild(li, text);
                 this.renderer.appendChild(this.abcd.nativeElement, li);
               }
}                    
