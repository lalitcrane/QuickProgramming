// Example of Promise and Observable


// 1. Example of Promise
// Link: https://www.positronx.io/angular-promises-example-manage-http-requests/

export class AppComponent implements OnInit {

  api: string = "https://jsonplaceholder.typicode.com/posts";
  data = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    const promise = new Promise((resolve, reject) => {
      const apiURL = this.api;
      this.http
        .get<Post[]>(apiURL)
        .toPromise()
        .then((res: any) => {
          // Success
          this.data = res.map((res: any) => {
            return new Post(
              res.userId,
              res.id,
              res.title,
              res.body
            );
          });
          resolve();
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }

}

// 2. Difference between Promise and Observable

1 Promise is eager, whereas an Observable is lazy,
2 Promise is always asynchronous, while an Observable can be either synchronous or asynchronous,
3 Promise can provide a single value, whereas an Observable is a
stream of values (from 0 to multiple values),
you can apply RxJS operators to an Observable to get a new tailored stream.

----Promise----
const promise = new Promise((data) =>
{ data(1);
  data(2);
  data(3); })
.then(element => console.log(‘Promise ‘ + element));
----Output of above code ---
Promise 1

-------Observable -------
const observable = new Observable((data) => {
data.next(1);
data.next(2);
data.next(3);
}).subscribe(element => console.log('Observable ' + element));

------ Output of Observable -----
  
Observable 1
Observable 2
Observable 3



// 3. Observable Example


  
