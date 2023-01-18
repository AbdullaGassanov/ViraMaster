"use strict";

const btnNavbarClose = document.querySelector(".navbar__close"),
	headerPanel = document.querySelector(".header__head"),
	navbar = document.querySelector(".navbar"),
	headerLabel = document.querySelector(".header__label"),
	headerLabelState = document.querySelector(".header__label-state"),
	headerIcon = document.querySelector(".header__icon"),
	headerLabelText = document.querySelector(".header__label-text");

headerPanel.addEventListener("click", () => {
	navbar.classList.toggle("navbar__open");
	if (navbar.classList.contains("navbar__open")) {
		headerIcon.setAttribute("xlink:href", "icons/symbol-defs.svg#icon-x");
	} else {
		headerIcon.setAttribute("xlink:href", "icons/symbol-defs.svg#icon-menu");
	}
});
