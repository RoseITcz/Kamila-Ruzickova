var prevLink="about";
var profileFlag=true;
function changeLinkStyle(eleID){
    document.getElementById(eleID).style.background='white';
    document.getElementById(eleID).style.color='black';
    if (eleID != prevLink){
      document.getElementById(prevLink).style.background='rgba(255,255,255,0.75)';
      document.getElementById(prevLink).style.color='black';
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
function renderPublicationsCZ() {
     document.getElementById("here").innerHTML='<object type="text/html" data="pages/publications_cze.html" ></object>';
     changeLinkStyle("publicationsCZ");
}
function renderNavigation() {
     document.getElementById("here").innerHTML='<object type="text/html" data="pages/navigation.html" ></object>';
     changeLinkStyle("navigation");
}
///////profile()
function profile(){
  if(profileFlag==true){
    document.getElementById("profile").style.width='76vw';
    profileFlag=false;
  }
  else{
    document.getElementById("profile").style.width='0vw';
    profileFlag=true;
  }
}
