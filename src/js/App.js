window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 32 || document.documentElement.scrollTop > 32) {
    document.getElementById("nav").className ="bg-black fixed w-full -translate-y-0 overflow-hidden transition-all duration-200";
  } else {
    document.getElementById("nav").className ="bg-black fixed w-full -translate-y-16 overflow-hidden transition-all duration-200";
  }
}