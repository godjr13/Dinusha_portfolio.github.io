AOS.init();
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function readMore() {
  var btn = document.getElementById("readmore");
  var more = document.getElementById("more");

  if (more.style.display === "none" || more.style.display === "") {
    more.style.display = "inline";
    btn.innerHTML = "Read less";
  } else {
    more.style.display = "none";
    btn.innerHTML = "Read more...";
  }
}

