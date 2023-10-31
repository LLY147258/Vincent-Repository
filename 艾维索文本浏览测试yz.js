toastLog("程序开始");
var avisoButton = descContains("AVISO").classNameContains("android.view.View").findOne(100);
descContains("AVISO").classNameContains("android.view.View").waitFor();
// 在初始页面
if (avisoButton) {
  var ЗаработатьButton = idContains("mnu_title1").textContains("Заработать").classNameContains("android.widget.TextView").findOne(100);
  // 找到Заработать标识，表示在初始页面
  if (ЗаработатьButton) {
    text("Серфинг").className("android.widget.TextView").waitFor();
    var СерфингButton = text("Серфинг").className("android.widget.TextView").findOne(100);
    if (СерфингButton) {
      sleep(500);
      // 网页浏览主方法
      while (true) {
        pageMain();
      }
    }
  }
}

function pageMain() {
  toastLog("准备浏览页面");
  var returnedList = idContains("start-serf").classNameContains("android.view.View").untilFind();
  for (var i = 0, len = returnedList.length; i < len; i++) {
    console.log(i);
    var flow1 = returnedList[i];
    click(flow1.bounds().centerX()-80, flow1.bounds().centerY() + random(-5, 1));
    sleep(1500);
    var flow2 = textContains("Приступить").classNameContains("android.widget.TextView").findOnce();
    sleep(1500);
    toastLog(flow2);
    if (flow2) {
      click(flow2.bounds().centerX() + random(-5, 5), flow2.bounds().centerY() + random(-5, 5));
      textContains("Подтвердить просмотр").classNameContains("android.widget.TextView").waitFor();
      var browseOver = textContains("Подтвердить просмотр").classNameContains("android.widget.TextView").findOne(100);
      sleep(1500);
      click(browseOver.bounds().centerX() + random(-5, 5), browseOver.bounds().centerY() + random(-5, 5));
      sleep(1500);
      back();
      sleep(1500);
      back();
    }
  }
}