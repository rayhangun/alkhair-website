// Tombol Scroll to Top Button
const btn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});
