function scrollToId(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const sections = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.25 });

sections.forEach(section => observer.observe(section));