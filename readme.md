in order to test the application fully

but before that in order for the application to operate you will require to set the backend server by cloning this repository.
https://github.com/fullstack-hy2020/rate-repository-api

once it's cloned GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET need to be obtained from your own Github profile in order to send API requuests to Github that are otherwise limited. you can add those values to a .env file and can you use the template provided. you may change the PORT in the .env to 5001 in case 5000 is reserved.

then run npm run build to populate the backend database

after that you can npm start the backend and then npm start the expo project

first unzip the folder. please note that I included the node_modules as I ran into some issues when trying to run the snack. also I was not able to use the expo publish

the application can be run by running the command npm start

I apologize for this inconvience I was not able to use snacks or make my own server for the backend.
