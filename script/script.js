window.onscroll = function() {
    stickyBar();
    scrollFunction();
    scrollFunctionTwo();
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickyBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("sticky2");
    navbar.appendChild
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("sticky2");
  }
};



function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollFunctionTwo() {
  if (document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050) {
    document.querySelector(".boxOl").style.display = "block";
  } else {
    document.querySelector(".boxOl").style.display = "none";
  }
}



