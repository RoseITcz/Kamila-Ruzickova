var prevLink="home";
function changeLinkStyle(eleID){
    document.getElementById(eleID).style.background='#61dafb';
    document.getElementById(eleID).style.color='black';
    document.getElementById(prevLink).style.background='#022731';
    document.getElementById(prevLink).style.color='white';
    //alert(eleID);
    //alert(prevLink);
    if (eleID != prevLink){
      prevLink=eleID;
    }
}

//Rendering MENU
function renderHome() {
     document.getElementById("here").innerHTML='<object type="text/html" data="pages/home.html" ></object>';
     changeLinkStyle("home");
}
function renderAbout() {
     document.getElementById("here").innerHTML='<object type="text/html" data="pages/about.html" ></object>';
     changeLinkStyle("about");
}
function renderCV() {
     document.getElementById("here").innerHTML='<object type="text/html" data="pages/cv.html" ></object>';
     changeLinkStyle("cv");
}
function renderPublications() {
     document.getElementById("here").innerHTML='<object type="text/html" data="pages/publications.html" ></object>';
     changeLinkStyle("publications");
}
function renderNavigation() {
     document.getElementById("here").innerHTML='<object type="text/html" data="pages/navigation.html" ></object>';
     changeLinkStyle("navigation");
}
