let menu = document.querySelector("#menu-icon");
        let navbar = document.querySelector(".navbar");


        menu.onclick = () => {

            menu.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        }


        const sr = ScrollReveal ({

            distance: "80px",
            duration: 1000,
            reset: true

        })

        sr.reveal (".text,.social,.center,.resume-content,.edu-content,.hobby-content",{delay:300, origin:"bottom"})