
function myFunction() {

    var image = document.getElementById('icon');
    if (image.src.match("./images/sun.png")) {
        image.src = "./images/moon.png";
        var wrapper = document.querySelectorAll(".change-bg");
        wrapper[0].style.backgroundColor = "white";
       
       
        var links = document.querySelectorAll(".link");
        for(var i = 0;i<links.length;i++){
            links[i].style.color ="black";
        }

        
        var x = document.querySelectorAll(".black-color");
        for (var i = 0; i < x.length; i++) {
            x[i].style.color = "black";
        }

        var adminName = document.querySelectorAll(".admin-name");
        for (var i = 0; i < adminName.length; i++) {
            adminName[i].style.color = "#3D405B";
        }
      
        var yt_link = document.querySelectorAll(".yt-link");
        yt_link[0].style.color= "blue";
       
    }
    else {
        image.src = "./images/sun.png";
        var wrapper = document.getElementsByClassName("change-bg");
        wrapper[0].style.backgroundColor = " rgb(34, 34, 34)";
        var element = document.getElementsByClassName("link");
        var adminName = document.getElementsByClassName("admin-name");
        var black_color = document.getElementsByClassName("black-color");

        for (var i = 0; i < element.length; i++) {
            element[i].style.color = "white";
        }
        for (var i = 0; i < adminName.length; i++) {
            adminName[i].style.color = "white";
        }
        for (var i = 0; i < black_color.length; i++) {
            black_color[i].style.color = "white";
        }

        


    }

       


}