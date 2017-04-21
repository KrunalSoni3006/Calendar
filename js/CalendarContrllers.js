  var Months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


  angular.module("Calendar", []).controller("CalendarCTRL", function() {
    var CalendarAccess = this;
    var x = Months[new Date().getMonth()] + " " + new Date().getFullYear();
    CalendarAccess.CurrentHeader = x;
    CalendarAccess.PrevBtn = function() {
      CheckNextAction(CalendarAccess.CurrentHeader);
    };
    CalendarAccess.NextBtn = function() {
      CheckPrevAction(CalendarAccess.CurrentHeader);
    };

    CheckNextAction = function(Value) {
      var pattern = new RegExp("^\d");
      if (!pattern.test(Value)) {
        var year = Value.split(" ")[1];
        var Month = Value.split(" ")[0];
        if ($.inArray(Month, Months) != -1 && $.inArray(Month, Months) == 11) {
          CalendarAccess.CurrentHeader = Months[0] + " " + (parseInt(year) + 1);
        } else {
          CalendarAccess.CurrentHeader = Months[$.inArray(Month, Months) + 1] + " " + year;
        }
      }
    }

  });
