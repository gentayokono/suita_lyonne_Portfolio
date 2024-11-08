



//   const movelyonne = (entries) => {
//     const keyframes = {
//       opacity: [0, 1],
//       translate:['0 300px', 0],
//     };
//     const options = {
//       duration:2000,
//       delay: 500,
//       easing: 'ease',
//     };
//     entries[0].target.animate(keyframes,options);
//   };
  
//   const lyonneobserver = new IntersectionObserver(movelyonne);
//   lyonneobserver.observe(document.querySelector('#menber'));




// const movelyonne1 = (entries) => {
//   const keyframes = {
//     opacity: [0, 1],
//     translate:['0 300px', 0],
//   };
//   const options = {
//     duration:2000,
//     delay: 500,
//     easing: 'ease',
//   };
//   entries[0].target.animate(keyframes,options);
// };

// const lyonneobserver1 = new IntersectionObserver(movelyonne);
// lyonneobserver1.observe(document.querySelector('#menber-a'));




// const movelyonne2 = (entries,) => {
//   const keyframes = {
//     opacity: [0, 1],
//     translate:['0 300px', 0],
//   };
//   const options = {
//     duration:2000,
//     delay: 1000,
//     easing: 'ease',
//   };
//   entries[0].target.animate(keyframes,options);
// };

// const lyonneobserver2 = new IntersectionObserver(movelyonne);
// lyonneobserver2.observe(document.querySelector('#menber-b'));





const movelyonne = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const keyframes = {
        opacity: [0, 1],
        translate: ['0 300px', 0],
      };
      const options = {
        duration: 2000,
        easing: 'ease',
      };
      entry.target.animate(keyframes, options);
      observer.unobserve(entry.target); // アニメーションが実行された後、監視を停止
    }
  });
};

const lyonneobserver = new IntersectionObserver(movelyonne);
lyonneobserver.observe(document.querySelector('#menber'));

const movelyonne1 = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const keyframes = {
        opacity: [0, 1],
        translate: ['0 300px', 0],
      };
      const options = {
        duration: 2000,

        easing: 'ease',
      };
      entry.target.animate(keyframes, options);
      observer.unobserve(entry.target);
    }
  });
};

const lyonneobserver1 = new IntersectionObserver(movelyonne1);
lyonneobserver1.observe(document.querySelector('#menber-a'));

const movelyonne2 = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const keyframes = {
        opacity: [0, 1],
        translate: ['0 300px', 0],
      };
      const options = {
        duration: 2000,

        easing: 'ease',
      };
      entry.target.animate(keyframes, options);
      observer.unobserve(entry.target);
    }
  });
};

const lyonneobserver2 = new IntersectionObserver(movelyonne2);
lyonneobserver2.observe(document.querySelector('#menber-b'));












// const showlyonne = (entries,obs) => {
//   const keyframes = {
//     opacity:[0,1],
//     translate:['0 200px',0],
//   };

//   const options = {
//     duration: 2300,
//     easing: 'ease',
//   };
//   entries[0].target.animate(keyframes,options);
//   obs.unobserve(entries[0].target);
// };

// const lyonneobserver = new IntersectionObserver(showlyonne);
// lyonneobserver.observe(document.querySelector('#menbers'));




// const lyonne = (entries,obs) => {
//   const keyframes = {
//     opacity:[0,1],
//     translate:['0 500px',0],
//   };

//   const options = {
//     duration: 3000,
//     Delay: 500,
//     easing: 'ease',
//   };

//   entries[0].target.animate(keyframes,options);
//   obs.unobserve(entries[0].target);
// };

// const aobserver = new IntersectionObserver(lyonne);
// aobserver.observe(document.querySelector('#menbers-a'));




// const show = (entries,obs) => {
//   const keyframes = {
//     opacity:[0,1],
//     translate:['0 500px',0],
//   };

//   const options = {
//     duration: 3000,
//     delay:1000,
//     easing: 'ease',
//   };

//   entries[0].target.animate(keyframes,options);
//   obs.unobserve(entries[0].target);
// };

// const bobserver = new IntersectionObserver(show);
// bobserver.observe(document.querySelector('#menbers-b'));