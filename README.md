# Angular with NGRX Boilerplate 🏆


## File Structure

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