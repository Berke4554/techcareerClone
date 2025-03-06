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
