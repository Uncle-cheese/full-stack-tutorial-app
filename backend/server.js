const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");

db.mongoose.connect(db.url,{
	useNewUrlParser: true,
	//use to connect to the database
	useUnifiedTopology: true
})
	.then(()=>{
		console.log("connected to the database");
	})
	.catch(err=>{
		console.log("Cannot connect to the database!",err);
		process.exit();
	})

var corsOptions = {
	origin:"http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
	res.json({message:"Welcome to my firsrServer application"})
});

const PORT = process.env.PORT || 8080;

require("./app/routes/tutorial.routes")(app);

//set ports, listen for request 

app.listen(PORT,()=>{
	console.log(`server is running on port ${PORT}.`);
});
