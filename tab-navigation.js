$(function () {
  $("#home-link").click(function (event) {
    $("nav > a").removeClass("active");
    $("#home-link").addClass("active");

    $("section").addClass("hidden");
    $("section.home").removeClass("hidden");
  });

  $("#portfolio-link").click(function (event) {
    $("nav > a").removeClass("active");
    $("#portfolio-link").addClass("active");

    $("section").addClass("hidden");
    $("section.portfolio").removeClass("hidden");
  });

  $("#contact-link").click(function (event) {
    $("nav > a").removeClass("active");
    $("#contact-link").addClass("active");

    $("section").addClass("hidden");
    $("section.contact").removeClass("hidden");
  });
});
