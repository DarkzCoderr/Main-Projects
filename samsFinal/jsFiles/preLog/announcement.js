function openModal(modalId) {
    const modal = document.querySelector(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modal) {
    if (modal) {
        modal.style.display = 'none';
    }
}

document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const modalId = this.getAttribute('data-modal-target');
        openModal(modalId);
    });
});

document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function() {
        closeModal(this.closest('.modal'));
    });
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
    }
});