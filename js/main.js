$('#form1').focus(function(){
    $("#form1").addClass("onFocus");
});

$('#form1').blur(function(){
    $("#form1").addClass("offFocus");
});

$('h1#random').on('click',function(){
    window.open("https://en.wikipedia.org/wiki/Special:Random");   
});

$('#form1').keyup(function(e){
     

     if(e.which == 13)
        {

            e.preventDefault();
            $.ajax({
                url: 'http://en.wikipedia.org/w/api.php?exintro&explaintext',
                data: { action: 'query', generator:'search', gsrsearch: $("input#form1").val(), format: 'json',gsrnamespace:0,gsrlimit:10,prop:'pageimages|extracts',pilimit:'max',exsentences:1,exlimit:'max'
                },
                dataType: 'jsonp',
                success: processResult
            });
        }
});




  function processResult(apiResult){
                
                       $("div#display-result").empty();
      
                       var results=apiResult.query.pages;
                
                       console.log(results);
                      $.each(results,function(i,val){
                       var url='https://en.wikipedia.org/?curid='+val.pageid;
                       var newdiv="<div id="+i+"><strong>"+val.title+"</strong><br>"+val.extract+"</div>";
                       
                         $("div#display-result").append("<a href="+url+">"+newdiv+"</a><br>");      

                     
                          
                         
                   });
      
     
  }

