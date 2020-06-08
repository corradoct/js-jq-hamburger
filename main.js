$('div.header-right > a[href]').click(
  function () {
    $('div.hamburger-menu').addClass('active');
  }
);

$('a[href].close').click(
  function () {
    $('div.hamburger-menu').removeClass('active');
  }
);
