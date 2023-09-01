// ==UserScript==
// @name          Edus Jira Chat
// @namespace     https://github.com/klebercode/edus-jira-chat
// @version       0.1
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @description   Fix height jira chat app
// @match         https://somosedus.atlassian.net/*
// @copyright     2023+, Kleber Code
// ==/UserScript==


var refreshIntervalId = null;
var counter = 0;
var updateHeight = function() {
  if (counter <= 30) {
    counter++;
    var iframe = document.getElementsByTagName('iframe');
    iframe[0].style.height = "100%";
  } else {
    clearInterval(refreshIntervalId);
  }
};

window.onload = function(){
  var refreshIntervalId = setInterval(updateHeight, 2000);


  // //turn nodelist into an array
  // //feel free to use getElementsByTagName or something similar here
  // var div = Array.prototype.slice.call(document.querySelectorAll("div"));

  // //Array of matches
  // var matches = div.filter(filterElements);

  // console.log("............");
  // console.log(matches);

  // //Filter Function
  // function filterElements(element){
  //     return element.textContent === "Escalated";
  // }
};
