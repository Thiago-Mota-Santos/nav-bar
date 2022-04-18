class Navbar{
    constructor(menu, navList,navLinks){
        this.menu = document.querySelector(menu);
        this.navList = document.querySelector(navList)
        this.navlinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

       this.handClick = this.handClick.bind(this);
    }

    animate(){
        this.navlinks.forEach((link,index) =>{
            link.style.animation
            ?(link.style.animation = " ")
            :(link.style.animation = `navLinkFade 0.5 ease forwards 
            ${index/7 + 0.3}s`);
        });
    }

    handClick(){
        this.navList.classList.toggle(this.activeClass);
        this.menu.classList.toggle(this.activeClass);
        this.animate();
    }

    addClickEvent(){
        this.menu.addEventListener("click", this.handClick);
    }

    init(){
        if(this.menu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new Navbar(
    ".menu",
    ".nav-list",
    ".nav-list li",
);




mobileNavBar.init();
