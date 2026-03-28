   
        //const text = "Bhoomika";
        //let index = 0;
        //function typeEffect() {
        //    if (index < text.length) {
        //        document.getElementById("typing").innerHTML += text.charAt(index);
        //        index++;
        //        setTimeout(typeEffect, 100);
            //}
        //}
     

    const typed = new Typed('#typing', {
        strings: ['Bhoomika', 'a Developer', 'a Problem Solver', 'a Tech Enthusiast'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });


    

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const target = this.getAttribute("href");
            if (target === "#") return;
            const element = document.querySelector(target);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
    
    window.onload = typeEffect;