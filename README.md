# Web Programming II
A repository containing the starter project for Web Programming II

### Developing

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
This project is based, in part, on the Yeoman Angular Full-Stack Generator: https://angular-fullstack.github.io/
