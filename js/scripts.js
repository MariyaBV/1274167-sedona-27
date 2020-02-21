document.addEventListener('DOMContentLoaded', function () {
  openSearchHotelBlock();
  checkInputSearchHotelBlock();
}, false);


function openSearchHotelBlock() {
  let buttonSearchHotel = document.getElementById('buttonSearchHotel');
  let formSearchHotel = document.querySelector('.hotel-search__form');
  let arrivalDate = formSearchHotel.querySelector('[name=arrivalDate]');

  buttonSearchHotel.addEventListener('click', function (evt) {
    evt.preventDefault();
    formSearchHotel.classList.toggle('open');
    arrivalDate.focus();
  });
}

function checkInputSearchHotelBlock() {
  let formSearchHotel = document.querySelector('.hotel-search__form');
  let arrivalDate = formSearchHotel.querySelector('[name=arrivalDate]');
  let departureDate = formSearchHotel.querySelector('[name=departureDate]');
  let adults = formSearchHotel.querySelector('[name=adults]');
  let children = formSearchHotel.querySelector('[name=children]');
  let isStorageSupport = true;
  let storage = "";

  formSearchHotel.addEventListener("submit", function (evt) {
    evt.preventDefault();    
    arrivalDate.classList.remove('error');
    departureDate.classList.remove('error');
    adults.classList.remove('error');
    children.classList.remove('error');

    if (!arrivalDate.value) {
      arrivalDate.classList.add('error');
    }
    if (!departureDate.value) {
      departureDate.classList.add('error');
    }
    if (!adults.value) {
      adults.classList.add('error');
    }
    if (!children.value) {
      children.classList.add('error');
    }
    if (arrivalDate.value && departureDate.value && adults.value && children.value) {
      if (isStorageSupport) {
        localStorage.setItem("adults", adults.value);
        localStorage.setItem("children", children.value);
      }

      formSearchHotel.submit();
    }
  });
}
