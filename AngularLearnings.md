
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
 ##### Alternative given below.
   * Link: https://stackoverflow.com/questions/31548311/angular-html-binding?rq=1
 
 Short answer was provided here already: use <div [innerHTML]="yourHtml"> binding.

However the rest of the advices mentioned here might be misleading. Angular has a built-in sanitizing mechanism when you bind to properties like that. Since Angular is not a dedicated sanitizing library, it is overzealous towards suspicious content to not take any risks. For example, it sanitizes all SVG content into empty string.

You might hear advices to "sanitize" your content by using DomSanitizer to mark content as safe with bypassSecurityTrustXXX methods. There are also suggestions to use pipe to do that and that pipe is often called safeHtml.

All of this is misleading because it actually bypasses sanitizing, not sanitizing your content. This could be a security concern because if you ever do this on user provided content or on anything that you are not sure about — you open yourself up for a malicious code attacks.

If Angular removes something that you need by its built-in sanitization — what you can do instead of disabling it is delegate actual sanitization to a dedicated library that is good at that task. For example — DOMPurify.

I've made a wrapper library for it so it could be easily used with Angular: https://github.com/TinkoffCreditSystems/ng-dompurify

It also has a pipe to declaratively sanitize HTML:

<div [innerHtml]="value | dompurify"></div>
The difference to pipes suggested here is that it actually does do the sanitization through DOMPurify and therefore work for SVG.

One thing to keep in mind is DOMPurify is great for sanitizing HTML/SVG, but not CSS. So you can provider Angular's CSS sanitizer to handle CSS:

import {NgModule, ɵ_sanitizeStyle} from '@angular/core';
import {SANITIZE_STYLE} from '@tinkoff/ng-dompurify';

@NgModule({
    // ...
    providers: [
        {
            provide: SANITIZE_STYLE,
            useValue: ɵ_sanitizeStyle,
        },
    ],
    // ...
})
export class AppModule {}
It's internal — hense ɵ prefix, but this is how Angular team use it across their own packages as well anyway. That library also works for Angular Universal and server side renedring environment.
