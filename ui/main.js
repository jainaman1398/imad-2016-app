console.log('Loaded!');

var img=document.getElementById('aj2');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+80;
    img.style.margintop=marginLeft+'px';
    
}
img.onclick=function()
{
    var interval=setInterval(moveRight,1);
};
var counter=0;
var button=document.getElementById("button");
button.onclick=function(){
    counter=counter+1;

var span=document.getElementById("span");
span.innerHtml=counter.toString();

};