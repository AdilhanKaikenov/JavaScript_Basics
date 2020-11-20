**AJAX**  
AJAX (abbreviation for "Asynchronous Javascript And Xml") is a technology for accessing the server without reloading the page.  

Usage examples:
* Interface elements (add to cart, subscribe, etc.)
* Dynamic data loading
* Live search
  
In order for the page (frontend) to communicate with the server, we need the HTTP requests that we will send. To make it happen asynchronously i.e. without reloading, we need Ajax technology.

Synchronous vs Asynchronous code:  
* Synchronous code works for us in order, for example, if some operation takes a long time to complete, then the rest of the code will wait for its completion.
* Asynchronous code works the other way around, it doesn't affect the rest of the code, in other words, it doesn't block it.

Ajax requests are asynchronous by default, we send a request to the server, we do not know how long the server will respond to us and the rest of the code that goes after the request will continue to execute.