function day() {
      var sel = document.getElementById("f").selected;
      if (sel == true) {
            function give() {
                  var interval = setInterval(function () {
                        var currentDate = new Date();
                        if (currentDate.getDay() == 6 && currentDate.getHours() == 16)
                              window.location.href = "monday f1.html"
                        else if (currentDate.getDay() == 4 && currentDate.getHours() == 16) {
                              window.location.href = "monday f2.html"
                        }
                        else if (currentDate.getDay() == 4 && currentDate.getHours() == 16)
                              window.location.href = "monday f3.html"
                        else if (currentDate.getDay() == 4 && currentDate.getHours() == 16)
                              window.location.href = "monday f4.html"
                        else if (currentDate.getDay() == 4 && currentDate.getHours() == 16)
                              window.location.href = "upcoming mon.html"
                        else (
                              window.location.href = "nolec.html"
                        )
                  }, 10000);
            }
            give()
      }
      else {
            console.log("Not my division")
      }
}
// window.onload = day()
// // window.onload=notif()
// function notif() {
//       Notification.requestPermission().then(perm => {
//             if (perm === "granted") {
//                   var notif = new Notification("Lunch Break", {
//                         body: "Next lecture: Lifeskill"
//                   }
//                   )
//             }
//       })
// }