$(document).ready(function(){
 
	//Set job
	/*$("#farmer").click(function(){
    	const job = "farmer";
	});
	$("#artisan").click(function(){
		const job = "artisan";
    });
	$("#knight").click(function(){
    	const job = "knight";
    });*/
    $("button").click(function(){
    	alert(this.id); // or alert($(this).attr('id'));
    	//if ("#id" == "farmer") {}(){
    	//	console.log("farmer")
    	//}
    });

    //Set lands
    $("#crown").click(function(){
    	const lands = "crown";
	});
	$("#river").click(function(){
    	const lands = "river";
	});
	$("#storm").click(function(){
    	const lands = "storm";
	});
	$("#dorne").click(function(){
    	const lands = "dorne";
	});
	$("#reach").click(function(){
    	const lands = "reach";
	});
	$("#west").click(function(){
    	const lands = "west";
	});
	$("#iron").click(function(){
    	const lands = "iron";
	});
	$("#north").click(function(){
    	const lands = "north";
	});
	$("#vale").click(function(){
    	const lands = "vale";
	});
});