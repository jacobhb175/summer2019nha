$(document).ready(function(){
 
	//Set job
    $(".job").click(function(){
    	const job = this.id;
    	console.log("job "+job)
    });

    //Set lands
    $(".lands").click(function(){
    	const lands = this.id;
   		console.log("lands "+lands)
    });

    $(".submit").click(function(){
    	alert("hello world")
    })
});