window.addEventListener("DOMContentLoaded", () => {
  const $sidenav = document.querySelector(".sidenav");
  const $sidenavEntry = document.querySelector(".sidenav-entry");
  $sidenavEntry.addEventListener("click", () => {
    $sidenav.classList.remove("hide");
  });

  window.addEventListener("click", () => {
    if (!$sidenav.classList.contains("hide")) {
      $sidenav.classList.add("hide");
    }
  });

  $sidenavEntry.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  $sidenav.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
