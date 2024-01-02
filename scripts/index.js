(() => {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector(".main").style.transform
            ? "transform"
            : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

    


    
})();


gsap.fromTo(".animated-bar-1", { width: "0%" }, { duration: 1, width: "81%", ease: "power2.inOut", delay: 1.5 });
gsap.fromTo(".animated-bar-2", { width: "0%" }, { duration: 1, width: "89%", ease: "power2.inOut", delay: 1.6 });
gsap.fromTo(".animated-bar-3", { width: "0%" }, { duration: 1, width: "85%", ease: "power2.inOut", delay: 1.7 });
gsap.fromTo(".animated-bar-4", { width: "0%" }, { duration: 1, width: "91%", ease: "power2.inOut", delay: 1.8 });

gsap.to(".horizontal", {
    x: "-75%",
    scrollTrigger: {
        trigger: ".horizontal",
        scroller: ".main",
        start: "top 0",
        end: "top -200%",
        scrub: 2,
        pin: ".vert-container",        
        onUpdate: (self) => {
            const progress = self.progress.toFixed(2);


            const activeSection = Math.floor(progress * 5.5);

            gsap.to(`.horizontal .section:nth-child(${activeSection + 1})`, {  opacity: 1 });
            gsap.to(`.horizontal .section:nth-child(${activeSection + 1}) h1, .horizontal .section:nth-child(${activeSection + 1}) p`, { scale: 1 });

            gsap.to(`.horizontal .section:not(:nth-child(${activeSection + 1}))`, { opacity: 0.5 });
            gsap.to(`.horizontal .section:not(:nth-child(${activeSection + 1})) h1, .horizontal .section:not(:nth-child(${activeSection + 1})) p`, { scale: 0.8 });
        }
    }
});




const open = document.querySelector('.container-top');
const close = document.querySelector('.close');
var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
		open.addEventListener('click', () => {
			if (tl.reversed()) {
				tl.play();
			} else {
				tl.to('nav', { right: 0 })
					.to('nav', { height: '100vh' }, '-=.1')
					.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
					.to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
					.to('nav h2', { opacity: 1 }, '-=1');
			}
		});

close.addEventListener('click', () => {
	tl.reverse();
		});

        const typedSpan = document.getElementById("typed")
        const totype = ["Cyber Security Enthusiast", "Web Developer"]
        
        const delayTyping_char = 200;
        const delayErasing_text = 150;
        const delayTyping_text = 3000;
        
        let totypeIndex = 0;
        let charIndex = 0;
        
        function typeText() {
            if (charIndex < totype[totypeIndex].length) {
                typedSpan.textContent += totype[totypeIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeText, delayTyping_char);
            }
            else {
                setTimeout(eraseText, delayTyping_text);
            }
        }
        
        function eraseText() {
            if (charIndex > 0) {
                typedSpan.textContent = totype[totypeIndex].substring(0, charIndex-1);
                charIndex = charIndex-1;
                setTimeout(eraseText, delayErasing_text);
            }
            else {
                totypeIndex++;
        
                if (totypeIndex >= totype.length)
                    totypeIndex = 0;
                    setTimeout(typeText, delayTyping_text);
            }
        }
        
        window.onload = function() {
            if (totype[totypeIndex].length) setTimeout(typeText, delayTyping_text);
        }

