# CU Blood FrontEnd


## Starting Development Server
```
yarn start:prod
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Run production mode
```
yarn install
yarn gencss
yarn next:build
yarn start
```

Need pm2 to always run the node  
and nginx to reverse proxy to port 80

### There is a login bug when login from localhost
Since this is only appear in localhost, there will not be a fix for this.  
- we have provided manual login for localhost use by the following steps:
1. login from http://next.fives.cloud and copy cookie named "connect.sid" which has value familair to the image

![image](https://user-images.githubusercontent.com/12471844/52804631-423db700-30b7-11e9-8fdf-45b9e28567f7.png)

2. open localhost:3000 and use browser's dev tool to create new cookie named "connect.sid" with the same value copied from the previous step.

![image](https://user-images.githubusercontent.com/12471844/52804581-23d7bb80-30b7-11e9-9b71-886e0c6e393a.png)

3. refreshthe web. you will be now logged in.

![image](https://user-images.githubusercontent.com/12471844/52804671-5b466800-30b7-11e9-928a-9d96375c24ea.png)


## Directory Referencing

Symbol | Directory | Example Usage
--- | --- | ---
@ | ./components | `import FacebookCard from '@/shared-components/FacebookCard'`


## Available deployment sites
https://new5558.surge.sh << old build before migrate from static site to express rendering.  
https://cu-blood.herokuapp.com << master branch CI/CD NO DOCKER.  
https://poom-cublood.herokuapp.com << poom branch CI/CD NO DOCKER.  
http://next.fives.cloud << production branch (same as master but less frequent update)(digital ocean 5$ droplet) NO CD ONLY MANUAL DEPLOY.
