# MEAN stack starter template
A repository containing a starter MongoDB, Express.js, Angular, and Node.js (MEAN) project for full-stack web development

### Running the Docker containers
1. Start by installing Docker if you have not already done so: https://docs.docker.com/get-docker/
    1. NOTE: On Windows 10 Home you may have to install an older version of Docker called Docker Toolbox: https://github.com/docker/toolbox
2. After installing docker, start the necessary containers for the project by running the scripts/start_container script appropriate for your operating system

### Developing

1. Once the Docker containers have started, attach to the development container by running the scripts/attach_container script appropriate for your operating
 system
2. Navigate to the /app/meantemplate directory. This will be where the source code of the project will be shared into the Docker container
3. Run `yarn install` to install server dependencies.
4. Run `npm run start:server` to start the development server. 
    4.1 You can access the Express.js API via localhost:9000 on your local machine
5. In a new terminal, run another instance of scripts/attach_container and run `npm run start:client` to run the development client application inside the 
/app/meantemplate directory.
5.1. You can access the Angluar application via localhost:8080 in a browser on your local machine

## Build & development

Run `gulp build` for building and `gulp buildcontrol:heroku` to deploy to Heroku.

## Testing

- Running `npm test:client` will run the client unit tests. 
- Running `npm test:server` will run the server unit tests.
- Running `npm test:e2e` will run the e2e tests using Protractor.

## FAQ
If you see an error from Heroku saying "match is not defined", try running these commands from your dist directory:
1. heroku config:set NODE_MODULES_CACHE=false
2. git commit -am 'disable node_modules cache' --allow-empty
3. git push heroku master
4. heroku config:set NODE_MODULES_CACHE=true

If you see a message during `yarn install` saying "info There appears to be trouble with your network connection. Retrying...", followed by the error 
"ESOCKETTIMEDOUT", cancel the yarn install and try it again. If this does not help, try restarting Docker.

## Acknowledgements
This project is based, in part, on the [Yeoman Angular Full-Stack Generator](https://angular-fullstack.github.io/) 

## LICENSE
This software is licensed under the [FreeBSD License](https://opensource.org/licenses/bsd-license.php) 
