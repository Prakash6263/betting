

    /* Filter buttons */

    document.querySelectorAll('.filter-btn').forEach(btn => {

    btn.addEventListener('click',function(){

    document.querySelectorAll('.filter-btn')
    .forEach(b=>b.classList.remove('active'));

    this.classList.add('active');

    });

    });


    /* Navbar scroll */

    window.addEventListener('scroll',function(){

    const nav=document.querySelector('.navbar');

    if(window.scrollY>60){

    nav.style.background='rgba(3,8,6,.97)';

    }else{

    nav.style.background='rgba(3,8,6,.82)';

    }

    });

    