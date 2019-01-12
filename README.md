# Ember guide example (for version 3.7)

This projects follows the [official guide](https://guides.emberjs.com/release/getting-started/quick-start/) for version 3.7 (latest to date)

### Pre-requisites
You will need [nvm](https://github.com/creationix/nvm)
> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash  
> nvm use   

### Project setup 
1. Install ember-cli
   > npm install -g ember-cli   
2. Create an ember app
   > ember new ember-quickstart
3. Remove the nested git repo created by ember-cli
   > rm -fR ember-quickstart/.git