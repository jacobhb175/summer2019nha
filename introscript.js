//Delaring Variables
let job
let lands

$(document).ready(function(){
 
	//Set job
    $(".job").click(function(){
    	job = this.id;
    	console.log("job "+job)
    });

    //Set lands
    $(".lands").click(function(){
    	lands = this.id;
   		console.log("lands "+lands)
    });

    //Link to homepage, bring variables in url
    $(".submit").click(function(){
    	console.log("job " + job + " lands " + lands);
    	location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/homeindex.html?job=" + job + "&lands=" + lands
    })
});