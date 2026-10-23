const standaloneProjects = {
  "project-one": "projects/bound-by-death.html",
  "project-two": "projects/project-two.html",
  "project-three": "projects/project-three.html"
};

const pages = [...document.querySelectorAll("[data-page]")];
const navLinks = [...document.querySelectorAll("[data-route]")];
const sectionName = document.getElementById("currentSection");
const sidebar = document.getElementById("sidebar");
const scrim = document.getElementById("mobileScrim");

const names = {
  home: "OVERVIEW",
  "level-design": "LEVEL DESIGN",
  projects: "GAME PROJECTS",
  "game-jams": "GAME JAMS",
  breakdowns: "VIDEO BREAKDOWNS",
  about: "ABOUT ME",
  contact: "CONTACT",
  "project-detail": "PROJECT NOTES"
};

const projectNotes = {
  layout: {
    eyebrow: "LEVEL DESIGN / 001",
    title: "Layout & <em>Player Flow.</em>",
    lead: "A case study about readable spaces, sightlines and the rhythm of moving through a level.",
    goal: "Explain the player experience you wanted to create. What should the player notice first? Where should they go next, and why?",
    process: "Describe your blockout, how you used landmarks and routes, what you tested, and the feedback that changed your layout.",
    learning: "Show what improved between iterations. Include screenshots, a top-down map or a short gameplay clip to support your analysis."
  },
  guidance: {
    eyebrow: "LEVEL DESIGN / 002",
    title: "Guiding Without <em>Text.</em>",
    lead: "A study of how environmental cues can communicate goals and mechanics without interrupting play.",
    goal: "Describe the mechanic or objective that players needed to understand and why a text tutorial was not the ideal solution.",
    process: "Explain how you used composition, contrast, lighting, landmarks, rewards or enemy placement to direct attention.",
    learning: "Share how you checked whether players understood the cues. What did they miss, and what would you refine?"
  },
  encounters: {
    eyebrow: "LEVEL DESIGN / 003",
    title: "Combat & <em>Challenge Spaces.</em>",
    lead: "Exploring how arena layout, cover, elevation and enemy placement shape player decisions.",
    goal: "Define the intended challenge and the choices players should have during the encounter.",
    process: "Walk through your arena layout, encounter beats, cover placement and the changes made after playtesting.",
    learning: "Explain whether the encounter supported different strategies and how you would improve its pacing or readability."
  },
  "project-one": {
    eyebrow: "GAME PROJECT / 001",
    title: "Bound By Death",
    lead: "Bound By Death is a 3D cooperative action hack-and-slash with a top-down view, designed for two players to play together locally.",
    goal: "Bound by Death is a project developed by Ravenwhisp, a fictional videogame company created for the master's degree Advanced programming for AAA video games of UPC, with our own game engine. \n\n In this project I work alongside 17 colleges to develop this local cooperative 3D diablo like hack & slash. My main role in this project was lead Level Designer, but also I have been part of the QA team, reviewing features from the engine and from the game itself.",
    process: "My main tasks for this project where designing all the levels, 3 in total. To eneter more in detail, I was the responsible of making the structural design of the levels, think where and how the machanics will be introduced. Alongside this task, I was also in charge of all the process to bring up the levels to our own engine, starting with the blockout and then substitite the basic geometry with assets that where given to us by the teachers. This process was made in Unity for hardware limitations of our engine, but once the structure of the level was completed I exported them as a .gltf to our engine. Once the level was on the engine, I was also responible to design and add the lighting to the level, alongside with the shadows and some post-procesed effects. For the QA, I reviewed most of the pull request that my partners did in the project, testing the new features or changes to existing ones and giving feedback of the results of my testing.",
    learning: "Since I was the lead Level Designer, I had to take more responsabilities than in any project that I worked before. This help me to improve my organisation and my communication with my partners, since I need to be clear and also a person that they could lean on in case they need something related to level design."
  },
  "project-two": {
    eyebrow: "GAME PROJECT / 002",
    title: "Project Title <em>Two.</em>",
    lead: "A case study template for a personal or Unity project.",
    goal: "What were you trying to build, and what player experience did you want to deliver?",
    process: "Show how you moved from idea to prototype. Focus on the parts you personally designed or implemented.",
    learning: "Describe the result honestly, what feedback taught you, and what you would change in a new iteration."
  },
  "project-three": {
    eyebrow: "GAME PROJECT / 003",
    title: "Project Title <em>Three.</em>",
    lead: "A case study template for an experiment or research prototype.",
    goal: "What question were you investigating, and how would you know if the experiment worked?",
    process: "Explain the prototype, test setup and design choices that helped you investigate the question.",
    learning: "Summarise your findings and how they might inform a future level or game project."
  }
};

function closeMenu() {
  sidebar.classList.remove("open");
  scrim.classList.remove("visible");
}
function openMenu() {
  sidebar.classList.add("open");
  scrim.classList.add("visible");
}
function showPage(route) {
  let target = route || "home";
  if (standaloneProjects[target]) {
    window.location.href = standaloneProjects[target];
    return;
  }
  if (target in projectNotes) {
    const note = projectNotes[target];
    document.getElementById("detailEyebrow").textContent = note.eyebrow;
    document.getElementById("detailTitle").innerHTML = note.title;
    document.getElementById("detailLead").textContent = note.lead;
    document.getElementById("detailGoal").textContent = note.goal;
    document.getElementById("detailProcess").textContent = note.process;
    document.getElementById("detailLearning").textContent = note.learning;
    target = "project-detail";
  }
  if (!pages.some(page => page.dataset.page === target)) target = "home";
  pages.forEach(page => page.classList.toggle("active", page.dataset.page === target));
  navLinks.forEach(link => link.classList.toggle("active", link.dataset.route === target));
  sectionName.textContent = names[target] || names.home;
  closeMenu();
  window.scrollTo({top: 0, behavior: "smooth"});
}

function routeFromHash() {
  const route = window.location.hash.replace(/^#/, "") || "home";
  showPage(route);
}
window.addEventListener("hashchange", routeFromHash);
document.getElementById("openSidebar").addEventListener("click", openMenu);
document.getElementById("closeSidebar").addEventListener("click", closeMenu);
scrim.addEventListener("click", closeMenu);
document.getElementById("backToProjects").addEventListener("click", () => {
  window.location.hash = "projects";
});
document.querySelectorAll("[data-open-project]").forEach(button => {
  button.addEventListener("click", () => {
    const project = button.dataset.openProject;
    if (standaloneProjects[project]) {
      window.location.href = standaloneProjects[project];
    } else {
      window.location.hash = project;
    }
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
routeFromHash();
