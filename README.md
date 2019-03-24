# Heroes of S.H.I.E.L.D. Demo

## Synopsis
Demonstrating an Angular 7 app using Lazy Loaded Modules, storing data via a NestJS API using a MongoDB Docker Container.

I also added OpenAPI (Swagger) for your pleasure :)

**Ommisions (for the sake of time)**

- Ideally, I would turn the API into multiple microservices to deal with there own concerns. For the sake of time, I have put them into one API.
- There should be an IAM service so that we can use a Bearer token to communicate with the API
- I want the IAM, Mongo, APIs and App to run in separate containers so that they could be orchastrated with something like Kubernetes.
- Documentation: I can install and run something like Compodoc which will scan your files and create auto documentation.




## How to Run

First do `make up` which will install all the `npm` packages for both the App and the API.

Currently, I haven't had time to create Dockerised build of the App and the API, so if you want to view the app you will have to serve the App and API manually.

**Mongo**

First we have to start the Mongo Docker container. The easiest way is to run `make mongo` in the root folder. If you can't run makefiles, run `docker-compose up -d` manually in the `docker` folder. This should setup your docker container.

**API**

Now we are ready to server the API. Go the folder `heroes-api` and run `npm run start`. If you rather use `yarn`, you know the drill. The OpenAPI is visibile on `http://localhost:3000/api`.

**App**

Finally, you can serve the app by going to the `heroes-app` folder and run `ng serve`. You can now access the app on `http://localhost:4200`.

