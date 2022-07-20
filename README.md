# Full Stack MERN start- up -


## Create a folder "New-Project"

````  mkdir myNewProject ````
```` cd myNewProject ````****

## Next, create a new project via:

````npm init -y````

## create the package.json for our server. We will then need to install our dependencies:

````npm install express mongoose cors````

##  via the terminal or the UI, create a new file called ````server.js````

````touch server.js````

## Then, within the ```server.js``` add the following code:

````
```
const express = require('express');
const app = express();
const port = 8000;
    
app.listen(port, () => console.log(`Listening on port: ${port}`) )
```
````






