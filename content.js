var elements = document.getElementsByTagName('p');
var elements = document.getElementsByTagName('*');


for (var i = 0; i < elements.length; i++) {
   var element = elements[i];
   console.log( element );
element.style.setProperty('border','solid 1px white');

var r = 255; //Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);
var c = "rgb(" + r + "," + g + "," + b + ")";

element.style.setProperty('background-color',c);

}

chrome.storage.sync.get({fromStored:"", toStored:""}, function(result) {

var html = document.querySelector('html');
var walker = document.createTreeWalker(html,NodeFilter.SHOW_TEXT);

var node;
while (node = walker.nextNode()) {
var re = new RegExp(result.fromStored,"gi");
node.nodeValue = node.nodeValue.replace(re,result.toStored);
node.nodeValue = node.nodeValue.replace(/hate/gi,'love');
node.nodeValue = node.nodeValue.replace(/war/gi,'peace');
node.nodeValue = node.nodeValue.replace(/ugly/gi,'beautiful');
node.nodeValue = node.nodeValue.replace(/Donald Trump/gi,'A criminal');
node.nodeValue = node.nodeValue.replace(/Trump/gi,'criminal');
node.nodeValue = node.nodeValue.replace(/Donald/gi,'A');
  }

});
