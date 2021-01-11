#### Google Cloud HTTP Functions (Full Guide)

     * https://cloud.google.com/functions/docs/writing/http#handling_http_methods
     * request types - GET, POST, 
     * CORS Request
     * Multipart request
     * Content Types
     * Using Cloud Storage

#### Organizing Multiple Functions

    * https://stackoverflow.com/questions/43486278/how-do-i-structure-cloud-functions-for-firebase-to-deploy-multiple-functions-fro
    
#### Organizing Multiple Firebase Functions
    * https://firebase.google.com/docs/functions/organize-functions
    
#### Organizing Typescript Functions
    * Folder Structure 
        * /functions
            * --index.ts
            * --foo.ts
    * Near all your regular imports at the top just export all the functions from foo.ts.

            *   export * from './foo';
    * More Ideas at : https://stackoverflow.com/questions/43486278/how-do-i-structure-cloud-functions-for-firebase-to-deploy-multiple-functions-fro
            

#### Writing Function

       * Link: https://cloud.google.com/functions/docs/first-nodejs
       * Make Folder and init function
          * $ mkdir ~/helloworld
          * $ cd ~/helloworld
          * $ npm init
       * Install Dependancies 
          * $ npm install escape-html    


        * Edit index.js file.

          const escapeHtml = require('escape-html');

          /**
           * HTTP Cloud Function.
           *
           * @param {Object} req Cloud Function request context.
           *                     More info: https://expressjs.com/en/api.html#req
           * @param {Object} res Cloud Function response context.
           *                     More info: https://expressjs.com/en/api.html#res
           */
          exports.helloHttp = (req, res) => {
            res.send(`Hello ${escapeHtml(req.query.name || req.body.name || 'World')}!`);
          };
          
       * Deploy Functions
       
          * $ gcloud functions deploy helloHttp --runtime nodejs12 --trigger-http --allow-unauthenticated
       * Describe Function 
           * gcloud functions describe helloHttp

       * Test Function
          * In Browser https://GCP_REGION-PROJECT_ID.cloudfunctions.net/helloHttp?name=NAMEcurl -X POST 'https://us-central1-rdnetworkproject.cloudfunctions.net/helloHttp' --data '{"id"}:"myid"'
          * In Curl 
          *   $ curl -X POST 'https://us-central1-rdnetworkproject.cloudfunctions.net/helloHttp' --data 'aaaa'
       * View Logs 
       
          * $ gcloud functions logs read helloHttp

#### Organize Functions - Use Express App 

         * https://medium.com/google-cloud/express-routing-with-google-cloud-functions-36fb55885c68
         * In the end use export.users=app to give top level function a name. Otherwise app name gets name "app"
                const express = require('express');

                // Create an Express object and routes (in order)
                const app = express();
                app.use('/users/:id', getUser);
                app.use('/users/', getAllUsers);
                app.use(getDefault);

                // Set our GCF handler to our Express app.
                exports.users = app;
          * Instead the last statement exports.users = app, you can use module.export
               module.exports = {
                    app
                };
          * Deploy function with entry point app name
              * $ gcloud functions deploy first-function --runtime nodejs8 --trigger-http --entry-point app
         
#### Chaining Functions - ExpressJS Middleware app.use()
           
           * Use app.use() in express js as middleware to chain multiple functions together.
           * In middleware functions, the functions has access to request and response objects.
           
           
