document.addEventListener("DOMContentLoaded", function (e) {
  const input = document.getElementById("base-input");
  const div = document.getElementById("ghost");

  input.addEventListener("focus", () => {
    div.style.display = "block";
  });
  input.addEventListener("blur", () => {
    div.style.display = "none";
  });
});
