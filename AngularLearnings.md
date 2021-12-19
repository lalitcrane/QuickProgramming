
### Adding Component inside another component folder.
  * e.g. Parent Component RdNetwork, Child Component RdNetworkDisplay
  * Create Component RdNetwork in myapp folder.
  * This will create Component files in rd-network folder.
  * on CLI, go to rd-network folder.
  * Create Component RdNetworkDisplay while you are in rd-network folder.
  * This will create RdNetworkDisplay component files in mygame/rd-network/rd-network-display folder.

#### Removing Component

* Remove the reference from app.module.ts (from import and declarations sections)
* Remove the component Folder.
* Remove the component references from other pages.


### Adding Routing

 * In app-routing.module.ts file, add import statements and routes variable. 
 * import statements should import all components that are part of routes array variable.
 * In app.component.html add component links, e.g. <a> or href
 * In app.component.html add router-outlet tag (Empty Tag)
 
 
 #### HTTP Client Module Usage
    Link: https://stackoverflow.com/questions/46019771/catching-errors-in-angular-httpclient
    ###### Receive Data/Catch Error
    import 'rxjs/add/operator/catch'; // don't forget this, or you'll get a runtime error

    this.httpClient
      .get("data-url")
      .subscribe(
        data => console.log('success', data),
        error => console.log('oops', error)
      );
      
     Link 2: Good Example
     https://www.tutorialspoint.com/angular6/angular6_http_client.htm
      
##### Handling Exceptions in HTTPClient Module

     * Link: https://www.pluralsight.com/guides/handling-exceptions-using-the-angular-httpclient
     * Also contains code to understand HTTPClient Module working
      
     
 #### Using JQuery with Angular
      * Should be avoided.
      * Save to local folder ($ npm install jquery — save) or Use CDN
      * In component.ts file add line 
          declare var $: any;
       * In your ts file, call jquery functions they way it is done normally (with $ variable)
           ngOnInit(){
            $(‘button’).click(function(){
            alert(‘Wass up!’);
             });
            }
      
      * Link: https://blog.bitsrc.io/how-to-use-jquery-with-angular-when-you-absolutely-have-to-42c8b6a37ff9

#### Sharing Data beetween components - 4 Ways 
 * https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/
 1. Parent to Child: Sharing Data via Input
 2. Child to Parent: Sharing Data via ViewChild
 3. Child to Parent: Sharing Data via Output() and EventEmitter
 4. Unrelated Components: Sharing Data with a Service
 

 ### Angular and SVG problems.
 #### Why adding SVG content dynamically in componen.html files are so difficult.
 ##### Angular Sanitizes any content dynamically added to component.html files for security reason.s
 ##### Problem details given below.
   * Link: https://stackoverflow.com/questions/31548311/angular-html-binding?rq=1
 #### Solution: Create safe pipe.
  * Step 1: Link: https://nishugoel.medium.com/creating-custom-pipes-in-angular-2b082a5dc74b
  * Step 2: Create Pipe using ng cli.
   * $ ng generate pipe mypipes/safe 
   * This will generate safe.pipe.ts file in mypipes folder and also will update the app.module.ts file.
  * Step 3: In your component htm file div element, use the pipe as below.
   * [innerHtml]="mySvgHtmlStr | safe: 'html' "
 
