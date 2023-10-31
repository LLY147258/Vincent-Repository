while (true) {
  sleep(5000);
  //视频浏览主线程
  var mainThread = threads.start(function () {
    var avisoButton = descContains("AVISO").classNameContains("android.view.View").findOne(100);
    descContains("AVISO").classNameContains("android.view.View").waitFor();
    // 在初始页面
    if (avisoButton) {
      idContains("mnu_title1").textContains("Заработать").classNameContains("android.widget.TextView").waitFor();
      var ЗаработатьButton = idContains("mnu_title1").textContains("Заработать").classNameContains("android.widget.TextView").findOne(100);
      // 找到Заработать标识，表示在初始页面
      if (ЗаработатьButton) {
        //查找YouTube按钮是否在当前页面，再次确认是否在当前页面
        var youtubeButton = textContains("YouTube").classNameContains("android.widget.TextView").findOne(100);
        //等待，直到控件出现
        textContains("YouTube").classNameContains("android.widget.TextView").waitFor();
        //存在YouTube按钮，点击视频播放
        if (youtubeButton) {
          main();
        } else {
          //不存在YouTube按钮，点击Заработать，重新找到
          toastLog("不存在YouTube按钮");
          //点击上一级按钮
          click(ЗаработатьButton.bounds().centerX() + random(-5, 5), ЗаработатьButton.bounds().centerY() + random(-5, 5));
          main();
        }
      } else {
        sleep(1000);
        toastLog("未找到Заработать标识，不在初始页面，重新刷新页");
        // 重新刷新页面
        sleep(2000);
        //流程重置
        resolveVideo();
      }
    } else {
      toastLog("在初始页面，但没有相关视频按钮，需要重新刷新页面");
      sleep(3000);
      //流程重置
      resolveVideo();
    }
  });

  for (i = 0; i <= 300; i++) {
    sleep(1000)
    if (i == 300) {
      toastLog("已运行" + i / 60 + "分钟")
      // 5分钟后中断主线程
      mainThread.interrupt();
    }
  }
  sleep(3000);
  //关闭标签
  closeLabel();
  sleep(5000);

  //跳转至网页浏览
  app.startActivity({
    packageName: "com.android.chrome",
    className: "org.chromium.chrome.browser.ChromeTabbedActivity",
    data: "https://aviso.bz/work-serf"

  });
  sleep(3000);
  //网页浏览主线程
  var mainThreadOfWebPage = threads.start(function () {
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
          var count = 0;
          while (true) {
            pageMain();
            count++;
            if (count == 5) {
              toastLog("结束");
              break;
            }
          }
        }
      }
    }
  });
}

// 主流程
function main() {
  while (true) {
    //观看前点击步骤
    clickToView();
    //判断是否无法播放
    unableToPlay();
    //可以播放进入观看视频
    watchVideo();
  }
}

