# Usage
````
$.poll({
  url: "www.url.com/poll_url",
  success: function(data,status,response,poll){
    poll();
  },
  error: function(xhr,status,message,poll){
    poll();
  },
  every: 100,
  increment: 100,
  max: 20000
})

````
