document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");

  let userData = localStorage.getItem("user");
  let target1 = document.getElementsByTagName("h2")[0];
  let target2 = document.getElementsByTagName("p")[0];
  target1.innerText += ` ${userData}`;
  target2.innerText += ` ${userData}`;

  localStorage.clear();
  sessionStorage.clear();
});
