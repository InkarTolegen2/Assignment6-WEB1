$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#title").text("Welcome to My Portfolio");
  $(".headline").html("<b>Future Software Engineer</b>");
  $("p").css("color", "gray");

  $("#darkBtn").click(function () {
    $("body").css({ "background-color": "#222", "color": "white" });
  });

  $("#lightBtn").click(function () {
    $("body").css({ "background-color": "white", "color": "black" });
  });

  $("#hideBtn").click(function () {
    $("#hideable").hide();
  });

  $("#showBtn").click(function () {
    $("#hideable").show();
  });

  $("#toggleBtn").click(function () {
    $("#hideable").toggle();
  });

  $("#fadeInBtn").click(function () {
    $("#images").fadeIn(1000);
  });

  $("#fadeOutBtn").click(function () {
    $("#images").fadeOut(1000);
  });

  $("#fadeToggleBtn").click(function () {
    $("#images").fadeToggle(1000);
  });

  $(".panel-title").click(function () {
    $(this).next(".panel").slideToggle(500);
  });

  $("#openAllBtn").click(function () {
    $(".panel").slideDown(500);
  });

  $("#closeAllBtn").click(function () {
    $(".panel").slideUp(500);
  });

  $("#addSkillBtn").click(function () {
    const skill = $("#skillInput").val().trim();
    if (skill === "") {
      $("#skillError").text("Skill cannot be empty!");
      return;
    }
    $("#skillError").text("");
    $("#skillList").append("<li>" + skill + "</li>");
    $("#skillInput").val("");
  });

  $("#prependSkillBtn").click(function () {
    const skill = $("#skillInput").val().trim();
    if (skill === "") {
      $("#skillError").text("Skill cannot be empty!");
      return;
    }
    $("#skillError").text("");
    $("#skillList").prepend("<li>" + skill + "</li>");
    $("#skillInput").val("");
  });

  $("#removeSkillBtn").click(function () {
    const skill = $("#skillInput").val().trim().toLowerCase();

    if (skill === "") {
      $("#skillList li:last").remove();
      return;
    }

    const $match = $("#skillList li").filter(function () {
      return $(this).text().toLowerCase() === skill;
    });

    if ($match.length === 0) {
      $("#skillError").text("Skill not found!");
      return;
    }

    $("#skillError").text("");
    $match.first().remove();
    $("#skillInput").val("");
  });

  $("#changeLinkBtn").click(function () {
    $("#socialLink")
      .attr("href", "https://www.linkedin.com")
      .text("LinkedIn");
    $("#linkInfo").text($("#socialLink").attr("href"));
  });

  $("#nameInput").on("input", function () {
    $("#nameOutput").text($(this).val());
  });

  $("#emailInput").on("input", function () {
    $("#emailOutput").text($(this).val());
  });

  let skillsAnimated = false;

  $("#animateBtn").click(function () {
    if (!skillsAnimated) {
      $(".skill-fill").each(function () {
        $(this).stop().animate({ width: $(this).data("level") + "%" }, 1000);
      });
      $(this).text("Reset Skills");
    } else {
      $(".skill-fill").stop().animate({ width: 0 }, 1000);
      $(this).text("Animate My Skills");
    }
    skillsAnimated = !skillsAnimated;
  });
});