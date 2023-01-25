   // function content() {
    //   return `今天星期${kit.getWeek()}<br>距离星期4还有<br>${todayToThursday()}天,V我${50/(todayToThursday()+1)}`;
    // }
    // function todayToThursday() {
    //   let formedThursday =
    //     kit.getWeek() - 4 > 0 ? 11 : 4
    //   let waitDay = formedThursday - kit.getWeek();
    //   return waitDay;
    // }
    // (function () {
    //   findId("content").innerHTML = content();
    //   sleep(2000)
    //     .then(() => {
    //       if (todayToThursday()){
    //         window.location = "https://www.bkchina.cn/";
    //       }
    //       else{
    //         window.location = "https://www.kfchk.com/index.html"
    //       }
    //     })
    //     .catch((err) => {
    //       log(err);
    //     });
    // })();