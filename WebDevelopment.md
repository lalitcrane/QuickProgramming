
#### Frameworks for HTML DOM Manupulations
    * Angular 
        * Powerful like no other.
        * Steep Learning Curve.
        * Require complex Development Environment.
    * JQuery - Use it when not using Angular
        * Tricky to use with Angular.
        * Easiest to use with Bootstrap.
        * Fastest way to develop Web Applications.
        * When we do not need Angular, Use JQuery and Bootstrap.


#### Options to connect over HTTP in Javascript
  
    * Fetch API 
       * Link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
       * Modern API. Can be used in all javascript projects without adding any extra api.
       * Easy and Clean API
    * ajax -XMLHttpRequest
       * Link - https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp
       * Easiest way to send/get data over http in javascript.


#### Curl Examples

     * https://devzone.paylane.com/function-reference/curl-examples/
     * $ curl -X POST HTTP_TRIGGER_ENDPOINT -H "Content-Type:application/json"  -d '{"name":"Jane"}'
     * $ curl -X GET HTTP_TRIGGER_ENDPOINT -H "Content-Type:application/json"  -d '{"name":"Jane"}'

     * $ curl --request POST 'https://your_login:your_password@direct.paylane.com/rest/cards/sale' \
     --data '{"sale": {"amount":19.99, "currency":"EUR", "description":"Product #1"}, "customer":{"name":"John Doe", "email":"john@doe.com", "ip":"127.0.0.1", "address":{"street_house":"1600 Pennsylvania Avenue Northwest", "city":"Washington", "state":"DC", "zip":"500", "country_code":"US"}}, "card":{"card_number":"4200000000000000", "expiration_month":"03", "expiration_year":"2017", "name_on_card":"John Doe", "card_code":"123"}}'
     
      * $ curl --request GET 'https://your_login:your_password@direct.paylane.com/rest/sales/info' \
     --data '{"id_sale":1234567}'
