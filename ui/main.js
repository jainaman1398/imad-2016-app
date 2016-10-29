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

