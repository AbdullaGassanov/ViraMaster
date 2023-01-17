"use strict";

const btnNavbarClose = document.querySelector(".navbar__close"),
	headerPanel = document.querySelector(".header__head"),
	navbar = document.querySelector(".navbar"),
	headerLabel = document.querySelector(".header__label"),
	headerLabelState = document.querySelector(".header__label-state"),
	headerIcon = document.querySelector(".header__icon");

headerPanel.addEventListener("click", (e) => {
	let target = e.target;

	console.log(target);
});

btnNavbarClose.addEventListener("click", () => {
	console.log("test1");
	navbar.style.cssText = "transform: translateY(-100%);";
	headerLabelState.innerHTML = "Menu";
	headerIcon.setAttribute("xlink:href", "icons/symbol-defs.svg#icon-menu");
});

headerLabel.addEventListener("click", () => {
	console.log("test2");
	navbar.style.cssText = "transform: translateY(0);position:relative;";
	headerLabelState.innerHTML = "Close";
	headerIcon.setAttribute("xlink:href", "icons/symbol-defs.svg#icon-x");
});
