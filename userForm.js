/*
This scrpit covers User forms
*/

function displayName()  {
    //document object refers to html, get element id is a method that locates the element
    let welcomPara = document.getElementById('welcome');
    let name = document.getElementById('userID').value; //value methods get the actuall value

    welcomPara.innerHTML = `Welcome ${name}`; //inner html refers to code within the tags: <tag>innerHTML</tag> 
}