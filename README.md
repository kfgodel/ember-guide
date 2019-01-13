# Ember guide example (for version 3.7)

This projects follows the [official guide](https://guides.emberjs.com/release/getting-started/quick-start/) for version 3.7 (latest to date)

### Pre-requisites
You will need [nvm](https://github.com/creationix/nvm)
> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash  
> nvm use   

### Project setup 

#### ember-quickstart
1. Install ember-cli
   > npm install -g ember-cli   
2. Create an ember app
   > ember new ember-quickstart
3. Remove the nested git repo created by ember-cli
   > rm -fR ember-quickstart/.git
4. Test initial setup
   > cd ember-quickstart  
   > ember serve  
   Access http://localhost:4200/    
5. Complete steps on each part of the app


#### Super-rentals
1. Start [in-depth tutorial](https://guides.emberjs.com/release/tutorial/ember-cli/)
   > ember new super-rentals  
2. Remove nested git repo
   > rm -fR super-rentals/.git 
3. Complete tutorial steps
   > cd super-rentals   