# MEAN stack starter template
A repository containing a starter MongoDB, Express.js, Angular, and Node.js (MEAN) project for full-stack web development

### Running the Docker containers
1. Start by installing Docker if you have not already done so: https://docs.docker.com/get-docker/
2. After installing docker, start the necessary containers for the project by running the scripts/start_container script appropriate for your operating system
3. Once the Docker containers have started, attach to the development container by running the scripts/attach_container script appropriate for your operating
 system

### Developing

1. Once you are attached to the development container, navigate to the /app/
1. Run `yarn install` to install server dependencies.
2. Run `npm run start:server` to start the development server. 
3. Run `npm run start:client` to run the development client application. 

## Build & development

Run `gulp build` for building and `gulp buildcontrol:heroku` to deploy to Heroku.

## Testing

Running `npm test` will run the unit tests with karma.

## FAQ
If you see an error from Heroku saying "match is not defined", try running these commands from your dist directory:
1. heroku config:set NODE_MODULES_CACHE=false
2. git commit -am 'disable node_modules cache' --allow-empty
3. git push heroku master
4. heroku config:set NODE_MODULES_CACHE=true

## Acknowledgements
This project is based, in part, on the [Yeoman Angular Full-Stack Generator](https://angular-fullstack.github.io/) 

## LICENSE
This software is licensed under the [FreeBSD License](https://opensource.org/licenses/bsd-license.php) 
