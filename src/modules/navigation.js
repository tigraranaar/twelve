const sectionlinks = document.getElementsByClassName('section__link');
const sectionItems = document.getElementsByClassName('section__item');
const sections = document.getElementsByClassName('section__box');

Array.prototype.forEach.call(sectionlinks, sectionlink => {
    sectionlink.addEventListener('click', event => {
        let sectionID = sectionlink.getAttribute('data-foo');

        deleteActiveClasses();
        hideSections();
        addActiveClass(sectionlink);
        showSection(sectionID);
      });
});

function deleteActiveClasses() {
    Array.prototype.forEach.call(sectionlinks, sectionlink => {
        sectionlink.parentElement.classList.remove("section__item--active");
    });
}

function addActiveClass(el) {
    el.parentElement.classList.toggle("section__item--active");
}

function hideSections() {
    Array.prototype.forEach.call(sections, section => {
        section.style.display = "none";
    });
}

function showSection(sectionID) {
    document.getElementById(sectionID).style.display = 'block';
}