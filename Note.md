## What is middleware?

1. Example:-
    1. Assume that we have [ app.get('/', (req,res)=>{}) ] '/' route in our app,

        2. Now we want that if any req come to our server and before going to '/' this route that req should go from some function,
        ```
        This execution of the function before going to '/' route is known as middleware.
        ```


amader server e kono request ele seta '/' route e jaoar agey amar lekha ekta function er moddhe diye jaak, ei function guloke middleware bole.


## req,res,next();

1. Inside middleware we need to write **next();** to go to respective route.
2. And generally we don't send [res.send()] any response from middleware, if any error comes we log and throw the error.
3. We only write next() to fo to the respective route from where the request has come.