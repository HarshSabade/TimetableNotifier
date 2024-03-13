function day() {
      var sel = document.getElementById("f").selected;
      if (sel == true) {
            function give() {
                  var interval = setInterval(function () {
                        var currentDate = new Date();
                        // For Monday
                        if (currentDate.getDay() == 1 && currentDate.getHours() < 9)
                              window.location.href = "upcoming mon.html"
                        else if (currentDate.getDay() == 1 && currentDate.getHours() == 9)
                              window.location.href = "monday f1.html"
                        else if (currentDate.getDay() == 1 && currentDate.getHours() == 10)
                              window.location.href = "monday f2.html"
                        else if (currentDate.getDay() == 1 && currentDate.getHours() == 11 && currentDate.getMinutes() < 11)
                              window.location.href = "monday f3.html"
                        else if (currentDate.getDay() == 1 && currentDate.getHours() == 11 && currentDate.getMinutes() >= 10 || currentDate.getHours() == 12 && currentDate.getMinutes() < 11)
                              window.location.href = "monday f4.html"
                        else if (currentDate.getDay() == 1 && currentDate.getHours() == 12 && currentDate.getMinutes() >= 10)
                              window.location.href = "monday f5.html"
                        else if (currentDate.getDay() == 1 && currentDate.getHours() == 13 || currentDate.getHours() == 14)
                              window.location.href = "monday f6.html"
                        else if (currentDate.getDay() == 1 && currentDate.getHours() == 15 || currentDate.getHours() == 16)
                              window.location.href = "monday f7.html"
                        // For Tuesday
                        else if (currentDate.getDay() == 2 && currentDate.getHours() < 9)
                              window.location.href = "upcoming tue.html"
                        else if (currentDate.getDay() == 2 && currentDate.getHours() == 9 || currentDate.getHours() == 10)
                              window.location.href = "tuesday f1.html"
                        else if (currentDate.getDay() == 2 && currentDate.getHours() == 11 && currentDate.getMinutes() < 11)
                              window.location.href = "tuesday f2.html"
                        else if (currentDate.getDay() == 2 && currentDate.getHours() == 11 && currentDate.getMinutes() >= 10 || currentDate.getHours() == 12 || currentDate.getHours() == 13 && currentDate.getMinutes() < 11)
                              window.location.href = "tuesday f3.html"
                        else if (currentDate.getDay() == 2 && currentDate.getHours() == 13 && currentDate.getMinutes() >= 10)
                              window.location.href = "tuesday f4.html"
                        else if (currentDate.getDay() == 2 && currentDate.getHours() == 14)
                              window.location.href = "tuesday f5.html"
                        else if (currentDate.getDay() == 2 && currentDate.getHours() == 15)
                              window.location.href = "tuesday f6.html"
                        else if (currentDate.getDay() == 2 && currentDate.getHours() == 16)
                              window.location.href = "tuesday f7.html"
                        // For Wednesday
                        else if (currentDate.getDay() == 3 && currentDate.getHours() < 9)
                              window.location.href = "upcoming wed.html"
                        else if (currentDate.getDay() == 3 && currentDate.getHours() == 9)
                              window.location.href = "wednesday f1.html"
                        else if (currentDate.getDay() == 3 && currentDate.getHours() == 10)
                              window.location.href = "wednesday f2.html"
                        else if (currentDate.getDay() == 3 && currentDate.getHours() == 11 && currentDate.getMinutes() < 11)
                              window.location.href = "wednesday f3.html"
                        else if (currentDate.getDay() == 3 && currentDate.getHours() == 11 && currentDate.getMinutes() >= 10 || currentDate.getHours() == 12 && currentDate.getMinutes() < 11)
                              window.location.href = "wednesday f4.html"
                        else if (currentDate.getDay() == 3 && currentDate.getHours() == 12 && currentDate.getMinutes() >= 10)
                              window.location.href = "wednesday f5.html"
                        else if (currentDate.getDay() == 3 && currentDate.getHours() == 13 || currentDate.getHours() == 14)
                              window.location.href = "wednesday f6.html"
                        else if (currentDate.getDay() == 3 && currentDate.getHours() == 15 || currentDate.getHours() == 16)
                              window.location.href = "wednesday f7.html"
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
      console.log("hi");
}
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