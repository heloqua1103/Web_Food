const navbar = document.querySelector('.container .navbar');
const profile = document.querySelector('.container .profile');






document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
    navbar.classList.remove('active');
}

document.querySelector('#user-menu').onclick = () => {
    navbar.classList.toggle('active');
    profile.classList.remove('active');
}

window.onscroll = () => {
    profile.classList.remove('active');
    navbar.classList.remove('active');
}

function loader(){
    document.querySelector('.loader').style.display = 'none';
 }
 
 function fadeOut(){
    setInterval(loader, 2000);
 }
 
 window.onload = fadeOut;