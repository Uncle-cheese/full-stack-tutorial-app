module.exports = app =>{

    const tutorials =require ("../controller/tutorial.controller");
    var router = require("express").Router();

    //create a new tutorial
    router.post("/",tutorials.create);

    //retrieve all tutorials
    router.get("/",tutorials.findAll);

    //retrieve all published tutorials
    router.get("/published",tutorials.findAllPublished);

    //retrieve a single tutorial
    router.get("/:id",tutorials.findOne);

    //update tutorial with id 
    router.put("/:id",tutorials.update);

    //delete tutorial by id
    router.delete("/:id",tutorials.delete);

    //delete all the tutorials
    router.delete("/",tutorials.deleteAll);

    app.use('/api/tutorials',router);
    
}