var projects = [
    {
        "Title": "Philippines | A Simple MVC Website",
        "Description": "A PHP website showcasing the Philippines using a simple MVC architecture and URL GET variables to navigate between pages. No database was used as per project requirements.",
        "imgDesktop1": "A02/01.png",
        "imgDesktop2": "A02/02.png",
        "imgDesktop3": "A02/03.png",
        "imgDesktop4": "A02/04.png",
        "imgMobile": "A02.png",
        "viewSite": "A02/",
        "gitHubDocs": "https://github.com/ibarondo/academic-works/tree/main/ADET/A02"
    },
    {
        "Title": "Works, Words, and a Camera ",
        "Description": "A website showcasing a portfolio using a bento-style layout. Additional pages include a daily quotes page and a simple photobooth feature. Built with Bootstrap for responsive design and enhanced with custom CSS styling.",
        "imgDesktop1": "A03/01.png",
        "imgDesktop2": "A03/02.png",
        "imgDesktop3": "A03/03.png",
        "imgDesktop4": "A03/04.png",
        "imgMobile": "A03.png",
        "viewSite": "A03/index",
        "gitHubDocs": "https://github.com/ibarondo/academic-works/tree/main/ADET/A03"
    },
    {
        "Title": "Shopifitsy | POS System",
        "Description": "Shopifitsy is a front-end, one-page POS system web application. It features responsive design using Bootstrap, dynamic page loading via JavaScript, and simulates core POS functions like product selection, order summary, and payment calculation.",
        "imgDesktop1": "A04/01.png",
        "imgDesktop2": "A04/02.png",
        "imgDesktop3": "A04/03.png",
        "imgDesktop4": "A04/04.png",
        "imgMobile": "A04.png",
        "viewSite": "A04/index",
        "gitHubDocs": "https://github.com/ibarondo/academic-works/tree/main/ADET/A04"
    },
    {
        "Title": "Weather Forecast | An Embed Web App",
        "Description": "A responsive weather app embedded in another site, displaying live temperature, humidity, and weather conditions via a public API. Built with HTML, CSS, JavaScript, and Bootstrap.",
        "imgDesktop1": "A07/01.png",
        "imgDesktop2": "A07/02.png",
        "imgDesktop3": "A07/03.png",
        "imgDesktop4": "A07/04.png",
        "imgMobile": "A07.png",
        "viewSite": "A07/index",
        "gitHubDocs": "https://github.com/ibarondo/academic-works/tree/main/ADET/A07"
    }
];

function displayProjects() {
    var projectContainer = document.getElementById('projectContainer');

    projects.forEach(function (project, index) {
        projectContainer.innerHTML += `
        <div class="card mx-auto p-0 p-xl-4 position-relative">
            <div class="row g-0 h-100">

                <!-- For SMALL SCREEN -->
                <div class="mobile col-12 d-block d-xl-none position-relative" style="height: 400px;">
                    <img src="./assets/img/mobile/${project.imgMobile}" alt="${project.Title}"
                        style="border-radius: 20px; width: 100%; height: 100%; object-fit: cover">
                    <div class="overlay-content">
                        <h5>${project.Title}</h5>
                        <p style="font-size: 14px;">${project.Description}</p>
                        <div class="card-btn d-flex gap-2">
                            <a href="${project.viewSite}" class="btn btn-view-sm"><i class="bi bi-box-arrow-up-right"></i></a>
                            <a href="${project.gitHubDocs}" class="btn btn-docs-sm"><i class="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>

                <!-- For LARGE SCREEN -->
                <div id="carouselExampleInterval-${index}"
                        class="carousel slide carousel-fade col-12 col-xl-6 d-none d-xl-block position-relative"
                        data-bs-ride="carousel">
                        <div class="carousel-inner" style="border-radius: 20px">
                            <div class="carousel-item active">
                                <img src="./assets/img/desktop/${project.imgDesktop1}" class="d-block w-100">
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="./assets/img/desktop/${project.imgDesktop2}" class="d-block w-100">
                            </div>
                            <div class="carousel-item">
                                <img src="./assets/img/desktop/${project.imgDesktop3}" class="d-block w-100">
                            </div>
                            <div class="carousel-item">
                                <img src="./assets/img/desktop/${project.imgDesktop4}" class="d-block w-100">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval-${index}"
                            data-bs-slide="prev">
                            <span class="custom-arrow">&lt;</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval-${index}"
                            data-bs-slide="next">
                            <span class="custom-arrow">&gt;</span>
                        </button>
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