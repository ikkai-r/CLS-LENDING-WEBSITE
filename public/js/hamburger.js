document.addEventListener("DOMContentLoaded", function() {
    // const sidebar = document.querySelector('.sidebar'),
    // toggle = document.querySelector('.tgl');
    const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll('li a');

    // toggle.addEventListener("click", () => {
    //     sidebar.classList.toggle("close");
    // })

    navLinks.forEach(link => {
        if(link.href.includes(`${activePage}`)) {
            console.log(`${activePage}`);
            link.classList.add('active');
        }
    })
})
