# Spike using Ionic2 for Mosica

## Getting Started!
As we explain in [this post](https://medium.com/coding-stones/experimentos-con-angularjs-y-arquitectura-hexagonal-b6fc489df0ef) and in [this post](https://medium.com/coding-stones/experimento-con-ionic-2-y-arquitectura-hexagonal-434320a64293), 
we didn't want to duplicate the core logic of the mosica project, so we decided to create a [mosica-core](https://github.com/codingstones/mosica-core) universal project to be shared by all of our experiments.

You need to clone [this project](https://github.com/codingstones/mosica-core) as mosica-core so it will be referenced from the package.json of the current project.

### Installing Dependencies
``` bash
$ yarn 
```
or
``` bash
$ npm run install
```

### Running app in browser: 
``` bash
- ionic serve
```

### Running in android: 
``` bash
- ionic cordova build android
```

### Running in ios:
``` bash
- ionic cordova build ios
```

### Running tests with Jest: 
``` bash
- jest --watch 
```
