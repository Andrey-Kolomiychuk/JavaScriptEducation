
"use strict";

window.addEventListener('DOMContentLoaded', function() {

    
	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide'); // анимация css
            item.classList.remove('show', 'fade'); // анимация css
           // item.style.display = 'none'
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
	}

	function showTabContent(i = 0) { // по умалчанию i = 0
        tabsContent[i].classList.add('show', 'fade'); // анимация css
        tabsContent[i].classList.remove('hide'); // анимация css
        // tabsContent[i].style.display = 'block'
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
	});
});