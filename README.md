# CU Blood Component Template


## Starting Development Server
```
yarn go
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Directory Referencing

Symbol | Directory | Example Usage
--- | --- | ---
@ | ./components | `import FacebookCard from '@/shared-components/FacebookCard'`


## Available deployment sites
https://new5558.surge.sh << old build before migrate from static site to express rendering.  
https://cu-blood.herokuapp.com << master branch CI/CD NO DOCKER.  
https://poom-cublood.herokuapp.com << poom branch CI/CD NO DOCKER.  
http://next.fives.cloud << production branch (same as master but less frequent update)(digital ocean 5$ droplet) NO CD ONLY MANUAL DEPLOY.
