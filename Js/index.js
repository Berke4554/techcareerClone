const popoverTrigger = new bootstrap.Popover(
  document.getElementById("popoverButton")
);

// Hover olayı için event listener ekliyoruz
document
  .getElementById("popoverButton")
  .addEventListener("mouseover", function () {
    popoverTrigger.show(); // Hover ile popover'ı açıyoruz
  });

document
  .getElementById("popoverButton")
  .addEventListener("mouseout", function () {
    popoverTrigger.hide(); // Hover'dan çıktığında popover'ı kapatıyoruz
  });

//! SCROLL BTN CODE
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
