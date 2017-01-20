# meteor-demo

Mostly server-side stuff abt Meteor

#### Topics

1. Build/Package
```
meteor create app           //init new app in app dir
meteor npm install          //install npm modules
meteor list                 //list npm modules
meteor remove <packageName> //remove npm module
meteor add <packageName>    //add npm module
meteor                      //run
```
2. Collections
    * Mongo collections
    * Smart at handling Collection.find() cursor
    * Optail logging
    * Cheat sheet:
    ```
    //open mongo connection
    meteor mongo
    //list collections
    show collections
    //find one
    db.comments.findOne()
    //find all
    db.comments.find().pretty()
    //remove one
    db.comments.remove(ObjectId("58793399acaa72d08f0ddd01"))
    //remove all
    db.comments.drop()
    //insert
    db.comments.insert({comment:"meow, hiss"})
    ```
3. Messaging system
    * [DDP](http://40.media.tumblr.com/9cb10b17567aa31bc7b5938442df36df/tumblr_nk92vw12oA1sg99p0o1_1280.png) [messages](https://meteorhacks.com/introduction-to-ddp/)
    * A websocket implementation/protocol
4. Pub/sub
    * Coordinated DDP message
    * Client subscribes to server pubs
5. RPC
    * ```Meteor.call(...)``` syntax let's you run server side functions from the client js
    * Can also call client side functions (or both)
6. Advanced
    * Latency compensation
7. Pros/Cons
    * DB bound reactivity
    * Coupled to Mongo
    * Optail logging not available on all Mongo hosts
    * No idea how it plays with React
    * Feels proprietary


