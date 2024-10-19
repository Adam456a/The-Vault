function searchFunction() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const listItems = document.querySelectorAll('#roms-list li');

    listItems.forEach(item => {
        const linkText = item.innerText.toLowerCase();
        if (linkText.includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });

    // Call sortMovies after filtering
    sortMovies();
}

function sortMovies() {
    const list = document.getElementById('roms-list');
    const items = Array.from(list.getElementsByTagName('li'));

    // Sort all items regardless of display state
    items.sort((a, b) => {
        const titleA = a.innerText.toLowerCase();
        const titleB = b.innerText.toLowerCase();
        return titleA.localeCompare(titleB);
    });

    // Clear list and append sorted items
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    // Append all items back in sorted order
    items.forEach(item => list.appendChild(item));
}

window.onload = sortMovies;
