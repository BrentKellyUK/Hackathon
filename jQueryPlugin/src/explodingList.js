(function( $ ){

    $.fn.toggleAble = function(  ) { 
        $(this).live("click",function(){ 
                    $(this).toggleClass("selected");
                    console.log("was toggled");
        });
        
        console.log("added toggling"); 
    };

    $.fn.showHideChildren = function ( ) {
        console.log("setting up showHide");
        $(this).live("click", function(){
                            showOrHideChildren($(this));
                            }
            );
    };
    
    $.fn.addDataToMap = function (methodName,argList){
        
    }

})( jQuery );

//TODO let the inputs start hidden, and use this method to un-hide them
function createNewCall(method){
    var newContent = "<input class='argValueInput' type='text' name='appointmentIDs' value=' ' />";
    $("#"+method).find(".argument").each( function (){
            $(this).append(newContent);
        }
        );
}


function showOrHideChildren(id){
    console.log("Hideshowing "+id);
    id.parent().children("ul").toggleClass('hidden');
}

function addAllTestsToMethod(methodName){
    
}


function addTestToMethod(method, argList){
   var testList = $("*[name="+method+"]").find(".apiTestList");
   
   
   
   testList.append(makeListElementFromArgumentList(argList));
   
}

// creates the argument list <li> to show the 'test' run
function makeListElementFromArgumentList(argList){                        
    var result=  "<li class='apiTest'> ";
    var flag = false;
    for(argument in argList){
        if(!flag){
            flag = true;   
        }else{
            result += ", ";
        }        
        result += "<span class='apiTestArgument'>"+arg.name+"</span> &#8594; "+arg.value;
    }
    result += "</li>";
    return result;
}

/**** sample json file: 
 
var allArgLists = { ....  }; //JSON data

(function(){

    var list = parseListFromJSON(allArgLists);

    for(argList in AllArgLists){
        addDataToMap();
    }      
});



***/