$(document).ready(function() {
  //sticky navigation
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("header nav").addClass("sticky");
      } else {
        $("header nav").removeClass("sticky");
      }
    },
    {
      offset: "60px"
    }
  );

  //scroll on buttons
  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  //navigation scroll
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  });

  //animations on scrolls
  $(".js--wp-1").waypoint(
    function(direction) {
      if (direction === "down") {
        $(".js--wp-1").addClass("animated pulse");
      } else {
        $(".js--wp-1").removeClass("animated pulse");
      }
    },
    { offset: "50%" }
  );

  $(".js--wp-2").waypoint(
    function(direction) {
      if (direction === "down") {
        $(".js--wp-2").addClass("animated fadeInUp");
      } else {
        $(".js--wp-2").removeClass("animated fadeInUp");
      }
    },
    { offset: "110%" }
  );

  $(".js--wp-3").waypoint(
    function(direction) {
      if (direction === "down") {
        $(".js--wp-3").addClass("animated fadeIn");
      } else {
        $(".js--wp-3").removeClass("animated fadeIn");
      }
    },
    { offset: "50%" }
  );

  $(".js--wp-4").waypoint(function(direction) {});

  //mobile navigation
  $(".js--mobile-icon").click(function() {
    var nav = $(".js--main-nav");
    var icon = $(".js--mobile-icon i");
    nav.slideToggle(200);

    if (icon.hasClass("ion-md-menu")) {
      icon.addClass("ion-md-close");
      icon.removeClass("ion-md-menu");
    } else {
      icon.addClass("ion-md-menu");
      icon.removeClass("ion-md-close");
    }
  });
});
