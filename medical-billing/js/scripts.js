$(document).ready(function () {
  var url = window.location.href;
  var activePage = url;
  $('.main-menu a').each(function () {
      var linkPage = this.href;
      if (activePage == linkPage) {
        $(this).closest('li').addClass('current-menu-item');
      }
    });

  $('#mobileMenuButton').on('click', function () {
    $('.menu-list').toggleClass('open-sesame');
  });

  $('#medicalBillingSubset').hover(function () {
    $(this).children('ul.submenu').stop(true).slideDown(300);
  },

    function () {
        $(this).children('ul.submenu').stop(true).slideUp(300);
      });

  //subscribe form popup
  var subsBtn = document.getElementById('subscribe');
  var subsOverlay = document.getElementById('formOverlay');
  var subsContent = document.getElementById('form_container');

  if (subsBtn) {
    subsBtn.addEventListener('click', subsPopup);
  }

  //create function when someone clicks the cbch button, it pops up the OVERLAY
  function subsPopup() {
    subsOverlay.style.display = 'block';
  }

  //clicking outside the modal to close it
  document.addEventListener('click', function (e) {
    if (e.target.id == 'formOverlay') {
      subsOverlay.style.display = 'none';
    }

    if (e.target === subsBtn) {
      subsOverlay.style.display = 'block';
    }
  });

  //crossbenefit clear house button, popup and content section declared
  var cbchBtn = document.getElementById('cbchBtn');
  var cbchOverlay = document.getElementById('cbchOverlay');
  var cbchContent = document.getElementById('cbchContent');

  if (cbchBtn) {
    cbchBtn.addEventListener('click', cbchPopup);
  }

  //create function when someone clicks the cbch button, it pops up the OVERLAY
  function cbchPopup(e) {
    cbchOverlay.style.display = 'block';
  }

  //create a univeral close button!!!

  var universalClose = document.getElementsByClassName('close-x');

  for (var i = 0; i < universalClose.length; i++) {
    universalClose[i].addEventListener('click', function () {
      var parent = this.parentNode;
      var target = parent.parentNode;

      //if this is the button for the schedule a demo
      if (this.id == 'closeX') {
        target = parent.parentNode.parentNode.parentNode;
      }

      //or if this is the button for the subscribe email link
      if (this.id == 'subsClose') {
        target = parent.parentNode.parentNode;
      }

      //otherwise
      target.style.display = 'none';
    });
  }

  //if anyone clicks outside the modal, they can close it too
  document.addEventListener('click', function (e) {
    if (e.target.id == 'cbchOverlay') {
      cbchOverlay.style.display = 'none';
    }

    if (e.target === 'cbchBtn') {
      cbchContent.style.display = 'block';
      cbchOverlay.style.display = 'block';
    }
  });

  //declare a variable for the button
  var scheduleBtn = document.getElementById('scheduleYourDemo');

  //declare a variable for the scheduler overlay
  var scheduler = document.getElementById('scheduler');

  //create an event listener anytime anyone clicks on button
  if (scheduleBtn) {
    scheduleBtn.addEventListener('click', scheduleButton);
  }

  //callback function that opens up the overlay

  function scheduleButton() {
    scheduler.style.display = 'block';
  }

  var scheduleBox = document.getElementById('scheduleBox');

  document.addEventListener('click', function (e) {
    if (e.target.id == 'scheduler') {
      scheduleBox.style.display = 'none';
      scheduler.style.display = 'none';
    }

    if (e.target === scheduleBtn) {
      scheduleBox.style.display = 'block';
      scheduler.style.display = 'block';
    }
  });

  //faq accordion creation

  var accordions = document.getElementsByClassName('acc-faq');

  for (var j = 0; j < accordions.length; j++) {
    accordions[j].onclick = function () {
      this.classList.toggle('is-open');
      var answer = this.nextElementSibling;

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = '100%';
      }
    };
  }

  //smooth scroll

  var $root = $('html, body');

  $(document).on('click', 'a[href^="#"]', function (e) {

    $root.animate({
      scrollTop: $($.attr(this, 'href')).offset().top,
    }, 1000);

    return false;
  });

  var currentDate = new Date();
  var currentISO = currentDate.toISOString();
  currentISO = currentISO.slice(0, -5);

  //select all dates and run this function for each
  $('div.schedule-date').each(function () {
    //declare what the expiration date of each date

    var dateLimit = $(this).data('limit');

    //parse that specificied limit
    var date = new Date(dateLimit);
    var specifiedISO = date.toISOString();
    specifiedISO = specifiedISO.slice(0, -5);

    if (currentISO > specifiedISO) {
      $(this).remove();
    }
  });
});
