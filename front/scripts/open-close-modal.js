const openModalBtn = document.getElementById('open-modal-btn');
const modal = document.getElementById('modal-container');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

console.log(openModalBtn, modal, closeModalBtn);