

# port mapping
C:\Users>docker run -it -p 3000:3000 dockerfileName
server is running on the PORT 3000


# use to enter in a docker container using docker id
C:\Users>docker exec -it 0bd78e38fd53267f0 bash      

# you are in and fetching all the files and folders using ls
root@0bd78e38fd53:/# ls

bin   dev  home      lib    media  node_modules  package-lock.json  proc  run   srv  tmp  var
boot  etc  index.js  lib64  mnt    opt           package.json       root  sbin  sys  usr

# cat used to open the file and read the content
root@0bd78e38fd53:/# cat main.js
cat: main.js: No such file or directory

root@0bd78e38fd53:/# cat index.js

const express = require("express");

const app = express();


const PORT = 3000;

app.get('/',(req, res) =>{
    return res.json({message: 'using the node.js app for docker'})
})

app.listen(PORT,() =>{
    console.log(`server is running on the PORT ${PORT}`);
})root@0bd78e38fd53:/#