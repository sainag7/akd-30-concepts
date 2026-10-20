// Shared content for the AKD 30.0 concept mockups.
// The lineup below is last season's teams, used as sample content until the 2027 lineup is announced.
window.AKD = {
  edition: "30.0",
  date: "2027-02-20",
  dateLabel: "February 20, 2027",
  venue: "John H. Gattis–Wendell Tabb Theater",
  instagram: "https://www.instagram.com/uncakd/",
  teams: [
    { name: "Texas Mohini", division: "Fusion", img: "texas-mohini.jpg" },
    { name: "GT Jadoo", division: "Fusion", img: "gt-jadoo.jpg" },
    { name: "UCB Zahanat", division: "Fusion", img: "ucb-zahanat.jpg" },
    { name: "Case Kismat", division: "Fusion", img: "case-kismat.jpg" },
    { name: "UCSC Kahaani", division: "Fusion", img: "ucsc-kahani.jpg" },
    { name: "UW Kahaani", division: "Fusion", img: "uw-kahani.jpg" },
    { name: "UCB Azaad", division: "Fusion", img: "ucb-azaad.jpg" },
    { name: "Broad Street Baadshahz", division: "Fusion", img: "broad-city-baadshahz.jpg" },
    { name: "Stanford Bhangra", division: "Bhangra", img: "stanford-bhangra.jpg" },
    { name: "Classic City Bhangra", division: "Bhangra", img: "classic-city-bhangra.jpg" },
    { name: "Birmingham Blazin' Bhangra", division: "Bhangra", img: "bbb.jpg" },
    { name: "Mehfil Mitraan Di Bhangra", division: "Bhangra", img: "mehfil-mitraan-di-bhangra.jpg" },
    { name: "Lok Naach", division: "Bhangra", img: "lok-naach.jpg" }
  ],
  // Board committees. Photos are last season's board, used as sample content.
  crew: [
    { committee: "Directors", img: "directors.jpg" },
    { committee: "Liaisons", img: "liaisons.jpg" },
    { committee: "Logistics", img: "logistics.jpg" },
    { committee: "Hospitality", img: "hospitality.jpg" },
    { committee: "Judging", img: "judging.jpg" },
    { committee: "Safety & Wellness", img: "swa.jpg" },
    { committee: "Registration", img: "registration.jpg" },
    { committee: "Marketing & Design", img: "marketing-design.jpg" },
    { committee: "Tech", img: "tech.jpg" },
    { committee: "Finance", img: "finance.jpg" },
    { committee: "Partnerships", img: "partnerships.jpg" },
    { committee: "Social", img: "social.jpg" }
  ],
  partners: [
    { name: "BUBBL'R", img: "bubblr.png" },
    { name: "Wok On Fire", img: "wokonfire.png" },
    { name: "Harris Teeter", img: "harristeeter.png" },
    { name: "Kiran", img: "kiran.png" },
    { name: "NCAAT", img: "ncaat.png" }
  ],
  food: [
    { name: "Mediterranean Deli", note: "Big portions and a fast line. Reliable for teams.", maps: "https://www.google.com/maps?q=410+W+Franklin+St,+Chapel+Hill,+NC+27516" },
    { name: "Raising Cane's", note: "Quick tenders, easy for big groups.", maps: "https://www.google.com/maps?q=101+E+Franklin+St,+Chapel+Hill,+NC+27514" },
    { name: "IP3", note: "Classic late-night pizza on Franklin.", maps: "https://www.google.com/maps?q=508+W+Franklin+St,+Chapel+Hill,+NC+27516" },
    { name: "Cosmic Cantina", note: "Burritos after rehearsal.", maps: "https://www.google.com/maps?q=118+E+Franklin+St,+Chapel+Hill,+NC" },
    { name: "Top of the Hill", note: "Downtown staple for a full team dinner.", maps: "https://www.google.com/maps?q=100+E+Franklin+St,+Chapel+Hill,+NC" },
    { name: "Kipos Greek Taverna", note: "Sit-down with shared plates.", maps: "https://www.google.com/maps?q=1800+E+Franklin+St+%2316,+Chapel+Hill,+NC+27514" }
  ],
  daysUntil() {
    const target = new Date(this.date + "T00:00:00");
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return Math.max(0, Math.round((target - now) / 86400000));
  }
};
