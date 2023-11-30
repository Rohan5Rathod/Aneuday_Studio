// TEXT ANIMATION WITH SCROLL UP 

function textAnimation(){
  const splitTypes = document.querySelectorAll("[data-animation='text-reveal']");

splitTypes.forEach((element, i)=>{
    const text = new SplitType(element,{ types: "words" });
    const words = text.words;
    
    words.forEach((word)=>{
        const wordText = new SplitType(word, { types: 'words' });

         // Set initial state for each word
         gsap.set(wordText.words,{y:"100%"});

          // Animate each word
          gsap.to(wordText.words, {
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'top 20%',
            },
            y: '0%',
            duration: 1.8,
            stagger: 0.2,
            ease: 'back.out',
          });
    })
})
}

textAnimation()

// BUTTON ANIMATION WITH SCALE 
function buttonAnimation() {
  // Select all buttons with the attribute data-animation='button'
  const buttons = document.querySelectorAll("[data-animation='button']");
  console.log(buttons);

  // Loop through each button
  buttons.forEach((btn, i) => {
    const text = btn.querySelector('span');
    const textWrapper = text.querySelector('span span');
    const icon = btn.querySelector('svg');

    // Initial animation timeline
    const initialTimeline = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: 'power3',
      },
    });

    initialTimeline
      .to(btn, { scale: 1 })
      .to(text, { width: 'auto' }, '-=0.3')
      .to(textWrapper, { transform: 'translateY(0)' }, '-=0.3')
      .to(icon, { width: 'auto', transform: 'translateX(0)', opacity: 1 }, '-=0.3');

    // Set up ScrollTrigger for the initial animation
    ScrollTrigger.create({
      trigger: btn,
      start: 'top 80%',
      end: 'top 20%',
      once: true, // Play the animation only once
      animation: initialTimeline,

    });
  });
}

buttonAnimation();

const NavTime4 = gsap.timeline({ paused: true });
NavTime4.to(".social_media_white_text_scroll .social_media_scroll", {
  duration:0.5,
  y: "-100%",
  opacity: 0,
  ease: "power4",
  stagger:0.2
})
