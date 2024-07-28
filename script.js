let currentPage = 1;
const totalPages = 4;

function showPage(pageNumber) {
    for (let i = 1; i <= totalPages; i++) {
        const page = document.getElementById(`page-${i}`);
        if (i === pageNumber) {
            page.classList.add('show');
            page.classList.remove('hide');
        } else {
            page.classList.add('hide');
            page.classList.remove('show');
        }
    }
    updateButtons(pageNumber);
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function updateButtons(pageNumber) {
    const prevButtons = document.querySelectorAll('.button.previous');
    const nextButtons = document.querySelectorAll('.button.next');
    if (pageNumber === 1) {
        prevButtons.forEach(button => button.style.display = 'none');
    } else {
        prevButtons.forEach(button => button.style.display = 'inline-block');
    }
    if (pageNumber === totalPages) {
        nextButtons.forEach(button => button.style.display = 'none');
    } else {
        nextButtons.forEach(button => button.style.display = 'inline-block');
    }
}

showPage(currentPage);
