# Docker Node Wrapper

> :warning: **Under construction:** This module is in a very very early stage of development!

A wrapper for the Docker API written in and for NodeJS.

## Idea

The idea of this project is to provide an easy and understandable interface to interact with the Docker API from withing you code. You do not have to interact with any special endpoints to create containers, volumes or networks - the framework does all of that for you.

### Getting Started

To get started, simply install the package from NPM:

```
$ npm i docker-node-wrapper
```

Then import the package into your project:

```js
import Wrapper from "docker-node-wrapper";

const wrapper = new Wrapper();

// List all running containers on the docker host
wrapper.Containers.list().then(console.log);
```
