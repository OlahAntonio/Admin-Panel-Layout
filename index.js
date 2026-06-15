const statuses = document.querySelectorAll(".statusBtn");
const navbar = document.querySelector(".displayNav");
const toggleBtn = document.querySelector(".menu-btn");

statuses.forEach(status => {
    const text = status.textContent.trim();

    if (text === "Published") {
        status.classList.add("published");
    } 
    else if (text === "Deleted") {
        status.classList.add("deleted");
    }
});

toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});