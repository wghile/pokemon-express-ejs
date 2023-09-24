## About

Simple Pokémon application built using Express JS framework and ejs view engine. This is the same project as my pokemon-express-jsx repository. I changed the view engine to ejs because I was having trouble removing the default body styling. From resources and forums I found online, the ejs view engine template is an html file (much easier to add styling to). Using this, I was able to remove the default styling of the body and learned how to use a different view engine which was cool. Faced some difficulties passing down props due to incorrect syntax but thanks to the resources down below I resolved it!

## Future Work

- Set requirements for new submission form (i.e. image format, how to handle blanks)

### Installation Instructions

1. clone repository

2. Install NPM packages on local machine

   - `npm i express`
   - `npm i jsx-view-engine react react-dom`

3. Install Nodemon dev tool on local machine

   - `$ sudo npm i -g nodemon`

4. cd into folder and run nodemon to start server. Type in _localhost:3000_ in browser

### Resources

EJS Engine:

- https://www.tutorialspoint.com/how-to-use-ejs-in-javascript#:~:text=EJS%20is%20a%20templating%20language,manage%20and%20organize%20our%20code.
- https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application
