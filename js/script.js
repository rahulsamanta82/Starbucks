function imgSlider(anything){
  document.querySelector('.starbucks').src = anything;
}

  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

