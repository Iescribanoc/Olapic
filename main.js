

var call = new XMLHttpRequest();
//var url = "http://photorankapi-a.akamaihd.net?version=v2.2&auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18";
var url = "http://z3photorankapi-a.akamaihd.net/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2";

call.onreadystatechange = function() {
    callReady(call);
}
call.open("GET", url, true);
call.send();


function callReady(call){
    if (call.readyState == 4 && call.status == 200) {
        var response = JSON.parse(call.responseText);
        callResponsed(response);
    }
}

var maxDisp = 6;
var numPics=0;
function callResponsed(response) {
    console.log(response);

    var pics = response.data._embedded.media;
    numPics = pics.length;

    var out2="<div id='slide0' class='slide' style='width:1px;height:212px'></div>";
    for(i = 0; i < pics.length; i++) {
        display = (i<6) ? '150' : '0';
        visible = (i<6) ? 'visibleslide' : '';
        out2 += '<div id="slide'+(i+1)+'" class="slide '+visible+'" style="width:'+display+'px;background-image: url(\''+pics[i].images.normal+'\');" onclick="openModal(\''+pics[i].share_url+'\',\''+pics[i].images.normal+'\')"></div>';
    };
    document.getElementById("slider").innerHTML = out2;
}

function moveright(){
    if(maxDisp == numPics)
        return false;

    maxDisp ++;

    var d = document.getElementById("slide"+maxDisp);
    var d2 = document.getElementById("slide"+(maxDisp-6));

    d.className = d.className + " visibleslide";
    d.style.width = "150px";
    d2.style.width = "0px";
    d2.className = "slide";
}

function moveleft(){
    if(maxDisp == 6)
        return false;

    var d = document.getElementById("slide"+maxDisp);
    var d2 = document.getElementById("slide"+(maxDisp-6));

    d2.className = d2.className + " visibleslide";
    d2.style.width = "150px";
    d.style.width = "0px";
    d.className = "slide";

    maxDisp --;
}

function openModal(url,pic){
    document.getElementById("modalView").style.display = "block";
    setTimeout(function(){ 
        document.getElementById("modalImg").style.maxHeight = "80vh";
    }, 10);
    document.getElementById("modalImg").src = pic;
    document.getElementById("modalA").href = url;
}

function closeModal(elem){
    document.getElementById("modalImg").style.maxHeight = "0px";
    setTimeout(function(){ 
        elem.style.display = 'none';
    }, 1000);
}
