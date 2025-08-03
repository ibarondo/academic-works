var projects = [
    {
        "Title": "Samsung Galaxy XCover Pro",
        "Description": "A simple one-page HTML project designed to highlight the key features and design of the Samsung Galaxy XCover Pro. Built using pure CSS for styling, this project demonstrates basic front-end development skills, focusing on responsive design and clean visual presentation.",
        "imgDesktop": "A01.png",
        "imgMobile": "A01.png",
        "viewSite": "A01/index",
        "gitHubDocs": "https://github.com/ibarondo/academic-works/tree/main/WD/A01"
    },
    {
        "Title": "Paris | City of Love",
        "Description": "A responsive website showcasing Paris, known as the City of Love. Built using Bootstrap for layout and responsiveness, with additional CSS for styling enhancements. This project highlights key landmarks, cultural attractions, and the romantic charm of Paris through clean design and organized structure.",
        "imgDesktop": "A02.png",
        "imgMobile": "A02.jpg",
        "viewSite": "A02/index",
        "gitHubDocs": "https://github.com/ibarondo/academic-works/tree/main/WD/A02"
    },
    {
        "Title": "World Atlas | Gallery of Continents and Flags",
        "Description": "This website feature a gallery of continents and their respective country flags. Built with Bootstrap for responsiveness and enhanced with custom CSS styling. The gallery utilizes JavaScript loops to dynamically generate content.",
        "imgDesktop": "A03.png",
        "imgMobile": "A03.png",
        "viewSite": "A03/index",
        "gitHubDocs": "https://github.com/ibarondo/academic-works/tree/main/WD/A03"
    },
    {
        "Title": "Flagpedia | Country Flags API Website",
        "Description": "Flagpedia is a responsive web project that showcases country flags and their codes by utilizing JavaScript to retrieve data from a free public API (JSON format). The website is designed with Bootstrap for responsiveness and enhanced with custom CSS.",
        "imgDesktop": "A04.png",
        "imgMobile": "A04.png",
        "viewSite": "A04/index",
        "gitHubDocs": "https://github.com/ibarondo/academic-works/tree/main/WD/A04"
    },
    {
        "Title": "Hammer Jam: A New Character Appears!",
        "Description": "A website inspired by Clash of Clans’ Hammer Jam: A New Character Appears! event. The site features embedded videos and informative content highlighting the event, utilizing multimedia elements and custom styling for an engaging presentation.",
        "imgDesktop": "A05.png",
        "imgMobile": "A05.png",
        "viewSite": "A05/index",
        "gitHubDocs": "https://github.com/ibarondo/academic-works/tree/main/WD/A05"
    },
     {
        "Title": "Parallax: Clash of Clans",
        "Description": "A website showcasing Clash of Clans with a parallax scrolling effect. Built with layered backgrounds and custom CSS to create depth and visual interest while demonstrating front-end design skills.",
        "imgDesktop": "A06.png",
        "imgMobile": "A06.png",
        "viewSite": "A06/index",
        "gitHubDocs": "https://github.com/ibarondo/academic-works/tree/main/WD/A06"
    }
];

function displayProjects() {
    var projectContainer = document.getElementById('projectContainer');

    projects.forEach(function (project) {
        projectContainer.innerHTML += `
        <div class="card mx-auto p-0 p-xl-4 position-relative">
            <div class="row g-0 h-100">

                <!-- For SMALL SCREEN -->
                <div class="col-12 d-block d-xl-none position-relative" style="height: 400px;">
                    <img src="./assets/img/mobile/${project.imgMobile}" alt="${project.Title}"
                        style="border-radius: 8px; width: 100%; height: 100%; object-fit: cover;">
                    <div class="overlay-content">
                        <h5>${project.Title}</h5>
                        <p style="font-size: 14px;">${project.Description}</p>
                        <div class="card-btn d-flex gap-2">
                            <a target="_blank" href="${project.viewSite}" class="btn btn-view-sm"><i class="bi bi-box-arrow-up-right"></i></a>
                            <a target="_blank" href="${project.gitHubDocs}" class="btn btn-docs-sm"><i class="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>

                <!-- For LARGE SCREEN -->
                <div class="col-12 col-xl-6 d-none d-xl-block position-relative" style="height: 100%;">
                    <img src="./assets/img/desktop/${project.imgDesktop}" alt="${project.Title}" 
                        style="width: 100%; height: 100%; object-fit: cover;">
                </div>

                <div class="col-12 col-xl-6 px-4 py-2 d-none d-xl-flex flex-column justify-content-between" style="height: 100%;">
                    <div class="card-text">
                        <h3>${project.Title}</h3>
                        <p>${project.Description}</p>
                    </div>
                    <div class="card-btn d-flex gap-2">
                        <a target="_blank" href="${project.viewSite}" class="btn btn-view d-flex align-items-center gap-1">View Site <i class="bi bi-box-arrow-up-right"></i></a>
                        <a target="_blank" href="${project.gitHubDocs}" class="btn btn-docs d-flex align-items-center gap-1">See Documentation <i class="bi bi-box-arrow-up-right"></i></a>
                    </div>
                </div>

            </div>
        </div>`;
    });

}

displayProjects();