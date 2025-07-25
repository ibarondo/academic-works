var projects = [
    {
        "title": "Web Development",
        "description": "A simple one-page HTML project designed to highlight the key features and design of the Samsung Galaxy XCover Pro. Built using pure CSS for styling, this project demonstrates basic front-end development skills, focusing on responsive design and clean visual presentation.",
        "icon": "bi bi-code-slash",
        "viewSite": "https://ibarondo.github.io/academic-works/WD",
        "gitHubDocs": "https://github.com/ibarondo/academic-works/tree/main/WD"
    },
    {
        "title": "App Dev. and Emerging Tech.",
        "description": "A responsive website showcasing Paris, known as the City of Love. Built using Bootstrap for layout and responsiveness, with additional CSS for styling enhancements. This project highlights key landmarks, cultural attractions, and the romantic charm of Paris through clean design and organized structure.",
        "icon": "bi bi-cpu",
        "viewSite": "https://ibarondo.github.io/academic-works/ADET",
        "gitHubDocs": "https://github.com/ibarondo/academic-works/tree/main/ADET"
    }
];

function displayProjects() {
    var projectContainer = document.getElementById('projectContainer');

    projects.forEach(function (project) {
        projectContainer.innerHTML += `
        <div class="card mx-auto p-4 d-flex flex-column">
                    <div class="icon">
                        <i class="${project.icon}" ></i>
                    </div>
                    <div class="col d-flex flex-column flex-grow-1">
                        <h3>${project.title}</h3>
                        <div class="card-text flex-grow-1">
                            <p>${project.description}</p>
                        </div>
                        <div class="card-btn d-flex gap-2 mt-auto">
                            <a target="_blank" href="${project.viewSite}"
                                class="btn btn-view d-flex align-items-center gap-1 d-none d-xl-block">View
                                Site <i class="bi bi-box-arrow-up-right"></i></a>
                            <a target="_blank" href="${project.gitHubDocs}"
                                class="btn btn-docs d-flex align-items-center gap-1 d-none d-xl-block">See
                                Documentation <i class="bi bi-box-arrow-up-right"></i></a>
                            <a href="${project.viewSite}" class="btn btn-view-sm d-block d-xl-none"><i
                                    class="bi bi-box-arrow-up-right"></i></a>
                            <a href="${project.gitHubDocs}" class="btn btn-docs-sm d-block d-xl-none"><i class="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>`;
    });

}

displayProjects();