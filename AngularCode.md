


#### Creat new App
      $ ng new myapp

##### Add New Component
      $ cd ~/angularprojects/simplegameapp/src/app/
      $ ng generate component xyz

####  Add Angular Material

        $ ng add @angular/material
        ----   In app.module.ts add lines
          import {MatButtonModule} from '@angular/material/button';
          import {MatDividerModule} from '@angular/material/divider';

          imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            MatButtonModule,
            MatDividerModule
          ],





#### Add Progressive Web Apps Support
        $ ng add @angular/pwa
