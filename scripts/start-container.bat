docker-compose build
docker-compose up

docker stop mean-template-nodejs
docker stop mean-template-mongodb
docker stop mean-template-selenium-chrome
docker stop mean-template-selenium-firefox

docker-compose down
