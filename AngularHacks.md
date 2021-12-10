
### Including SVG Icons in Angular html.
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
