function day() {
      var sel = document.getElementById("f").selected;
      if (sel == true) {
            function give() {
                  var interval = setInterval(function () {
                        var currentDate = new Date();
                        if (currentDate.getDay() == 1 && currentDate.getHours() == 9)
                              window.location.href = "monday f1.html"
                        else if (currentDate.getDay() == 1 && currentDate.getHours() == 10)
                              window.location.href = "monday f2.html"
                        else if (currentDate.getDay() == 1 && currentDate.getHours() == 11 && currentDate.getMinutes() < 11)
                              window.location.href = "monday f3.html"
                        else if (currentDate.getDay() == 1 && currentDate.getHours() == 11 && currentDate.getMinutes() >= 10 || currentDate.getHours() == 12 && currentDate.getMinutes() < 11)
                              window.location.href = "monday f4.html"
                        else if (currentDate.getDay() == 1 && currentDate.getHours() == 12 && currentDate.getMinutes() >= 10)
                              window.location.href = "monday f5.html"
                        else if (currentDate.getDay() == 1 && currentDate.getHours() == 1 || currentDate.getHours() == 2)
                              window.location.href = "monday f6.html"
                        else if (currentDate.getDay() == 1 && currentDate.getHours() < 9)
                              window.location.href = "upcoming mon.html"
                        else (
                              window.location.href = "nolec.html"
                        )
                  }, 1000);
            }
            give()
            // function give1() {
            //       var timeout = setTimeout(function () {
            //             var currentDate = new Date();
            //             if (currentDate.getDay() == 1 && currentDate.getHours() == 9)
            //                   window.location.href = "monday f1.html"
            //             else if (currentDate.getDay() == 1 && currentDate.getHours() == 10)
            //                   window.location.href = "monday f2.html"
            //             else if (currentDate.getDay() == 1 && currentDate.getHours() == 11 && currentDate.getMinutes() < 11)
            //                   window.location.href = "monday f3.html"
            //             else if (currentDate.getDay() == 1 && currentDate.getHours() == 11 && currentDate.getMinutes() >= 10 || currentDate.getHours() == 12 && currentDate.getMinutes() < 11)
            //                   window.location.href = "monday f4.html"
            //             else if (currentDate.getDay() == 1 && currentDate.getHours() == 12 && currentDate.getMinutes() >= 10)
            //                   window.location.href = "monday f5.html"
            //             else if (currentDate.getDay() == 1 && currentDate.getHours() == 1 || currentDate.getHours() == 2)
            //                   window.location.href = "monday f6.html"
            //             else if (currentDate.getDay() == 1 && currentDate.getHours() < 9)
            //                   window.location.href = "upcoming mon.html"
            //             else (
            //                   window.location.href = "nolec.html"
            //             )
            //       }, 1000);
            // }

            // window.onload = give1()
      }
      else {
            console.log("Not my division")
      }
      console.log("hi");
}

// window.onload=day()
// window.onload=give()
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