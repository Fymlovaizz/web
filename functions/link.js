let aboutLink = document.getElementById("about-link"),
    projectsLink = document.getElementById("projects-link"),
    schoolYearLink = document.getElementById("school-year-link"),
    indexLink = document.getElementById("index-link");

aboutLink.addEventListener("click", () => {
    window.open('../about.html', '_self');
})

projectsLink.addEventListener("click", () => {
    window.open('../project.html', '_self')
})

schoolYearLink.addEventListener("click", () => {
    window.open('../schoolYear.html', '_self')
})

indexLink.addEventListener("click", () => {
    window.open('../index.html', '_self')
})