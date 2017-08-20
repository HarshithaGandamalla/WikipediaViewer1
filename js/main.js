var f=document.getElementById('form1');

f.addEventListener('focus',function(){
   f.classList.add("onFocus"); 
});

f.addEventListener('blur',function(){
    f.classList.remove('onFocus');
    f.classList.add('offFocus'); 

});

document.getElementById('random').addEventListener('click',function(){
    window.open("https://en.wikipedia.org/wiki/Special:Random");   
});

f.addEventListener('keyup',function(e){
     
     if(!e) var e=window.event; //for IE
    

     if(e.which == 13)
        {
            e.preventDefault();
            var script=document.createElement("script");
            script.src="https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+f.value+"&callback=JSON_CALLBACK";
            document.head.appendChild(script);
        }
    
});




  function JSON_CALLBACK(apiResult){
         
    var display=document.getElementById("display-result");

      while(display.firstChild){
      display.removeChild(display.firstChild);
    }
      
     var results=apiResult.query.pages;
     for (var key in results) {
     // skip loop if the property is from prototype
     //if (!results.hasOwnProperty(key)) continue;
          
       var obj = results[key];
       var url='https://en.wikipedia.org/?curid='+obj.pageid;

       var anchor=document.createElement('a');
       anchor.href=url;
         
       var newdiv="<div><strong>"+obj.title+"</strong><br>"+obj.extract+"</div>";
       anchor.innerHTML=newdiv;

       display.appendChild(anchor); 
    
    }
                   
      
     
  }

