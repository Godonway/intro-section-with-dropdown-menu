const show_link_box = document.getElementById('link_box');
const nav_feature_links = document.getElementById('nav_feature_links');
const nav_company_links = document.getElementById('nav_company_links');



nav_feature_links.addEventListener('click',()=>{
  show_link_box.classList.toggle('link_box1');
})

nav_company_links.addEventListener('click',()=>{
  show_link_box.classList.toggle('link_box2');
})




// js for toggle button

const navToggle = document.getElementById('nav_toggle'),
navClose = document.getElementById('nav_close')
// navMenu = document.getElementById('nav_menu')

if(navToggle){
  navToggle.addEventListener('click',()=>{
    show_link_box.classList.add('show_menu');
  })
}

if(navClose){
  navClose.addEventListener('click',()=>{
    show_link_box.classList.remove('show_menu')
  })
}