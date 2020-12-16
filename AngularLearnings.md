
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
 
 
