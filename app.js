const sections = document.querySelectorAll('.section');// target all the section elements in index page
const sectionBtns = document.querySelectorAll('.controls');// target all the section buttons in index page Parent element
const sectionBtn = document.querySelectorAll('.control');// target all the section buttons in index page
const allSections = document.querySelectorAll('.main-content');// target all the section elements in index page

//btn click event when active section is clicked 
function PageTransition(){
    for(let i = 0; i < sectionBtn.length; i++){
        sectionBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelector('.active-btn');// target the active button
            currentBtn.classList.remove('active-btn');// remove active class from current button
            this.classList.add('active-btn');// add active class to the clicked button
        });
    }
    //section transition
    for(let i = 0; i < sectionBtn.length; i++){
        sectionBtn[i].addEventListener('click', function(){
            let currentSection = document.querySelector('.active');// target the active section
            currentSection.classList.remove('active');// remove active class from current section
            sections[i].classList.add('active');// add active class to the clicked section
        });
    }
    


}

PageTransition();