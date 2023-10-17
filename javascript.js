let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else { 
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});



$(window).on("scroll touchmove", function() {

    if ($(document).scrollTop() > $("#navbar").position().top) {
      $('.nav-wrapper').css('background', '#fff');
      $('.nav-wrapper').css('box-shadow', '0px 0px 15px rgba(37, 143, 103, 0.07)');
    }
    else{
    $('.nav-wrapper').css('background', 'none');
    $('.nav-wrapper').css('box-shadow', 'none');
    }
    
  });


  // products tabs desktop

function activeTab(evt, id) {
           
    // Get all elements with class="tablinks" and remove the class "active"
     let tabactive = document.getElementsByClassName("TabButtonSelected");
     tabactive[0].className = tabactive[0].className.replace(" TabButtonSelected", "");
  
     document.getElementById(id).style.display = "block";
     evt.currentTarget.className += " TabButtonSelected";
  
     displaySection(evt,id)
  }
  
  function displaySection(evt, id) {
  
     let tabactive = document.getElementsByClassName("tab-section");
     tabactive[0].className = tabactive[0].className.replace(" d-chart-show", "d-chart-n");
     // add below line of codes
     [...document.querySelectorAll('div.tab-section')].forEach(item => item.style.display='none')
     document.getElementById("Section" + id).style.display = "block";
     evt.currentTarget.className += " d-chart-show";
  
  }


  function reveal() {
    var reveals = document.querySelectorAll(".reveal.fade-up");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


// function jqUpdateSize(){
//     // Get the dimensions of the viewport
//     // var width = $(window).width();
//     var height = $(window).height();

//     // $('#jqWidth').html(width);
//     $('#jqHeight').html(height);

//     $('.header').css({ 
//     height:  $(window).height(),
//     overflow:" hidden"});

// }
// $(document).ready(jqUpdateSize);    // When the page first loads
// $(window).resize(jqUpdateSize);     // When the browser changes size