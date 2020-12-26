
#### Google Cloud Samples

   * https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/functions/helloworld/index.js


#### Express JS on Google App Engine

https://cloud.google.com/community/tutorials/run-expressjs-on-google-app-engine

#### Google Cloud Function Deployment 

https://cloud.google.com/functions/docs/deploying/console
  * Deployment fron Console
     * Online Editing
     * Zip file deployment. Check for file and folder structure requirement.
        * https://cloud.google.com/functions/docs/writing#structuring_source_code
  * Deployment fron Local Machine
     * Require Zip file.Check for file and folder structure requirement.
  * Other Options - Source Code, Google Cloud Storage, etc etc.
  
  
#### Angular App deployment on Gooogle Cloud App Engine

   * Create Project on GCP Console
   * Create App on GCP Console
   * On local environment, add yaml file.
       * The yaml file should include static folder of the angular app
       * The yaml file should skip node_modeules and other project folders/files
   * On Local Environment, run commands
       * $gcloud autn login
       * $ gcloud app deploy --project=[Project Id]


   * Access using URL in browswer - https://ng-gae-app.appspot.com,
   
   * Link - https://dev.to/askudhay/step-by-step-guide-to-deploy-ngular-app-to-google-app-engine-46hl
   * Link - https://digizoo.com.au/1403/how-to-deploy-angular-8-app-to-google-app-engine/
   
   
