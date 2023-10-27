importClass("java.net.InetAddress");
importClass("java.net.NetworkInterface");
importClass("java.net.Inet6Address");

var avisoButton = descContains("AVISO").classNameContains("android.view.View").findOne(100);
// 在初始页面
if (avisoButton) {
  var ЗаработатьButton = idContains("mnu_title1").textContains("Заработать").classNameContains("android.widget.TextView").findOne(100);
  // 找到Заработать标识，表示在初始页面
  if (ЗаработатьButton) {
    //查找YouTube按钮是否在当前页面，再次确认是否在当前页面
    var youtubeButton = textContains("YouTube").classNameContains("android.widget.TextView").findOne(100);
    //存在YouTube按钮，点击视频播放
    if (youtubeButton) {
      while (true) {
        //观看前点击步骤
        clickToView();
        //无法播放
        unableToPlay();
        // 进入视频界面，判断播放按钮出现
        isPlayButtonEstimate();
        //观看视频
        watchVideo();
        var button = textContains("https://www.youtube.com/").classNameContains("android.widget.TextView").findOne(100);
        if (!button) {
          break;
        }
      }
    } else {

      //不存在YouTube按钮，点击Заработать，重新找到
      toastLog("不存在YouTube按钮");
      //点击上一级按钮
      click(ЗаработатьButton.bounds().centerX() + random(-5, 5), ЗаработатьButton.bounds().centerY() + random(-5, 5));
      while (true) {
        //观看前点击步骤
        clickToView();
        toastLog("无法播放");
        unableToPlay();
        // 播放按钮存在判断
        isPlayButtonEstimate();
        //观看视频
        watchVideo();
        var button = textContains("https://www.youtube.com/").classNameContains("android.widget.TextView").findOne(100);
        if (!button) {
          break;
        }
      }
    }

  }
} else {
  toastLog("在初始页面，但没有相关视频按钮，需要重新刷新页面");
  sleep(3000);
  toastLog("重新刷新页面");
  // app.openUrl("https://aviso.bz/work-youtube");
  app.startActivity({
    packageName: "com.android.chrome",
    className: "org.chromium.chrome.browser.ChromeTabbedActivity",
    data: "https://aviso.bz/work-youtube"

  });
  sleep(3000);
  var isRussian = idContains("com.android.chrome:id/translate_infobar_tab_text").textContains("俄语").classNameContains("android.widget.TextView").findOne(100);
  if (isRussian) {
    click(isRussian.bounds().centerX() + random(-5, 5), isRussian.bounds().centerY() + random(-5, 5));
    sleep(2000);
    while (true) {
      //观看前点击步骤
      clickToView();
      //无法播放判断
      unableToPlay();
      isPlayButtonEstimate();
      //观看视频
      watchVideo();
      var button = textContains("https://www.youtube.com/").classNameContains("android.widget.TextView").findOne(100);
      if (!button) {
        break;
      }
    }
  }
}

