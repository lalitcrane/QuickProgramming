

#### pipe and composer

    * https://www.freecodecamp.org/news/pipe-and-compose-in-javascript-5b04004ac937/
    * pipe and composer are similar. composer does what pipe does in reverse order.
    * pipe helps group a functions to operate on one input.
    * pipe example. getName, uppercase, etc etc are functions.
         pipe(
            getName,
            uppercase,
            get6Characters,
            reverse
          )({ name: 'Buckethead' });
          // Output is 'TEKCUB'
          
    * compose Example
        compose(
          reverse,
          get6Characters,
          uppercase,
          getName
        )({ name: 'Buckethead' });
