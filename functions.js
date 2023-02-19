jQuery(function($) {
    /*downNavbar-responsive*/
    function toggleDownClass() {
      var header = document.querySelector("header");
      header.classList.toggle('down', $(document).scrollTop() > 0);
    }
  
    $(window).on("scroll", toggleDownClass);
  
    /*widthLogo-responsive*/
    function toggleLogoClass() {
      var header = document.querySelector("#imgLogo");
      header.classList.toggle('logo', $(document).scrollTop() > 0);
    }
  
    $(window).on("scroll", toggleLogoClass);
  
    /*titleStart-responsive*/
    function toggleTitleClass() {
      var span = document.querySelector("#title");
      span.classList.toggle('titleStart', $(document).scrollTop() > 0);
    }
  
    $(window).on("scroll", toggleTitleClass);
  });