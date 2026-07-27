# Images : 
it is type of os , and to run the images we use the containers(machine).\
we can create our customizable images and run/share on any containers also can be deployed
it contains app + dependencies

# Containers
it is responsible for actul running of the images and all the containers are isolated to each other


# Docker Commands
docker run -it ubuntu   // to intall and run any image

ls  // to list all the folders

whoami  // to know the current dir

ctr+d  // to exit from the docker and come back to the root dir

mkdir folder_name   // to create a new folder

docker container ls    // to list all the files and folders in a container 
docker container ls -a  // to check all the containers available either running or stop

docker start docker_name  // to run any docker container
docker stop  docker_name   // to stop any container

docker exec -it docker_name bash  // to start and go inside the container dir
