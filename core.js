var per_repeat = function() {
  return parseInt($("#per_repeat").val());
};

var total_repeats = function() {
  return parseInt($("#total_repeats").val());
};

var row = function() {
  return parseInt($("#row").text());
};

var repeats = function() {
  return parseInt($("#repeats").text());
};

var locked = function() {
  return $("#lock").hasClass("btn-info");
};

$("#new_project").on("submit", function(event) {
  event.preventDefault();

  $("#new_project").toggleClass("hidden");
  $("#counter").toggleClass("hidden");
  if($("#name").val()) {
    $("#title").text($("#name").val());
  };
  if($("#per_repeat").val()) {
    $("#per_repeat_info").text($("#per_repeat").val());
  };
  if($("#total_repeats").val()) {
    $("#total_repeats_info").text($("#total_repeats").val());
  };
  if($("#needle").val()) {
    $("#needle_info").text($("#needle").val());
  };
  if($("#hook").val()) {
    $("#hook_info").text($("#hook").val());
  };
});

$("#add").on("click", function(event) {
  event.preventDefault();

  if((row() >= per_repeat()) && locked()) {
    $("#row").text(0);
    $("#repeats").text(repeats() + 1);

    if(repeats() == total_repeats()) {
      $("#repeats").toggleClass("text-success");
    };
  } else {
    $("#row").text(row() + 1);
  };
});

$("#subtract").on("click", function(event) {
  event.preventDefault();
  if(repeats() > 0 || (repeats() == 0 && row() > 0) ) {
    if((row() == 0) && per_repeat != 0) {
      $("#row").text(per_repeat());
      $("#repeats").text(repeats() - 1);
    } else {
      $("#row").text(row() - 1);
    };
  };
});

$("#lock").on("click", function() {
  event.preventDefault();

  $("#lock").toggleClass("btn-info")
  $("#lock").toggleClass("btn-warning")
  $("#lock i").toggleClass("fa-lock")
  $("#lock i").toggleClass("fa-unlock-alt")
});
