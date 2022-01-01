const hero = document.querySelector(".hero");
const contentImages = document.querySelector(".content-images");
const contentAction = document.querySelector(".content-action");
const theme = document.querySelector(".theme");
const btnBurger = document.querySelector(".menu-burger");

/* btnBurger.addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector(".navegacion").classList.toggle("active");
}); */

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
  /* imageMove.map((img) => {
    img.style.transform = `translateX(${e.clientX / 8 - 100}px) translateY(${
      e.clientY / 5 - 100
    }px)`;
  }); */

  imageMove.map((img) => {
    let x = img.getBoundingClientRect().left + img.clientWidth / 2;
    let y = img.getBoundingClientRect().top + img.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 90;
    img.style.transform = `translateX(${rot - 100}px)`;
    // img.style.transform = `translateY(${y}px)`;

    /* let x = e.offsetX / 2;
    let y = e.offsetY / 2;
    img.style.left = `${x}px`;
    img.style.top = `${y}px`; */

    /*  let x = e.offsetX / 2 - 350;
    let y = e.offsetY / 2 - 200;
    img.style.transform = `translateX(${x}px) translateY(${y}px)`; */
  });
});

const actionAnimationsmouseOver = () => {
  const btnTapOff = document.querySelector(".btnTapOff");
  const btnSlideOff = document.querySelector(".btnSlideOff");
  const btnChargeOff = document.querySelector(".btnChargeOff");
  const btnDashOff = document.querySelector(".btnDashOff");

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
    imageAction.forEach((img) => {
      img.classList.remove("animateIn");
    });

    btnSlide.classList.add("animateIn");
  });

  btnChargeOff.addEventListener("mouseover", () => {
    imageAction.forEach((img) => {
      img.classList.remove("animateIn");
    });

    btnCharge.classList.add("animateIn");
  });

  btnDashOff.addEventListener("mouseover", () => {
    imageAction.forEach((img) => {
      img.classList.remove("animateIn");
    });

    btnDash.classList.add("animateIn");
  });
};

const actionAnimationsmouseLeave = () => {
  const btnTapOff = document.querySelector(".btnTapOff");
  const btnSlideOff = document.querySelector(".btnSlideOff");
  const btnChargeOff = document.querySelector(".btnChargeOff");
  const btnDashOff = document.querySelector(".btnDashOff");

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

document.getElementById("fecha").innerHTML = new Date().getFullYear();
