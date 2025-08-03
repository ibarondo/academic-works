var projects = [
    {
        "title": "Web Development",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impeditiure asperiores laborum ipsum excepturi, dolore deleniti optio doloribus architecto officiis ipsam amet voluptas maxime expedita, autem, vero culpa accusamus!",
        "icon": "bi bi-code-slash",
        "viewSite": "https://ibarondo.github.io/academic-works/WD"
    },
    {
        "title": "App Dev. and Emerging Tech.",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impeditiure asperiores laborum ipsum excepturi, dolore deleniti optio doloribus architecto officiis ipsam amet voluptas maxime expedita, autem, vero culpa accusamus!",
        "icon": "bi bi-cpu",
        "viewSite": "https://ibarondo.github.io/academic-works/ADET"
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
                            <a href="${project.viewSite}" class="btn btn-view-sm d-block d-xl-none"><i
                                    class="bi bi-box-arrow-up-right"></i></a>
                        </div>
                    </div>
                </div>`;
    });

}

displayProjects();