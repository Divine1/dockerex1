const express=require("express");
const app=express();

const config=require("/etc/config.json");

console.log("config ",config)

app.get("/",(req,res)=>{
	console.log("in home6 route-app1.3");
	res.send({data : "mydata"});
});

process.on("SIGINT",()=>{
	console.log("application is interrupted");
	process.exit(0);
})

process.on("SIGTERM",()=>{
	console.log("application is terminated");
	process.exit(0);
});

const port=3000;
app.listen(port,()=>{
	console.log("app listenning on port ",port);
})


