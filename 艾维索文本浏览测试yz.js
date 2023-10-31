toastLog("开始");
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
      sleep(2000);
      // 网页浏览主方法
      pageMain();
    }
  }
}

function pageMain() {
  toastLog("开始浏览页面");
  var returnedList = idContains("start-serf").classNameContains("android.view.View").untilFind();
  for (var i = 0, len = returnedList.length; i < len; i++) {
    console.log(i);
    var returned = returnedList[i];
    click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
    sleep(1500);
    // textContains("Приступить").classNameContains("android.widget.TextView").waitFor();
    var isПриступитьButton = textContains("Приступить к просмотру").classNameContains("android.widget.TextView").findOnce();
    click(isПриступитьButton.bounds().centerX() + random(-5, 5), isПриступитьButton.bounds().centerY() + random(-5, 5));
    textContains("Подтвердить просмотр").classNameContains("android.widget.TextView").waitFor();
    var browseOver = textContains("Подтвердить просмотр").classNameContains("android.widget.TextView").findOne(100);
    click(browseOver.bounds().centerX() + random(-5, 5), browseOver.bounds().centerY() + random(-5, 5));
    sleep(1500);
    back();
    sleep(500);
    back();
  }
}