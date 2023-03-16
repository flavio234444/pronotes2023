# Updating to ES6
In this part of the section we will see what changes were made to the repository in an upgrade from ES5 to ES6 and how the functions were only altered for the most part so that it can be able to read what you already have without the need to change many aspects of the code itself.

## Methods
### The first step is to change the var variables to conts variables.

- One of the elements that were altered the most at the time of the update was the var variable in its link we can use the const variable. 
- This was altered to most of the variables in your case was only what was used in our server folder.
===
### The second step that we made was the change of the functions

- We change them for a simpler part and that it demonstrates us that it is the same, to these we call them the functions arrow 
- One of the particularities of these arrow functions is that it already helps us to define what we want to understand with this symbol **=>**

~~~
We can see how we mark the arrow functions with an example 
app.use((err, req, res, next)=>
~~~

### The third change we made was 
- The import of the libraries since these we had them in a way that could only be read by ES5 and that ES6 gave us a radical change and we will no longer use much what are the var variables but we change them and we can send them to call in a way that is easier to read this we can see in an example of how we send it to call 

~~~
' import createError from 'http-errors'; '
~~~
- This was done when we want to call the dependencies and import the resource packages that are necessary for the use of the application.

#### We can also see several changes in the code as examples
~~~
app.use((req, res, next)=> {
  next(createError(404));
});
~~~
### One of the changes that we can see the most is how the three functions we use change to the above mentioned mind
~~~
import  express from 'express';
const {Router} = express;
const router = Router();
router.get('/author', (req, res)=>{ 
    //Responding to the client using res object
    res.json({
        "name": "Jose Ezequiel",
        "lasname": "Hernandez Lara ",
        "age": "22 years"
    });
});//function(req, res)
export default router;
~~~
## Results
- With the seen in the class and with the code we can see that the change can be much better for the application since this same one shows us that it is better to use the most current versions since these can bring with them improvements that will help us to develop better the applications. 
## Discussions
- A way to view a code to one of the most recent updates may be of more help when it comes to making the code lighter. 
## Referecias
- None