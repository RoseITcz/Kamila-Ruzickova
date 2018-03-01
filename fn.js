var prevLink="about";
function changeLinkStyle(eleID){
    document.getElementById(eleID).style.background='white';
    document.getElementById(eleID).style.color='black';
    if (eleID != prevLink){

      document.getElementById(prevLink).style.background='#022731';
      document.getElementById(prevLink).style.color='white';
    }
    prevLink=eleID;
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
