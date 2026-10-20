// Shared header, footer and countdown for every page of the Lineup Poster concept.
// Each page has <header class="nav" data-page="..."> and <footer class="footer"> placeholders.
(() => {
  const D = window.AKD;
  const nav = document.querySelector("header.nav");
  const page = nav.dataset.page;
  const links = [
    ["teams", "teams.html", "Teams"],
    ["event", "event.html", "Event"],
    ["board", "board.html", "Board"],
    ["visit", "visit.html", "Visitor info"],
    ["partners", "index.html#partners", "Partners"]
  ];
  nav.innerHTML = `
    <div class="wrap">
      <a class="home" href="index.html" aria-label="AKD home"><img src="../assets/logo-navy.png" alt="AKD"></a>
      <nav aria-label="Main">
        <ul id="navList">
          ${links.map(([key, href, label]) => `<li><a href="${href}"${key === page ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}
        </ul>
      </nav>
      <div class="nav-right">
        <button class="menu" type="button" aria-expanded="false" aria-controls="navList">Menu</button>
        <a class="btn btn-red" href="#">Get tickets</a>
      </div>
    </div>`;
  const menu = nav.querySelector(".menu"), list = nav.querySelector("#navList");
  menu.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    menu.setAttribute("aria-expanded", open);
    menu.textContent = open ? "Close" : "Menu";
  });

  const footer = document.querySelector("footer.footer");
  if (footer) footer.innerHTML = `
    <div class="wrap">
      <p class="big cond">Cleared for takeoff</p>
      <p>AKD 30.0, February 20, 2027.</p>
      <div class="btns"><a class="btn btn-navy" href="#">Get tickets</a><a class="btn btn-paper" href="${D.instagram}">Follow @uncakd</a></div>
      <p class="small">Aaj Ka Dhamaka at UNC Chapel Hill. Round 2, Lineup Poster. <a href="../index.html">All concepts</a></p>
    </div>`;

  document.querySelectorAll("[data-days]").forEach((el) => { el.textContent = D.daysUntil(); });
})();
