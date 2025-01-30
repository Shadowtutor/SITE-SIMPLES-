'use strict'
const switcher = document.querySelector('.btn');
    switcher.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
        this.textContent = document.body.classList.contains('light-theme')? 'Dark' :'Light';
        /*var className=document.body.className;*/
        /*if(document.body.classList.contains('light-theme')) {
            this.textContent="Dark";
        } else { 
            this.textContent = "Light";
        }*/
    console.log('current class name:'+document.body.className);

    });