//视频播放前两步点击步骤
function clickToView() {
  //视频播放点击按钮
  var button = textContains("https://www.youtube.com").classNameContains("android.widget.TextView").findOnce();
  if (button) {
    click(button.bounds().centerX() + random(-5, 5), button.bounds().centerY() + random(-5, 5));
    sleep(5000);
    var returned = textContains("Приступить к выполнению").classNameContains("android.widget.TextView").findOnce();
    if (returned) {
      toastLog("准备进入观看视频");
      returned.click();
      sleep(4000);
    } else {
      toastLog("重新刷新页面");
      sleep(3000);
      // app.openUrl("https://aviso.bz/work-youtube");
      app.startActivity({
        packageName: "com.android.chrome",
        className: "org.chromium.chrome.browser.ChromeTabbedActivity",
        data: "https://aviso.bz/work-youtube"

      });
      sleep(3000);
      var isRussian = idContains("com.android.chrome:id/translate_infobar_tab_text").textContains("俄语").classNameContains("android.widget.TextView").findOne(100);
      if (isRussian) {
        click(isRussian.bounds().centerX() + random(-5, 5), isRussian.bounds().centerY() + random(-5, 5));
        sleep(2000);
        while (true) {
          //观看前点击步骤
          clickToView();
          //无法播放判断
          unableToPlay();
          isPlayButtonEstimate();
          //观看视频
          watchVideo();
          var button = textContains("https://www.youtube.com/").classNameContains("android.widget.TextView").findOne(100);
          if (!button) {
            break;
          }
        }
      } else {
        toastLog("未找到符合条件的控件33333");
        sleep(3000);
        toastLog("重新刷新页面");
        // app.openUrl("https://aviso.bz/work-youtube");
        app.startActivity({
          packageName: "com.android.chrome",
          className: "org.chromium.chrome.browser.ChromeTabbedActivity",
          data: "https://aviso.bz/work-youtube"

        });
        sleep(3000);
        var isRussian = idContains("com.android.chrome:id/translate_infobar_tab_text").textContains("俄语").classNameContains("android.widget.TextView").findOne(100);
        if (isRussian) {
          click(isRussian.bounds().centerX() + random(-5, 5), isRussian.bounds().centerY() + random(-5, 5));
          sleep(2000);
          while (true) {
            //观看前点击步骤
            clickToView();
            //无法播放判断
            unableToPlay();
            isPlayButtonEstimate();
            //观看视频
            watchVideo();
            var button = textContains("https://www.youtube.com/").classNameContains("android.widget.TextView").findOne(100);
            if (!button) {
              break;
            }
          }
        }
      }
    }
  }
}

// 观看视频
function watchVideo() {
  //倒计时
  var countDown = idContains("tmr").classNameContains("android.widget.TextView").findOne(100);
  toastLog("倒计时：" + countDown.text() + "秒");
  sleep(2000);
  //判断视频播放时间
  if (countDown.text() <= 30) {
    sleep(5000);
    toastLog("视频小于30秒给予播放");
    // 存在播放按钮
    var play = textContains("播放").classNameContains("android.widget.Button").findOne(100);
    if (play) {
      sleep(1000);
      //点击播放按钮
      click(play.bounds().centerX() + random(-5, 5), play.bounds().centerY() + random(-5, 5));
      //    时间为0设置变量
      while (true) {
        var zero = id("tmr").text("0").className("android.widget.TextView").exists();
        if (zero == true) {
          break;
        }
      }
      // 判断时间为0，此时第一段视频已经播放完毕
      if (true) {
        sleep(2500);
        var isPlayOver = text("Поддержите видео лайком 👍").className("android.widget.TextView").exists();
        if (isPlayOver == true) {
          toastLog("测试1");
          //观看完毕
          var playOver = text("Поддержите видео лайком 👍").className("android.widget.TextView").findOne(100);
          if (playOver) {
            toastLog("测试1完毕");
            back();
          } else {
            toastLog("未找到符合条件的控件");
          }
        } else {
          // 出现二次点击
          toastLog("测试2");

          // 播放按钮存在判断
          isPlayButtonEstimate();
          //点击播放按钮
          click(play.bounds().centerX() + random(-5, 5), play.bounds().centerY() + random(-5, 5));
          while (true) {
            var zero = id("tmr").text("0").className("android.widget.TextView").exists();
            if (zero == true) {
              break;
            }
          }
          sleep(2500);
          toastLog("测试2完毕");
          //软件机制返回两次
          back();
          sleep(500);
          back();
        }
      }

    } else {
      toastLog("未找到符合条件的控件222222");
    }
  } else {
    toastLog("视频大于30秒不予播放");
    sleep(2000);
    back();
    //刷新页面
    // app.openUrl("https://aviso.bz/work-youtube");
    app.startActivity({
      packageName: "com.android.chrome",
      className: "org.chromium.chrome.browser.ChromeTabbedActivity",
      data: "https://aviso.bz/work-youtube"

    });
    // 停顿时间
    sleep(3000);
    var isRussian = idContains("com.android.chrome:id/translate_infobar_tab_text").textContains("俄语").classNameContains("android.widget.TextView").findOne(100);
    if (isRussian) {
      click(isRussian.bounds().centerX() + random(-5, 5), isRussian.bounds().centerY() + random(-5, 5));
      sleep(2000);
    } else {
      toastLog("未找到符合条件的控件33333");
    }
  }
}

