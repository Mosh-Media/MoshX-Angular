# AngularX 🏆

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6825a5f1db8f4856aa48f38121f2f993)](https://app.codacy.com/app/Mosh-Media/AngularX?utm_source=github.com&utm_medium=referral&utm_content=Mosh-Media/AngularX&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.com/Mosh-Media/AngularX.svg?branch=master)](https://travis-ci.com/Mosh-Media/AngularX)

Wouldn't it be nice to build web apps without any code knowledge? I am talking drag n drop beautiful components without any headaches.

Imagine a collection of layouts such as tables, forms, charts, and so on ready to be used for any purposes. These components are ready to handle and request API data to achieve any desirable results.

The idea is to build a very robust and modular front end application, and give developers and users the ability to build amazing interfaces in just minutes. We can achieve that level of complexity by using ngrx as our state management solution and firebase as our serverless backend.

## Get Started

```
git clone https://github.com/Mosh-Media/AngularX.git
npm install
ng serve -o
```

## Resources

[Angular auth ngrx guide](https://angularfirebase.com/lessons/ngrx-with-firebase-auth-google-oauth-login/)

[Ant Design Components](https://ng.ant.design/docs/introduce/en)

## Starting File Structure

```
app
│
└───components
│   │   posts
│   │   shared
│   │   users
│   └───user-details
│
└───containers
│   │   post
│   │   posts
│   │   user
│   │   users
│   └───auth
|
└───material
│   │
│   └───material.module
│
└───models
│   │   http-models
│   │   config.interface
│   │   post.interface
│   |   user.interface
│   └───auth.interface
|
└───services
│   │   config.service
│   │   post.service
│   │   user.service
│   └───auth.service
|
└───store
│   │   actions
│   │   |   config.actions
│   │   |   user.actions
│   │   |   post.actions
│   │   └───auth.actions
│   │
│   │   effects
│   │   |   config.effects
│   │   |   user.effects
│   │   |   post.effects
│   │   └───auth.effects
│   │
│   │   reducers
│   │   |   app.reducers
│   │   |   config.reducers
│   │   |   user.reducers
│   │   |   post.reducers
│   │   └───auth.reducers
│   │
│   │   selectors
│   │   |   config.selectors
│   │   |   user.selectors
│   │   |   post.selectors
│   │   └───auth.selectors
│   │
│   └───state
│   │   |   app.state
│   │   |   config.state
│   │   |   user.state
│   │   |   post.state
│   │   └───auth.state
│   |
|   app-routing.module
│   app.component.css
│   app.component.html
│   app.component.spec
│   app.component.ts
└───app.module
```

## Upcoming tasks

- [ ] Finish Firebase integrations (Auth, database and rules)
- [ ] Finish Playground workflow
- [ ] Write tests
