let urlSeasons = "https://sharktankapp.herokuapp.com/data/getDistinctSeasons"
let urlEpisodes = "https://sharktankapp.herokuapp.com/data/getDistinctEpisodes";
let urlAmount = "https://sharktankapp.herokuapp.com/data/getDistinctAmount";
var selectSeason = $('#season');
var selectEpisode= $('#episode');
var selectAmount = $('#amount');
$.ajax({
   type: "GET",
   url: urlSeasons,
    datatype:"json",
    crossDomain : true,
    success:function (data) {
        var dataValue = data;
        var res = dataValue;
        contentType: "application/json;";
        $.each(res,function (i,res) {
            console.log(res.season);
             var season = res.season;
             if(season.length<=0)
                season = "No Filter";
             selectSeason.append("<option value='" + season + "'>" + season + "</option>")
        })
    }
});
$.ajax({
    type: "GET",
    url: urlEpisodes,
    datatype:"json",
    crossDomain : true,
    success:function (data) {
        var dataValue = data;
        var res = dataValue;
        contentType: "application/json;";
        $.each(res,function (i,res) {
            console.log(res.episode);
            var episode = res.episode;
             if(episode.length<=0)
                episode = "No Filter";
            selectEpisode.append("<option value='" + episode + "'>" + episode + "</option>");
        })
    }
});
$.ajax({
    type: "GET",
    url: urlAmount,
    datatype:"json",
    crossDomain : true,
    success:function (data) {
        var dataValue = data;
        var res = dataValue;
        contentType: "application/json;";
        $.each(res,function (i,res) {
            console.log(res.amount);
            var amount = res.amount;
             if(amount.length<=0)
                amount = "No Filter";
            selectAmount.append("<option value='" + amount + "'>" + amount + "</option>");
        })
    }
});
$("#submit").click(function(){
    var s = document.getElementById("season")
   sessionStorage.season = s.options[s.selectedIndex].text;
    var e = document.getElementById("episode")
   sessionStorage.episode = e.options[e.selectedIndex].text;
   var i = document.getElementById("investor")
   sessionStorage.investor = i.options[i.selectedIndex].text;
   var g = document.getElementById("gender")
   sessionStorage.gender = g.options[g.selectedIndex].text;
    var a = document.getElementById("amount")
   sessionStorage.amount = a.options[a.selectedIndex].text;


    //window.location.replace("/table.html");
});