// 无法播放判断
function unableToPlay() {
  sleep(3000);
  var isPlay = textContains("视频无法播放").classNameContains("android.widget.TextView").exists();
  // 不能播放
  if (isPlay == true) {
    toastLog("视频无法播放");
    back();
    //刷新页面
    app.startActivity({
      packageName: "com.android.chrome",
      className: "org.chromium.chrome.browser.ChromeTabbedActivity",
      data: "https://aviso.bz/work-youtube"

    });
    sleep(3000);
    var isRussian = idContains("com.android.chrome:id/translate_infobar_tab_text").textContains("俄语").classNameContains("android.widget.TextView").findOne(100);
    if (isRussian) {
      click(isRussian.bounds().centerX() + random(-5, 5), isRussian.bounds().centerY() + random(-5, 5));
      sleep(2000);
      while (true) {
        //观看前点击步骤
        clickToView();
        //无法播放判断
        unableToPlay();
        isPlayButtonEstimate();
        //观看视频
        watchVideo();
        var button = textContains("https://www.youtube.com/").classNameContains("android.widget.TextView").findOne(100);
        if (!button) {
          break;
        }
      }
    } else {
      toastLog("未找到符合条件的控件33333");
    }
  } else {
    toastLog("可以播放");
  }
}

// 进入视频界面，判断播放按钮出现
function isPlayButtonEstimate() {
  toastLog("判断播放按钮出现");
  var isPlayButton = textContains("播放").classNameContains("android.widget.Button").exists();
  toastLog(isPlayButton);
  if (isPlayButton == true) {
    toastLog("找到播放按钮1");
  } else {
    toastLog("未找到播放按钮");
    //停顿时间
    sleep(5000);
    while (true) {
      isPlayButton = textContains("播放").classNameContains("android.widget.Button").exists();
      toastLog("找到播放按钮:" + isPlayButton);
      //停顿时间
      sleep(1500);
      var isPlayOver = text("Поддержите видео лайком 👍").className("android.widget.TextView").exists();
      if (isPlayButton == true) {
        toastLog("找到播放按钮2");
        break;
      } else if (isPlayOver == true) {
        toastLog("测试1完毕");
        sleep(500);
        back();
        break;
      } else {
        sleep(1500);
      }
    }
  }
}

function getIntranetIP() {
  // 获取内网IP地址
  let networkInterfaces = NetworkInterface.getNetworkInterfaces();
  while (networkInterfaces.hasMoreElements()) {
    let networkInterface = networkInterfaces.nextElement();
    let inetAddresses = networkInterface.getInetAddresses();
    while (inetAddresses.hasMoreElements()) {
      let inetAddress = inetAddresses.nextElement();
      if (inetAddress instanceof Inet6Address) {
        continue;
      }
      let ip = inetAddress.getHostAddress();
      log(ip);
      if (!"127.0.0.1".equals(ip)) {
        return inetAddress.getHostAddress();
      }
    }
  }
}
function getPublicData() {
  //获取公网ip地址
  let r = http.get("http://pv.sohu.com/cityjson?ie=utf-8");
  let data = r.body.string();
  eval(data);
  return {
    ip: returnCitySN.cip,
    cityName: returnCitySN.cname,
  };
}

setInterval(function () {
  let intranetIP = getIntranetIP();
  let publicData = getPublicData();
  let data = util.format("所在城市:" + publicData.cityName, "内网ip" + intranetIP, "外网ip" + publicData.ip);
  toastLog(data);
}, 3600000);