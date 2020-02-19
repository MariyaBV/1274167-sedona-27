document.addEventListener('DOMContentLoaded', function () {
  openSearchHotelBlock();
}, false);


function openSearchHotelBlock() {
  let buttonSearchHotel = document.getElementById('buttonSearchHotel');
  let formSearchHotel = document.querySelectorAll('.hotel-search__form');

  buttonSearchHotel.addEventListener('click', function (e) {
    e.preventDefault();
    if (formSearchHotel[0].classList.contains('open')) {
      formSearchHotel[0].classList.remove('open');
      console.log('remove');
    } else {
      formSearchHotel[0].classList.add('open');
      console.log('add');
    }
  });
}

