$(function(){
    $(".subNav").click(function(){
        $(this).toggleClass("currentDd").siblings(".subNav").removeClass("currentDd");
        $(this).toggleClass("currentDt").siblings(".subNav").removeClass("currentDt");
        $(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(500);
    })  
})
function convert(num){

return String(num).replace(/\d/g,function(x){
return convert.stringList[x]
})

}
convert.stringList="零一二三四五六七八九";
convert(225554455555);

function sel(item) {
	var oItem = document.getElementById(item);
	var oUl = oItem.getElementsByTagName('ul')[0]
	var aLi = oUl.getElementsByTagName('li');
	var oSpan = oItem.getElementsByTagName('span')[0];
	//鼠标移入
	oItem.onmouseover = function() {
		oUl.style.display = 'block';
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].index = i;
			aLi[i].onmouseover = function() {
				this.style.background = '#fff6d3';
				this.style.color = '#e77802';
			}
			aLi[i].onmouseout = function() {
				this.style.background = 'none';
				this.style.color = '#666';
			}
			aLi[i].onclick = function() {
		    oSpan.innerHTML = this.innerHTML;
			oUl.style.display = 'none';
			
				
			}
		}

	}
	oItem.onmouseout = function() {
		oUl.style.display = 'none';
	};
};
sel("selectpronvice");
sel("selectcity");
sel("selectarea");

