// Shared header and footer for the Air Mail concept pages.
(() => {
  const D = window.AKD;
  const nav = document.querySelector("header.nav");
  const page = nav.dataset.page;
  const home = page === "home" ? "" : "index.html";
  const links = [
    ["teams", `${home}#teams`, "Teams"],
    ["event", `${home}#event`, "Event"],
    ["apply", `${home}#apply`, "Apply"],
    ["board", "board.html", "Board"],
    ["visit", "visit.html", "Visitor info"]
  ];
  nav.innerHTML = `
    <div class="wrap">
      <a class="home" href="index.html" aria-label="AKD home"><img src="../assets/logo-brown.png" alt="AKD"></a>
      <nav aria-label="Main">
        <ul id="navList">${links.map(([k, href, label]) => `<li><a href="${href}"${k === page ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}</ul>
      </nav>
      <div class="nav-right">
        <button class="menu" type="button" aria-expanded="false" aria-controls="navList">Menu</button>
        <a class="btn btn-ink" href="#">Get tickets</a>
      </div>
    </div>`;
  const menu = nav.querySelector(".menu"), list = nav.querySelector("#navList");
  menu.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    menu.setAttribute("aria-expanded", open);
    menu.textContent = open ? "Close" : "Menu";
  });
  list.addEventListener("click", (e) => { if (e.target.tagName === "A") { list.classList.remove("open"); menu.textContent = "Menu"; } });

  const footer = document.querySelector("footer.footer");
  if (footer) footer.innerHTML = `
    <div class="airmail-edge" aria-hidden="true"></div>
    <div class="wrap inner">
      <h2 class="shaded"><span class="fill" data-text="See you on the runway">See you on the runway</span></h2>
      <p>AKD 30.0, February 20, 2027<br>John H. Gattis–Wendell Tabb Theater</p>
      <div class="btns"><a class="btn btn-ink" href="#">Get tickets</a><a class="btn btn-line" href="${D.instagram}">Follow @uncakd</a></div>
      <p class="small">Aaj Ka Dhamaka at UNC Chapel Hill. Round 3, Air Mail. <a href="../index.html">All concepts</a></p>
    </div>
    <div class="airmail-edge" aria-hidden="true"></div>`;
})();
