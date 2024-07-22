const dropdownButton = document.getElementById("dropdown");
const menu = document.getElementById("menu");
let menuShowed = false;
dropdownButton.onclick = showMenu;

const menuItems = document.querySelectorAll(".menuItem");
allMenuItems();
aboutMenu();

function aboutMenu(){
    let menuShowed = false;
    const about = document.getElementById("about");
    const aboutDropdown = document.getElementById("aboutDropdown");
    about.onclick = showAboutMenu;

    function showAboutMenu(){
        if(menuShowed === false){
            aboutDropdown.style.display = "flex";
            menuShowed = true;
        } else {
            aboutDropdown.style.display = "none";
            menuShowed = false;
        }
    }
}

function allMenuItems(){
    for(let i = 0; i < menuItems.length; i++){
        menuItems[i].addEventListener("mouseover", function(){
            hoverMenu(menuItems[i]);
        });

        menuItems[i].addEventListener("mouseout", function(){
            notHoverMenu(menuItems[i]);
        });
    }
}

function showMenu(){
    
    if (menuShowed === false){
        menu.style.display = "flex";
        dropdownButton.innerText = "Close Menu";
        menuShowed = true;
    } else {
        menu.style.display = "none";
        dropdownButton.innerText = "Menu";
        menuShowed = false;
    }

}

function hoverMenu(menuItem){
    menuItem.innerText += " >";
}

function notHoverMenu(menuItem){
    menuItem.innerText = menuItem.innerText.slice(0, -2); //Removes last character
}