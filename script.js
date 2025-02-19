const slides = document.querySelectorAll(".slide");
    let index = 0;

    function showNextSlide() {
        let current = index;
        let next = (index + 1) % slides.length; // Loop through slides

        slides.forEach((slide, i) => {
            slide.classList.remove("active", "previous"); // Reset classes
        });

        slides[current].classList.add("previous"); // Keep old image slightly visible
        slides[next].classList.add("active"); // Show next image

        index = next;
    }

    setInterval(showNextSlide, 3000); // Change every 3 seconds
    
    let lastScrollTop = 0; // Track last scroll position

    function revealImages() {
        const images = document.querySelectorAll(".grid-item");
        const triggerBottom = window.innerHeight * 0.9;
        let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) { // Only animate if scrolling down
            images.forEach(image => {
                const imageTop = image.getBoundingClientRect().top;

                if (imageTop < triggerBottom) {
                    image.classList.add("visible"); // Reveal image
                    image.classList.remove("reset"); // Remove reset class
                }
            });
        } else { 
            images.forEach(image => {
                const imageBottom = image.getBoundingClientRect().bottom;
                if (imageBottom > window.innerHeight) {
                    image.classList.add("reset"); // Reset animation when off-screen
                    image.classList.remove("visible");
                }
            });
        }

        lastScrollTop = currentScrollTop; // Update last scroll position
    }

    window.addEventListener("scroll", revealImages);
    revealImages(); // Run once on page load

    
    document.getElementById("infoButton").addEventListener("click", function () {
        document.getElementById("infoOverlay").style.opacity = "1";
        document.getElementById("infoOverlay").style.visibility = "visible";
      });
      
      document.getElementById("closeButton").addEventListener("click", function () {
        document.getElementById("infoOverlay").style.opacity = "0";
        document.getElementById("infoOverlay").style.visibility = "hidden";
      });