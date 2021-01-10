

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