//视频播放前两步点击步骤
function clickToView() {
  //视频播放点击按钮
  var button = textContains("https://www.youtube.com").classNameContains("android.widget.TextView").findOne(100);;
  if (button) {
    click(button.bounds().centerX() + random(-5, 5), button.bounds().centerY() + random(-5, 5));
    sleep(2000);
    var returned = textContains("Приступить к выполнению").classNameContains("android.widget.TextView").findOne(100);
    sleep(2000);
    if (returned) {
      toastLog("准备进入观看视频");
      click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
      sleep(4000);
    } else {
      //流程重置
      resolveVideo();
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
    //流程重置
    resolveVideo();
  } else {
    toastLog("可以播放");
  }
}

// 第一段视频播放完毕，判断播放按钮还是黄色字体出现
function isPlayButtonEstimate() {
  sleep(500);
  toastLog("判断播放按钮出现");
  sleep(500);
  var isPlayButton = textContains("播放").classNameContains("android.widget.Button").exists();
  toastLog(isPlayButton);
  if (isPlayButton == true) {
    toastLog("找到播放按钮");
  } else {
    toastLog("未找到播放按钮");
    //停顿时间
    sleep(1000);
    while (true) {
      isPlayButton = textContains("播放").classNameContains("android.widget.Button").exists();
      toastLog("找到播放按钮:" + isPlayButton);
      //停顿时间
      sleep(500);
      var isPlayOver = text("Поддержите видео лайком 👍").className("android.widget.TextView").exists();
      if (isPlayButton == true) {
        toastLog("已找到播放按钮，进行二次观看");
        break;
      } else if (isPlayOver == true) {
        sleep(500);
        back();
        toastLog("由网络延迟导致，现已找到黄色字体");
        break;
      } else {
        sleep(1500);
      }
    }
  }
}

// 观看视频
function watchVideo() {

  //等待视频第一次播放按钮出现进行下面操作
  textContains("播放").classNameContains("android.widget.Button").waitFor();
  //倒计时
  var countDown = idContains("tmr").classNameContains("android.widget.TextView").findOne(100);
  toastLog("倒计时：" + countDown.text() + "秒");
  sleep(500);
  //判断视频播放时间
  if (countDown.text() <= 30) {
    sleep(2000);
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
        var errorOne = idContains("succes-error").textContains("просмотра").exists();
        var errorTwo = id("succes-error").text("Время выполнения истекло").className("android.view.View").exists();
        if (isPlayOver == true) {
          toastLog("测试1");
          //观看完毕
          var playOver = text("Поддержите видео лайком 👍").className("android.widget.TextView").findOne(100);
          if (playOver) {
            toastLog("测试1完毕");
            sleep(500);
            back();
          } else {
            toastLog("未找到符合条件的控件");
          }
        } else if (errorOne || errorTwo) {
          resolveVideo();
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
    sleep(2500);
    back();
    sleep(1000);
    //刷新页面
    //流程重置
    resolveVideo();
  }
}

// 出现问题，流程重置
function resolveVideo() {
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
      //观看视频
      watchVideo();
    }
  }
}

// 关闭浏览器标签
function closeLabel() {
  sleep(3000);
  app.startActivity({
    packageName: "com.android.chrome",
    className: "org.chromium.chrome.browser.ChromeTabbedActivity",
    data: "https://aviso.bz/work-youtube"
  });
  sleep(5000)
  descContains("AVISO").classNameContains("android.view.View").waitFor();
  var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
  if (returned) {
    returned.click();
    sleep(3000);
    if (idContains("com.android.chrome:id/menu_button").descContains("自定义及控制").classNameContains("android.widget.ImageButton").findOnce()) {
      var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制").classNameContains("android.widget.ImageButton").findOnce();
      if (returned) {
        returned.click();
        sleep(3000);
        var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
        if (returned) {
          returned.click();
          sleep(3000);
          var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
          if (returned) {
            returned.click();
            sleep(3000)
            app.startActivity({
              packageName: "com.android.chrome",
              className: "org.chromium.chrome.browser.ChromeTabbedActivity",
              data: "https://aviso.bz/work-youtube"
            });
            sleep(5000)
            descContains("AVISO").classNameContains("android.view.View").waitFor();
          }
        }
      }
    } else {
      back()
      sleep(3000)
      var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
      returned.click()
      sleep(2000)
      var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制").classNameContains("android.widget.ImageButton").findOnce();
      if (returned) {
        returned.click();
        sleep(1500);
        var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
        if (returned) {
          returned.click();
          sleep(1500);
          var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
          if (returned) {
            returned.click();
            sleep(2000)
            app.startActivity({
              packageName: "com.android.chrome",
              className: "org.chromium.chrome.browser.ChromeTabbedActivity",
              data: "https://aviso.bz/work-youtube"
            });
            sleep()
            descContains("AVISO").classNameContains("android.view.View").waitFor();
          }
        }
      }
    }
  }
}

//网页浏览流程
function pageMain() {
  toastLog("准备浏览页面");
  var returnedList = idContains("start-serf").classNameContains("android.view.View").untilFind();
  for (var i = 0, len = returnedList.length; i < len; i++) {
    console.log(i);
    var flow1 = returnedList[i];
    click(flow1.bounds().centerX() - 80, flow1.bounds().centerY() + random(-5, 1));
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