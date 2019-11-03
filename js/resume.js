// import { EMAIL_KEY } from "../key.js";
(function($) {
  ("use strict"); // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav"
  });

  // click to send email
  $(".scheduale").click(() => sendEmail());
  $(".hero-email").click(() => sendEmail());

  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      if ($(window).width() <= 967)
        $(".bg-primary").css({
          top: 0,
          transition: "0.4s ease-out"
        });
    } else {
      if ($(window).width() <= 967) $(".bg-primary").css("top", "-60px");
    }
    prevScrollpos = currentScrollPos;
  };

  /* GALLERY */

  $(function() {
    var selectedClass = "";
    $(".filter").click(function() {
      selectedClass = $(this).attr("data-rel");
      $("#gallery").fadeTo(100, 0.1);
      $(".all")
        .not("." + selectedClass)
        .fadeOut()
        .removeClass("animation");
      setTimeout(function() {
        $("." + selectedClass)
          .fadeIn()
          .addClass("animation");
        $("#gallery").fadeTo(300, 1);
      }, 300);
    });
  });

  $(".phone-number").click(() => {
    window.open("tel:6476404714");
  });
  $(function() {
    $(".img-fluid").click(e => {
      const string = String(e.target.src);
      const listOfStrings = string.split("/");
      const imgNum = listOfStrings[listOfStrings.length - 1];
      const src = "img/" + imgNum;
      const id = imgNum.split(".")[0];
      const container = $(".gallery-image-container");
      console.log(container);
      $(".img-fluid").css("opacity", 0.3);
      $(".carousel").css({
        display: "inline-block",
        "z-index": 9,
        "min-width": "900px"
        // "margin-left": "-460px"
      });
      container.append(`
      
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="img/img2.JPG" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img3.JPG" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img4.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img5.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img6.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img7.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img8.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img9.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img10.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img11.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img12.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img13.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img14.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img15.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img16.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img17.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img18.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img19.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img20.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img21.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img22.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img23.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img24.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img25.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img26.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img27.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img28.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img29.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img30.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img31.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img32.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img33.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img34.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img35.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img36.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img37.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img38.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img39.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img40.JPG" alt="slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/img41.JPG" alt="slide">
    </div>
  </div>

    <div class="carousel-caption d-none d-md-block">
    <a class="carousel-close" role="button" >
    <span class="carousel-close" aria-hidden="true">X</span>
  </a>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> `);
    });
  });
  $(function() {
    $(".jssora051").hover(() => {
      $(".jssora051").click(() => {
        alert("hello");
      });
    });
  });
  /* Gallery hover */
  $(function() {
    $(".all").hover(
      function() {
        if ($(window).width() >= 567) {
          let element = $(this);
          let className = element.attr("class");
          let category = className.slice(-1);
          Number(category);

          const CATEGORIES = {
            0: "Front",
            1: "Exterior",
            2: "Kitchen",
            3: "Bathroom",
            4: "Living Room",
            5: "Bedroom",
            6: "Office",
            7: "Laundry Room"
          };

          if (CATEGORIES[category] === undefined) {
            $(this)
              .find(".img-fluid")
              .css("opacity", 1);
          } else {
            // $(this)
            //   .find(".img-fluid")
            //   .css("opacity", 0.3);
            // $(function() {
            $(this).append(
              ` <div class="middle"><div class="text">${CATEGORIES[category]}</div></div>`
            );
            // console.log($(this).find(".middle"));
            // });
            $(function() {
              $(".text").click(function() {
                $(".carousel").html("");
                $(".carousel").hide();
                const parent = $(".row");
                const src = $(this)
                  .parentsUntil(parent)
                  .find(".img-fluid")
                  .attr("src");
                const listOfStrings = src.split("/");
                const imgNum = listOfStrings[listOfStrings.length - 1];
                const id = imgNum.split(".")[0];
                const container = $(".gallery-image-container");
                console.log(src);

                container.append(`<div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div class="modal-dialog " role="document">
                <div class="close-btn">X</div>

                  <div class="modal-body">
                    <img data-u="image" class="img-fluid modal-image" src="${src}" alt="front-view" />
                    </div>

                    </div>
                    </div> `);
                $(".modal").modal("show");
                //                     <div class="left-arrow"><</div> <div class="right-arrow">> </div>
                // $(".modal-backdrop").hide();
                $(".modal").on("show.bs.modal", function(event) {
                  var idx = $(".modal:visible").length;
                  $(this).css("z-index", 1040 + 10 * idx);
                });

                $(".modal").on("hide.bs.modal", function(event) {
                  var idx = $(".modal:visible").length - 1; // raise backdrop after animation.
                  $(".modal-backdrop").hide();
                  $(".modal").hide();
                });
                $(".modal").on("hidden.bs.modal", function(e) {
                  if ($(".modal").hasClass("in")) {
                    $("body").addClass("modal-open");
                  }
                });
              });
            });
          }
          $(".carousel-close").click(() => {
            $(".carousel").html("");
            $(".carousel").hide();
          });
        } else {
          $(this)
            .find(".img-fluid")
            .removeClass("middle");
        }
      },
      () => {
        $(this)
          .find(".img-fluid")
          .css("opacity", 1);
      }
    );
  });
  $(function() {
    $(".carousel-close").click(() => {
      $(".carousel").hide();
    });
  });
})(jQuery); // End of use strict

const sendEmail = () => {
  const subject = "3910 Kinsale Road";
  const body = "Hi, I would like to make an appoitment to view the house.";

  window.open(`mailto:benaimjacob@gmail.com?subject=${subject}&body=${body}`);
};
