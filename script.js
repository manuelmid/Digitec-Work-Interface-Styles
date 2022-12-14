(function() {

    var box = document.getElementById("controller");
    var main = document.getElementById("main");
    var menuBox = document.getElementById('fixed');
    var mainContent = document.getElementById("main_content");
    var mainBox = document.getElementById("scrollable");
    var sideBar = document.getElementById("side");
    var inputs = document.querySelectorAll("input");

    //BODY STYLES
        box.style.backgroundColor = "rgb(0 84 166 / 30%)";
        menuBox.style.backgroundColor = "rgb(0 84 166 / 30%)";
        mainContent.childNodes[1].style.display = "flex";
        sideBar.style.position = "unset";
        main.style.position = "initial";
        mainBox.style = "display: flex;flex-direction: column;flex-wrap: nowrap;align-items: center;";

        //SIZES
            box.style.width = "900px";
            mainContent.style.width = "880px";
            mainContent.childNodes[1].width = "860px";
        //SIZES

        //document.body.style.backgroundImage = "url(https://bestof.nyc3.digitaloceanspaces.com/devsnap.me/sam/svg-and-css-squiggly-pattern.gif)";
        document.body.style.background = "radial-gradient(circle, rgba(7,144,172,1) 0%, rgba(9,9,121,1) 62%, rgba(2,0,36,1) 100%)";
    //BODY STYLES

    //BUTTONS

    enlarge();

    function enlarge(){
        var botones = document.querySelectorAll("button");
        
        for( let i = 0 ; i < botones.length; i++ ){
            botones[i].style = " width: 100px; height: 100px; text-align: center; background-image: url(); font-size: 20px; ";
        }
        //setTimeout(enlarge, 1000);
    }
    //BUTTONS

})();