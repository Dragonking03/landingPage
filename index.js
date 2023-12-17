let Theme = document.getElementById("Theme");
Theme.onclick=function(){
    document.body.classList.toggle("dark_mode");
    if(document.body.classList.contains("dark_mode")){
        Theme.src="sun.png"
        document.getElementById("custom-color").style.color = "white";
    }
    else{
        Theme.src="moon.jpeg"
        document.getElementById("custom-color").style.color = "black";
    }
}
