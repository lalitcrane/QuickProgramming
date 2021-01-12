

#### Module Exports Statement

        const helloWorldFireTs = functions.https.onRequest((request, response) => {
          functions.logger.info("Hello logs!", {structuredData: true});
          response.send("Hello from Firebase!");
        });

        const helloWorldFireTsTwo = functions.https.onRequest((request, response) => {
          functions.logger.info("Hello logs!", {structuredData: true});
          response.send("Hello from Firebase! In helloWorldFireTsTwo");
        });

        module.exports.helloWorldFireTs = helloWorldFireTs;
        module.exports.helloWorldFireTsTwo = helloWorldFireTsTwo;
        
        or 
        
        module.exports = {
          helloWorldFireTs,
          helloWorldFireTsTwo,
        };
        
        ??? Dont know why, bu trailing comma in the end was required in module.exports last statement
