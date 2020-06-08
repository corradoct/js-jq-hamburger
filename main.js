$('i.fa-bars').click(
  function () {
    $('div.hamburger-menu').addClass('active');
  }
);

$('a[href].close').click(
  function () {
    $('div.hamburger-menu').removeClass('active');
  }
);
