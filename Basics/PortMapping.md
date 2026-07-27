# Define
if we are using node.js and our server is running on the port 8000
and if we send the docker image to any one they can't run the http://localhost:8000 directly on their browser
they have to map their port with the image port 

// docker run -it -p 8000:8000 image_name    (yourPort:ContainerPort)


