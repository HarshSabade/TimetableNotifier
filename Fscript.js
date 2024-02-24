function day() {
      var sel = document.getElementById("f").selected;
      if (sel == true) {
            function give() {
                  var interval = setInterval(function () {
                        var currentDate = new Date();
                        if (currentDate.getHours() ==16  && currentDate.getDay() == 6)
                              window.location.href = "monday f1.html"
                        else if (currentDate.getDay() == 4 && currentDate.getHours() == 16)
                              window.location.href = "monday f2.html"
                        else if (currentDate.getDay() == 4 && currentDate.getHours() == 16)
                              window.location.href = "monday f3.html"
                        else if (currentDate.getDay() == 4 && currentDate.getHours() == 16)
                              window.location.href = "monday f4.html"
                        else if (currentDate.getDay() == 4 && currentDate.getHours() == 16)
                              window.location.href = "upcoming mon.html"
                        else (
                              window.location.href = "nolec.html"
                        )
                  }, 1000);
            }
            give()
      }
      else {
            console.log("Not my division")
      }
}