// =======================================
// Assisten Tour
// Main JavaScript
// =======================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Fade In Body
    // ==========================

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity .8s";
        document.body.style.opacity = "1";
    }, 100);

    // ==========================
    // Auto Slider
    // ==========================

    const slider = document.querySelector(".slider-container");

    if (slider) {

        let current = 0;

        const slides = slider.querySelectorAll("img");

        function autoSlide() {

            if (slides.length === 0) return;

            current++;

            if (current >= slides.length) {
                current = 0;
            }

            slider.scrollTo({
                left: slides[current].offsetLeft,
                behavior: "smooth"
            });

        }

        setInterval(autoSlide, 3000);

    }

    // ==========================
    // Scroll Reveal
    // ==========================

    const revealElements = document.querySelectorAll(".card");

    function reveal() {

        revealElements.forEach((element) => {

            const windowHeight = window.innerHeight;

            const top = element.getBoundingClientRect().top;

            if (top < windowHeight - 80) {

                element.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();

    // ==========================
    // Button Effect
    // ==========================

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mousedown", () => {

            button.style.transform = "scale(.95)";

        });

        button.addEventListener("mouseup", () => {

            button.style.transform = "";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

});

// =======================================
// Back To Top Button
// =======================================

const backTop = document.createElement("button");

backTop.innerHTML = "↑";

backTop.id = "backTop";

document.body.appendChild(backTop);

backTop.style.position = "fixed";
backTop.style.bottom = "20px";
backTop.style.right = "20px";
backTop.style.width = "50px";
backTop.style.height = "50px";
backTop.style.border = "none";
backTop.style.borderRadius = "50%";
backTop.style.background = "#0ea5e9";
backTop.style.color = "#fff";
backTop.style.fontSize = "22px";
backTop.style.cursor = "pointer";
backTop.style.display = "none";
backTop.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";
backTop.style.transition = ".3s";
backTop.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 250) {

        backTop.style.display = "block";

    } else {

        backTop.style.display = "none";

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
