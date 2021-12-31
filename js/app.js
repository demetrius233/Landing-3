const hero = document.querySelector(".hero");
const contentImages = document.querySelector(".content-images");
const contentAction = document.querySelector(".content-action");
const theme = document.querySelector(".theme");
const btnBurger = document.querySelector(".menu-burger");

btnBurger.addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector(".navegacion").classList.toggle("active");
});

const imageAction = [...document.querySelectorAll(".imageAction")];
const imageMove = [...document.querySelectorAll(".img-move")];

const renderStars = (element) => {
  for (let i = 1; i <= 200; i++) {
    const particula = document.createElement("span");
    particula.className = "particulas";

    const x = Math.floor(Math.random() * innerWidth);
    const y = Math.floor(Math.random() * innerHeight);
    let duration = Math.random() * 10;
    let size = Math.random() * 3;

    particula.style.left = x + "px";
    particula.style.top = y + "px";

    particula.style.width = 1 + size + "px";
    particula.style.height = 1 + size + "px";

    particula.style.animationDuration = 3 + duration + "s";
    particula.style.animationDelay = duration + "s";

    element.appendChild(particula);
  }
};

renderStars(hero);
renderStars(contentAction);
renderStars(theme);

hero.addEventListener("mouseover", (e) => {
  imageMove.map((img) => {
    img.style.transform = `translateX(${e.clientX / 8 - 100}px) translateY(${
      e.clientY / 5 - 100
    }px)`;
  });
  console.log(e);
});

const actionAnimationsmouseOver = () => {
  const btnTapOff = document.querySelector(".btnTapOff img");
  const btnSlideOff = document.querySelector(".btnSlideOff img");
  const btnChargeOff = document.querySelector(".btnChargeOff img");
  const btnDashOff = document.querySelector(".btnDashOff img");

  const btnTap = document.querySelector(".btnTap img");
  const btnSlide = document.querySelector(".btnSlide img");
  const btnCharge = document.querySelector(".btnCharge img");
  const btnDash = document.querySelector(".btnDash img");

  /*  */

  btnTapOff.addEventListener("mouseover", () => {
    btnTapOff.setAttribute("src", "./assets/img/btn-tap-on.png");

    imageAction.forEach((img) => {
      img.classList.remove("animateIn");
    });

    btnTap.classList.add("animateIn");
  });

  btnSlideOff.addEventListener("mouseover", () => {
    btnSlideOff.setAttribute("src", "./assets/img/btn-slide-on.png");

    imageAction.forEach((img) => {
      img.classList.remove("animateIn");
    });

    btnSlide.classList.add("animateIn");
  });

  btnChargeOff.addEventListener("mouseover", () => {
    btnChargeOff.setAttribute("src", "./assets/img/btn-charge-on.png");

    imageAction.forEach((img) => {
      img.classList.remove("animateIn");
    });

    btnCharge.classList.add("animateIn");
  });

  btnDashOff.addEventListener("mouseover", () => {
    btnDashOff.setAttribute("src", "./assets/img/btn-dash-on.png");

    imageAction.forEach((img) => {
      img.classList.remove("animateIn");
    });

    btnDash.classList.add("animateIn");
  });
};

const actionAnimationsmouseLeave = () => {
  const btnTapOff = document.querySelector(".btnTapOff img");
  const btnSlideOff = document.querySelector(".btnSlideOff img");
  const btnChargeOff = document.querySelector(".btnChargeOff img");
  const btnDashOff = document.querySelector(".btnDashOff img");

  btnTapOff.addEventListener("mouseout", () => {
    btnTapOff.setAttribute("src", "./assets/img/btn-tap-off.png");
  });

  btnSlideOff.addEventListener("mouseout", () => {
    btnSlideOff.setAttribute("src", "./assets/img/btn-slide-off.png");
  });

  btnChargeOff.addEventListener("mouseout", () => {
    btnChargeOff.setAttribute("src", "./assets/img/btn-charge-off.png");
  });

  btnDashOff.addEventListener("mouseout", () => {
    btnDashOff.setAttribute("src", "./assets/img/btn-dash-off.png");
  });
};

actionAnimationsmouseOver();
actionAnimationsmouseLeave();
