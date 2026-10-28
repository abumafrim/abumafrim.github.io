$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);

    // Scrollspy decides which section you are in by comparing scroll position
    // against the very top of the viewport. The navbar is fixed over that top,
    // so a heading you have just scrolled to sits below the line scrollspy is
    // watching, and the section above it stays highlighted. Offset by the
    // navbar's own height, measured rather than hardcoded: it grows when the
    // links wrap on a narrow screen.
    var scrollspyOffset = function () {
      return ($("#navbar").outerHeight() || 0) + 20;
    };
    $("body").scrollspy({
      target: navSelector,
      offset: scrollspyOffset(),
    });

    // A section can only be highlighted if the page scrolls far enough for its
    // heading to reach the top. When the last sections are short the page runs
    // out of scroll first, and scrollspy then pins the final item no matter
    // what you are reading: on the CV, Research Interests could never light up.
    // Add exactly the room that is missing, and nothing at all when the page
    // is already long enough.
    var $spacer = $('<div class="toc-scroll-spacer" aria-hidden="true"></div>');
    $spacer.appendTo($myNav.closest(".row").find(".post").last());
    var padForLastSection = function () {
      $spacer.height(0);
      var ids = $myNav
        .find("a[href^='#']")
        .map(function () {
          return document.getElementById($(this).attr("href").slice(1));
        })
        .get();
      if (!ids.length) return;
      var lastTop = $(ids[ids.length - 1]).offset().top;
      // the scroll height the page needs for that heading to reach the top
      var reach = lastTop - scrollspyOffset() + $(window).height() + 1;
      $spacer.height(Math.max(0, Math.ceil(reach - $(document).height())));
    };

    var refreshToc = function () {
      var spy = $("body").data("bs.scrollspy");
      if (!spy) return;
      spy._config.offset = scrollspyOffset();
      padForLastSection();
      $("body").scrollspy("refresh");
    };
    refreshToc();
    $(window).on("resize", refreshToc);
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
