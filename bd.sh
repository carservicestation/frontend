#cd frontend

EXISTS=$(docker container ls -a -q --filter name=angularcontainer)

if [ $EXISTS ]; then
docker container stop angularcontainer
docker container rm angularcontainer
docker image rm angularimage
fi

docker image build -t angularimage .

docker container run -itd --name angularcontainer -p 5050:80 angularimage
