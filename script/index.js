
var modalClose = document.querySelector('.modal-close');
var modalCloseBtn = document.querySelector('.modal-close-btn');
var modal = document.querySelector('.modal');
var modalContainer = document.querySelector('.modal-container');
var buyBtns = document.querySelectorAll('.place-buy-btn');
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
// Đóng/ mở mobile menu
mobileMenu.onclick = function() {
 var isClosed = header.clientHeight === headerHeight;
 if(isClosed) {
     header.style.height = 'auto';
 }
 else {
     header.style.height = null;
 }
}
//    Tự động đóng khi chọn menu
 var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
 for (var menuItem of menuItems) {
     menuItem.onclick = function(e) {
         var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('suv-nav');
         if (isParentMenu) {
            e.preventDefault();
         }
         else {
            header.style.height = null;
         }
     }
 }
 // Đóng modal
modalClose.onclick = function() {
 modal.classList.remove('open');
}
modalCloseBtn.onclick = function() {
 modal.classList.remove('open');
}
 modal.onclick = function() {
  modal.classList.remove('open');
}
 modalContainer.onclick = function(e) {
     e.stopPropagation();
}
// Mở modal
function modalEvent() {
     modal.classList.add('open');
}
for (const buyBtn of buyBtns) {
 buyBtn.addEventListener('click', modalEvent);
}   
