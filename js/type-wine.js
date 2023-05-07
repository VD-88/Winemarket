const redLink = document.querySelector('.shop-red-wines');
redLink.addEventListener('click', () => {
    const triggerEl = document.querySelector('#red-tab');
    let tab = new bootstrap.Tab(triggerEl);
    tab.show();
});

const whiteLink = document.querySelector('.shop-white-wines');
whiteLink.addEventListener('click', () => {
    const triggerEl = document.querySelector('#white-tab');
    let tab = new bootstrap.Tab(triggerEl);
    tab.show();
});
