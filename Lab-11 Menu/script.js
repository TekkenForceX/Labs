const toggleDropdown = () => {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
}


const showContent = (option) => {
    const displayArea = document.getElementById('display-area');
    if (option === 'letters') {
        displayArea.innerHTML = '<p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>';
    } else if (option === 'numbers') {
        displayArea.innerHTML = '<p>1 2 3 4 5 6 7 8 9 10</p>';
    }
}


window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        const dropdown = document.querySelector('.dropdown');
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
};


document.querySelector('.dropdown-button').addEventListener('click', toggleDropdown);
