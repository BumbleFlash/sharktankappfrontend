
var url = "https://sharktankapp.herokuapp.com/data/getFilteredData";
console.log(sessionStorage.season);


var json  = {
  "season":sessionStorage.season,
  "episode":sessionStorage.episode,
  "investor":sessionStorage.investor,
  "amount":sessionStorage.amount,
  "gender":sessionStorage.gender
  
};
$(document).ready(function(){
$.ajax({
	url:url,
	dataType:"json",
    type:"POST",
    contentType:'application/json',
    data: JSON.stringify(json),
    cache:false,
    success:function(data){
    	var eventData="";
    	var investors="";
        $.each(data,function(i,res){
           eventData+="<tr>";
           eventData+="<td>"+res.Season+"</td>"
           eventData+="<td>"+res.episode+"</td>"
           if(res.Corcoran=="1")
           	investors+="Corcoran, ";
           if(res.Cuban=="1")
           	investors+="Cuban, ";
           if(res.Griener=="1")
           	investors+="Griener, ";
           if(res.Herjavec=="1")
           	investors+="Herjavec, ";
           if(res.John=="1")
           	investors+="John, ";
           if(res.Oleary=="1")
           	investors+="Oleary, ";
           if(res.Harrington=="1")
           	investors+="Harrington, ";
           if(res.Guest=="1")
           	investors+="Guest, ";
           investors=investors.slice(0,-2);
           if(investors.length==0)
           	investors = "NIL";
           eventData+="<td>"+investors+"</td>"
           eventData+="<td>"+res.Amount+"</td>"
           eventData+="<td>"+res.Company+"</td>"
           eventData+="<tr>";
           investors="";

        });
        console.log(eventData);
        $("#table").append(eventData);

    },
    error:function(d){
    	alert("WAIT");
    }
});
});
