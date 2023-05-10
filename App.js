const DropDownMenu = document.querySelector(".dropDownMenu");
const menuIcon = document.querySelector(".menuIcon");
const dropIcon = document.querySelector(".dropIcon");
const blackBg = document.querySelector(".blackBg");
const aboutUs = document.querySelector(".aboutUs");
const moreLink = document.querySelector(".moreLink");
const moreOptionOne = document.querySelector(".moreOptionOne");
const moreOptionTwo = document.querySelector(".moreOptionTwo");
const noOpacity = document.querySelector(".noOpacity");

dropIcon.addEventListener("click", closeDropMenu);
blackBg.addEventListener("click",closeDropMenu);

menuIcon.addEventListener("click", () => {
    DropDownMenu.classList.remove("closeMenu");
    DropDownMenu.classList.add("showMenu");
    blackBg.style.display = "block";
    aboutUs.classList.add("dot");
});

function closeDropMenu () {
    DropDownMenu.classList.remove("showMenu");
    DropDownMenu.classList.add("closeMenu");
    blackBg.style.display = "none"
};

aboutUs.addEventListener("click", () => {
    moreOptionOne.classList.remove("closeMore");
    moreOptionOne.classList.add("showMore");
    noOpacity.style.display = "block";
});

moreLink.addEventListener("click", () => {
    moreOptionTwo.classList.remove("closeMore");
    moreOptionTwo.classList.add("showMore");
    noOpacity.style.display = "block";
});

noOpacity.addEventListener("click", () => {
    moreOptionOne.classList.add("closeMore");
    moreOptionTwo.classList.add("closeMore");
    noOpacity.style.display = "none";
});

