$(document).ready(function () {
  $("#mailingCheckbox").change(function () {
    if (this.checked) {
      $("#mailingAddress").val($("#streetAddress").val());
      $("#mailingAddress2").val($("#streetAddress2").val());
      $("#mailingCity").val($("#city").val());
      $("#mailingZip").val($("#zip").val());
    } else {
      $("#mailingAddress").val("");
      $("#mailingAddress2").val("");
      $("#mailingCity").val("");
      $("#mailingZip").val("");
    }
  });

  $("#myForm").submit(function (event) {
    var requiredFields = [
      "firstName",
      "lastName",
      "streetAddress",
      "city",
      "zip",
      "mailingAddress",
      "mailingCity",
      "mailingZip",
      "phone",
      "email",
    ];
    var missingFields = [];

    for (var i = 0; i < requiredFields.length; i++) {
      var fieldValue = $("#" + requiredFields[i]).val();
      if (!fieldValue) {
        missingFields.push(requiredFields[i]);
      }
    }

    if (missingFields.length > 0) {
      event.preventDefault();
      alert("Please fill in the required fields: " + missingFields.join(", "));
      missingFields.forEach(function (field) {
        $("#" + field).addClass("missing-field");
      });
    }
  });

  $("#cancelButton").click(function () {
    $("input").val("");
    $("input").removeClass("missing-field");
    $("#mailingCheckbox").prop("checked", false);
  });
});
