function day() {
      var sel = document.getElementById("f").selected;
      if (sel == true) {
            function give() {
                  var interval = setInterval(function () {
                        var currentDate = new Date();
                        if (currentDate.getHours() == 16 && currentDate.getDay() == 4 && currentDate.getMinutes() == 34)
                              window.location.href = "thursday f1.html"
                        else if (currentDate.getHours() == 16 && currentDate.getDay() == 4 && currentDate.getMinutes() == 35){
                              window.location.href = "thursday f2.html"
                              notif()
                        }
                        else if (currentDate.getHours() == 16 && currentDate.getDay() == 4 && currentDate.getMinutes() == 37)
                              window.location.href = "thursday f3.html"
                        else if (currentDate.getHours() == 16 && currentDate.getDay() == 4 && currentDate.getMinutes() == 38)
                              window.location.href = "thursday f4.html"
                        else (
                              window.location.href = "nolec.html"
                        )
                  }, 5000);
            }
            give()
      }
      else {
            console.log("Not my division")
      }
}
window.onload = day()
// window.onload=notif()
function notif() {
      Notification.requestPermission().then(perm => {
            if (perm === "granted") {
                  var notif = new Notification("Lunch Break", {
                        body: "Next lecture: Lifeskill"
                  }
                  )
            }
      })
}