//脚本ID
var script_id = "AVISO99928752";
var profit = 0;
var 看视频_time = 420;
var 冲浪_time = 180;
console.show();
sleep(300);
var biaoti = threads.start(function () {
    var i = 0
    while (true) {
        sleep(1000)
        console.setTitle("===>初始化已耗时：" + i + "秒")
        i++;
    }
});
console.setSize(device.width, 200);
//初始化
while (true) {
    var returned = descContains("settings").classNameContains("android.view.View").findOnce();
    if (returned) {
        var Good = idContains("new-money-ballans").classNameContains("android.widget.TextView").findOnce()
        if (Good) {
            var ii = idContains("new-money-ballans").classNameContains("android.widget.TextView").findOne();
            var i = ii.text()
            var w = i.indexOf(" руб.");
            var 全局_good = i.substring(0, w)
            break;
        } else {
            while (true) {
                var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                if (returned) {
                    break;
                } else {
                    var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                    if (returned) {
                        returned.click();
                        sleep(500);
                    } else {
                        var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                        if (returned) {
                            returned.click();
                            sleep(500);
                        } else {
                            var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                            if (returned) {
                                returned.click();
                                sleep(500);
                            } else {
                                var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                if (returned) {
                                    returned.click();
                                    break;
                                } else {
                                    app.startActivity({
                                        packageName: "com.android.chrome",
                                        className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                        data: "https://aviso.bz/work-youtube"
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        launchApp("Chrome")
        sleep(3000)
        var returned = descContains("settings").classNameContains("android.view.View").findOnce();
        if (returned) {
            sleep(500)
        } else {
            while (true) {
                var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                if (returned) {
                    break;
                } else {
                    var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                    if (returned) {
                        returned.click();
                        sleep(500);
                    } else {
                        var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                        if (returned) {
                            returned.click();
                            sleep(500);
                        } else {
                            var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                            if (returned) {
                                returned.click();
                                sleep(500);
                            } else {
                                var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                if (returned) {
                                    returned.click();
                                    break;
                                } else {
                                    app.startActivity({
                                        packageName: "com.android.chrome",
                                        className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                        data: "https://aviso.bz/work-youtube"
                                    });
                                }
                            }
                        }
                    }
                }
            }
            app.startActivity({
                packageName: "com.android.chrome",
                className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                data: "https://aviso.bz/work-youtube"
            });
            text("AVISO").className("android.widget.TextView").waitFor();
            var returned = textContains("Вход в аккаунт").classNameContains("android.widget.TextView").findOnce();
            if (returned) {
                getAccountAndPwd()
                sleep(10000)
                while (true) {
                    var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                    if (returned) {
                        break;
                    } else {
                        var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                        if (returned) {
                            returned.click();
                            sleep(500);
                        } else {
                            var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                            if (returned) {
                                returned.click();
                                sleep(500);
                            } else {
                                var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                                if (returned) {
                                    returned.click();
                                    sleep(500);
                                } else {
                                    var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                    if (returned) {
                                        returned.click();
                                        break;
                                    } else {
                                        app.startActivity({
                                            packageName: "com.android.chrome",
                                            className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                            data: "https://aviso.bz/work-youtube"
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
                app.startActivity({
                    packageName: "com.android.chrome",
                    className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                    data: "https://aviso.bz/work-youtube"
                });
            } else {
                sleep(500)
            }
            text("AVISO").className("android.widget.TextView").waitFor();

        }
    }
}
//初始化完成
toastLog(全局_good)
biaoti.interrupt();
console.setTitle("初始化完成")
function 点击_youtube刷新() {
    while (true) {
        var 主页_ = descContains("settings").classNameContains("android.view.View").findOnce()
        if (主页_) {
            sleep(1000)
            var 菜单_youtube = descContains("YouTube").classNameContains("android.view.View").findOnce();
            if (菜单_youtube) {
                菜单_youtube.click();
                sleep(5000);
                break;
            } else {
                var 菜单 = idContains("mnu_title1").textContains("Заработать").className("android.widget.TextView").findOnce()
                if (菜单) {
                    菜单.click();
                    sleep(1000);
                    var 菜单_youtube = descContains("YouTube").classNameContains("android.view.View").findOnce();
                    if (菜单_youtube) {
                        sleep(500)
                    } else {
                        if (菜单) {
                            菜单.click();
                        } else {
                            sleep(500);
                        }
                    }
                } else {
                    sleep(2000)
                    var 起点_横坐标 = (device.width / 4) * 3;
                    var 起点_纵坐标 = +device.height / 4;
                    var 终点_横坐标 = (device.width / 4) * 3;
                    var 终点_纵坐标 = (device.height / 6) * 5;
                    swipe(起点_横坐标, 起点_纵坐标, 终点_横坐标, 终点_纵坐标, 1000);
                    sleep(5000);
                    var 菜单_youtube = descContains("YouTube").classNameContains("android.view.View").findOnce();
                    if (菜单_youtube) {
                        sleep(500)
                    } else {
                        var 菜单 = idContains("mnu_title1").textContains("Заработать").className("android.widget.TextView").findOnce()
                        if (菜单) {
                            菜单.click();
                            sleep(1000);
                            var 菜单_youtube = descContains("YouTube").classNameContains("android.view.View").findOnce();
                            if (菜单_youtube) {
                                sleep(500)
                            } else {
                                if (菜单) {
                                    菜单.click();
                                } else {
                                    sleep(500);
                                }
                            }
                        } else {
                            while (true) {
                                var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                                if (returned) {
                                    break;
                                } else {
                                    var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                                    if (returned) {
                                        returned.click();
                                        sleep(500);
                                    } else {
                                        var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                                        if (returned) {
                                            returned.click();
                                            sleep(500);
                                        } else {
                                            var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                                            if (returned) {
                                                returned.click();
                                                sleep(500);
                                            } else {
                                                var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                                if (returned) {
                                                    returned.click();
                                                    break;
                                                } else {
                                                    app.startActivity({
                                                        packageName: "com.android.chrome",
                                                        className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                                        data: "https://aviso.bz/work-youtube"
                                                    });
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }
        } else {
            app.startActivity({
                packageName: "com.android.chrome",
                className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                data: "https://aviso.bz/work-youtube"
            });
            descContains("settings").classNameContains("android.view.View").waitFor();
        }

    }
}
for (ii_1 = 1; ii_1 < 999999999999999999999999999999; ii_1++) {
    try {
        while (true) {
            var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
            if (returned) {
                break;
            } else {
                var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                if (returned) {
                    returned.click();
                    sleep(500);
                } else {
                    var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                    if (returned) {
                        returned.click();
                        sleep(500);
                    } else {
                        var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                        if (returned) {
                            returned.click();
                            sleep(500);
                        } else {
                            var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                            if (returned) {
                                returned.click();
                                break;
                            } else {
                                app.startActivity({
                                    packageName: "com.android.chrome",
                                    className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                    data: "https://aviso.bz/work-youtube"
                                });
                            }
                        }
                    }
                }
            }
        }
        console.setTitle("开始运行==>获取余额")
        //任务-接取跳转到视频页+播放+返回+主页初始化
        var tasks = threads.start(function () {
            // 获取平台账密
            function getAccountAndPwd() {
                var url = "http://api.fairy-pig.com/gc/account/v1/info";
                var res = http.postJson(url, {
                    imei: device.getIMEI(),
                    platformId: "1722531896589193217"
                });
                if (res.statusCode != 200) {
                    console.log("请求失败: " + res.statusCode + " " + res.statusMessage);
                } else {
                    console.log("请求成功");
                }
                var content = res.body.string();
                let jsonText = JSON.parse(content);
                var textButton1 = textContains("").classNameContains("android.widget.EditText").findOnce();
                var textButton2 = textContains("").classNameContains("android.widget.EditText").findOnce(1);
                if (textButton1 && textButton2) {
                    textButton1.click();
                    sleep(2000)
                    textButton1.setText(jsonText.data.account);
                    sleep(2000);
                    textButton2.setText(jsonText.data.password)
                } else {
                    toastLog("未找到符合条件的控件");
                }
                sleep(2500)
                idContains("button-login").textContains("Войти в аккаунт").classNameContains("android.widget.Button").waitFor();
                var loginButton = idContains("button-login").textContains("Войти в аккаунт").classNameContains("android.widget.Button").findOnce();
                if (loginButton) {
                    loginButton.click();
                    sleep(500);
                } else {
                    toastLog("未找到符合条件的控件");
                }
            }
            function 点击_youtube刷新() {
                while (true) {
                    var 主页_ = descContains("settings").classNameContains("android.view.View").findOnce()
                    if (主页_) {
                        sleep(1000)
                        var 菜单_youtube = descContains("YouTube").classNameContains("android.view.View").findOnce();
                        if (菜单_youtube) {
                            菜单_youtube.click();
                            sleep(5000);
                            break;
                        } else {
                            var 菜单 = idContains("mnu_title1").textContains("Заработать").className("android.widget.TextView").findOnce()
                            if (菜单) {
                                菜单.click();
                                sleep(1000);
                                var 菜单_youtube = descContains("YouTube").classNameContains("android.view.View").findOnce();
                                if (菜单_youtube) {
                                    sleep(500)
                                } else {
                                    if (菜单) {
                                        菜单.click();
                                    } else {
                                        sleep(500);
                                    }
                                }
                            } else {
                                sleep(2000)
                                var 起点_横坐标 = (device.width / 4) * 3;
                                var 起点_纵坐标 = +device.height / 4;
                                var 终点_横坐标 = (device.width / 4) * 3;
                                var 终点_纵坐标 = (device.height / 6) * 5;
                                swipe(起点_横坐标, 起点_纵坐标, 终点_横坐标, 终点_纵坐标, 1000);
                                sleep(5000);
                                var 菜单_youtube = descContains("YouTube").classNameContains("android.view.View").findOnce();
                                if (菜单_youtube) {
                                    sleep(500)
                                } else {
                                    var 菜单 = idContains("mnu_title1").textContains("Заработать").className("android.widget.TextView").findOnce()
                                    if (菜单) {
                                        菜单.click();
                                        sleep(1000);
                                        var 菜单_youtube = descContains("YouTube").classNameContains("android.view.View").findOnce();
                                        if (菜单_youtube) {
                                            sleep(500)
                                        } else {
                                            if (菜单) {
                                                菜单.click();
                                            } else {
                                                sleep(500);
                                            }
                                        }
                                    } else {
                                        while (true) {
                                            var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                                            if (returned) {
                                                break;
                                            } else {
                                                var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                                                if (returned) {
                                                    returned.click();
                                                    sleep(500);
                                                } else {
                                                    var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                                                    if (returned) {
                                                        returned.click();
                                                        sleep(500);
                                                    } else {
                                                        var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                                                        if (returned) {
                                                            returned.click();
                                                            sleep(500);
                                                        } else {
                                                            var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                                            if (returned) {
                                                                returned.click();
                                                                break;
                                                            } else {
                                                                app.startActivity({
                                                                    packageName: "com.android.chrome",
                                                                    className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                                                    data: "https://aviso.bz/work-youtube"
                                                                });
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                        }
                    } else {
                        app.startActivity({
                            packageName: "com.android.chrome",
                            className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                            data: "https://aviso.bz/work-youtube"
                        });
                        descContains("settings").classNameContains("android.view.View").waitFor();
                    }

                }
            }
            function 播放判斷_Vidoe() {
                while (true) {
                    var returned = idContains("video-start").classNameContains("android.view.View").findOnce();
                    if (returned) {
                        var returned = textContains("视频无法播放").findOnce();
                        var returned2 = textContains("unavailale").findOnce();
                        if (returned) {
                            back()
                            sleep(3000)
                            点击_youtube刷新()
                            sleep(3000)
                        }
                        else if (returned2) {
                            back()
                            sleep(3000)
                            点击_youtube刷新()
                            sleep(3000)
                        }
                        else {
                            var returned = idContains("tmr").classNameContains("android.widget.TextView").findOnce();
                            if (returned) {
                                var returned = textContains("播放").classNameContains("android.widget.Button").findOnce();
                                var returned2 = textContains("Play").classNameContains("android.widget.Button").findOnce();
                                if (returned) {
                                    returned.click()
                                    sleep(500)
                                    var DJS = idContains("tmr").classNameContains("android.widget.TextView").findOne()
                                    var 倒计时 = DJS.text()
                                    if (倒计时 < 5) {
                                        sleep(500)
                                    } else {
                                        sleep(倒计时 / 2 * 1000 + 3000)//等待倒计时一半的时间
                                        var DJS1 = idContains("tmr").classNameContains("android.widget.TextView").findOne()
                                        var 倒计时1 = DJS1.text()
                                        if (倒计时1 == 倒计时) {
                                            back()
                                            sleep(random(1000, 2000))
                                            if (idContains("tmr").classNameContains("android.widget.TextView").findOnce()) {
                                                back()
                                            } else {
                                                sleep(random(1000, 2000))
                                                if (textContains("Выполнение Youtube").classNameContains("android.widget.TextView").findOnce()) {
                                                    break;
                                                } else {
                                                    sleep(random(500, 1000))
                                                }
                                            }

                                        } else {
                                            sleep(倒计时1 * 1000)//等待倒计时的时间
                                        }
                                    }
                                } else if (returned2) {
                                    returned2.click()
                                    sleep(500)
                                    var DJS = idContains("tmr").classNameContains("android.widget.TextView").findOne()
                                    var 倒计时 = DJS.text()
                                    if (倒计时 < 5) {
                                        sleep(500)
                                    } else {
                                        sleep(倒计时 / 2 * 1000)//等待倒计时一半的时间
                                        var DJS1 = idContains("tmr").classNameContains("android.widget.TextView").findOne()
                                        var 倒计时1 = DJS1.text()
                                        if (倒计时1 == 倒计时) {
                                            back()
                                            sleep(random(1000, 2000))
                                            if (idContains("tmr").classNameContains("android.widget.TextView").findOnce()) {
                                                back()
                                            } else {
                                                sleep(random(1000, 2000))
                                                if (textContains("Выполнение Youtube").classNameContains("android.widget.TextView").findOnce()) {
                                                    break;
                                                } else {
                                                    sleep(random(500, 1000))
                                                }
                                            }

                                        } else {
                                            sleep(倒计时1 * 1000 + 4000)//等待倒计时的时间
                                        }
                                    }
                                }
                                else {
                                    sleep(1000)
                                }

                            } else {
                                var returned = textContains("Поддержите видео лайком").findOnce();
                                if (returned) {
                                    back()
                                    sleep(5000)
                                } else {
                                    var returned1 = idContains("succes-error").textContains("просмотра").findOnce();
                                    var returned2 = idContains("succes-error").textContains("Время выполнения истекло").className("android.view.View").findOnce();
                                    if (returned1 || returned2) {
                                        back()
                                        sleep(5000)
                                    } else {
                                        var returned3 = idContains("succes-error").textContains("С учетом рефбека на ваш счет начислено").classNameContains("android.view.View").findOnce();
                                        if (returned3) {
                                            if (textContains("Выполнение Youtube").classNameContains("android.widget.TextView").findOnce()) {
                                                sleep(random(500, 1000))
                                            } else {
                                                back()
                                                sleep(1524)
                                                if (textContains("Выполнение Youtube").classNameContains("android.widget.TextView").findOnce()) {
                                                    sleep(random(500, 1000))
                                                } else {
                                                    back()
                                                }
                                            }
                                        } else {
                                            sleep(500)
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        var 平台主页 = descContains("settings").classNameContains("android.view.View").findOnce()
                        if (平台主页) {
                            break;
                        } else {
                            sleep(100)
                        }
                    }
                }
            }
            function 判斷_homepage() {
                //获取余额+判断是否在平台主页
                while (true) {
                    var returned = descContains("settings").classNameContains("android.view.View").findOnce();
                    if (returned) {
                        var Good = idContains("new-money-ballans").classNameContains("android.widget.TextView").findOnce()
                        if (Good) {
                            var ii = idContains("new-money-ballans").classNameContains("android.widget.TextView").findOne();
                            var i = ii.text()
                            var w = i.indexOf(" руб.");
                            var q = i.substring(0, w)
                            console.setTitle("当前余额【" + q + "】卢布")
                            break;
                        } else {
                            while (true) {
                                var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                                if (returned) {
                                    break;
                                } else {
                                    var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                                    if (returned) {
                                        returned.click();
                                        sleep(500);
                                    } else {
                                        var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                                        if (returned) {
                                            returned.click();
                                            sleep(500);
                                        } else {
                                            var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                                            if (returned) {
                                                returned.click();
                                                sleep(500);
                                            } else {
                                                var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                                if (returned) {
                                                    returned.click();
                                                    break;
                                                } else {
                                                    app.startActivity({
                                                        packageName: "com.android.chrome",
                                                        className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                                        data: "https://aviso.bz/work-youtube"
                                                    });
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                        }
                    } else {
                        launchApp("Chrome")
                        sleep(3000)
                        var returned = descContains("settings").classNameContains("android.view.View").findOnce();
                        if (returned) {
                            sleep(500)
                        } else {
                            while (true) {
                                var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                                if (returned) {
                                    break;
                                } else {
                                    var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                                    if (returned) {
                                        returned.click();
                                        sleep(500);
                                    } else {
                                        var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                                        if (returned) {
                                            returned.click();
                                            sleep(500);
                                        } else {
                                            var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                                            if (returned) {
                                                returned.click();
                                                sleep(500);
                                            } else {
                                                var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                                if (returned) {
                                                    returned.click();
                                                    break;
                                                } else {
                                                    app.startActivity({
                                                        packageName: "com.android.chrome",
                                                        className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                                        data: "https://aviso.bz/work-youtube"
                                                    });
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            app.startActivity({
                                packageName: "com.android.chrome",
                                className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                data: "https://aviso.bz/work-youtube"
                            });
                            text("AVISO").className("android.widget.TextView").waitFor();
                            var returned = textContains("Вход в аккаунт").classNameContains("android.widget.TextView").findOnce();
                            if (returned) {
                                getAccountAndPwd()
                                sleep(10000)
                                while (true) {
                                    var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                                    if (returned) {
                                        break;
                                    } else {
                                        var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                                        if (returned) {
                                            returned.click();
                                            sleep(500);
                                        } else {
                                            var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                                            if (returned) {
                                                returned.click();
                                                sleep(500);
                                            } else {
                                                var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                                                if (returned) {
                                                    returned.click();
                                                    sleep(500);
                                                } else {
                                                    var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                                    if (returned) {
                                                        returned.click();
                                                        break;
                                                    } else {
                                                        app.startActivity({
                                                            packageName: "com.android.chrome",
                                                            className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                                            data: "https://aviso.bz/work-youtube"
                                                        });
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                app.startActivity({
                                    packageName: "com.android.chrome",
                                    className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                    data: "https://aviso.bz/work-youtube"
                                });
                            } else {
                                sleep(500)
                            }
                            text("AVISO").className("android.widget.TextView").waitFor();
                        }
                    }
                }
            }
            while (true) {
                //一直保持屏幕常亮
                device.keepScreenOn()
                判斷_homepage()
                var returned = textContains("Выполнение Youtube").classNameContains("android.widget.TextView").findOnce();
                if (returned) {
                    var 蓝色按钮_bounds = textContains("Приступить к выполнению").classNameContains("android.widget.TextView").findOnce()
                    if (蓝色按钮_bounds) {
                        sleep(random(500, 1000));
                        蓝色按钮_bounds.click();
                        sleep(random(5000, 10000));
                        var returned = idContains("tmr").classNameContains("android.widget.TextView").findOnce();
                        if (returned) {
                            var time = idContains("tmr").classNameContains("android.widget.TextView").findOnce().text();
                            if (time > 30) {
                                back()
                                sleep(3000)
                                点击_youtube刷新()
                            } else {
                                播放判斷_Vidoe()
                            }
                        } else {
                            var 平台主页 = descContains("settings").classNameContains("android.view.View").findOnce()
                            if (平台主页) {
                                sleep(500)
                            } else {
                                back()
                                sleep(random(5000, 7000));
                                var 平台主页 = descContains("settings").classNameContains("android.view.View").findOnce()
                                if (平台主页) {
                                    sleep(500)
                                } else {
                                    back()
                                    sleep(random(5000, 7000));
                                    var 平台主页 = descContains("settings").classNameContains("android.view.View").findOnce()
                                    if (平台主页) {
                                        sleep(500)
                                    } else {
                                        back()
                                    }
                                }
                            }
                        }

                    } else {
                        var returned = textContains("https://www.youtube.com").classNameContains("android.widget.TextView").findOnce();
                        if (returned) {
                            returned.click();
                            var io = 0;
                            while (true) {
                                io++;
                                var 蓝色按钮_bounds = textContains("Приступить к выполнению").classNameContains("android.widget.TextView").findOnce()
                                if (蓝色按钮_bounds) {
                                    break;
                                } else {
                                    sleep(1000)
                                }
                                if (io == 5) {
                                    点击_youtube刷新()
                                    break;
                                }
                            }
                        } else {
                            点击_youtube刷新()

                        }
                    }
                } else {
                    点击_youtube刷新()
                }

            }
        });
        //定时开始
        for (i = 0; i < 看视频_time + 1; i++) {
            sleep(1000)
            if (i == 看视频_time) {
                while (true) {
                    if (tasks.isAlive() == true) {
                        tasks.interrupt();
                    } else {
                        break;
                    }
                }
                break;
            }
        }
        sleep(5000)
        var surf = threads.start(function () {
            function getAccountAndPwd() {
                var url = "http://api.fairy-pig.com/gc/account/v1/info";
                var res = http.postJson(url, {
                    imei: device.getIMEI(),
                    platformId: "1722531896589193217"
                });
                if (res.statusCode != 200) {
                    console.log("请求失败: " + res.statusCode + " " + res.statusMessage);
                } else {
                    console.log("请求成功");
                }
                var content = res.body.string();
                let jsonText = JSON.parse(content);
                var textButton1 = textContains("").classNameContains("android.widget.EditText").findOnce();
                var textButton2 = textContains("").classNameContains("android.widget.EditText").findOnce(1);
                if (textButton1 && textButton2) {
                    textButton1.click();
                    sleep(2000)
                    textButton1.setText(jsonText.data.account);
                    sleep(2000);
                    textButton2.setText(jsonText.data.password)
                } else {
                    toastLog("未找到符合条件的控件");
                }
                sleep(2500)
                idContains("button-login").textContains("Войти в аккаунт").classNameContains("android.widget.Button").waitFor();
                var loginButton = idContains("button-login").textContains("Войти в аккаунт").classNameContains("android.widget.Button").findOnce();
                if (loginButton) {
                    loginButton.click();
                    sleep(500);
                } else {
                    toastLog("未找到符合条件的控件");
                }
            }
            while (true) {
                sleep(random(100, 1000))
                var returned = descContains("Приступить к просмотру").classNameContains("android.view.View").visibleToUser().findOnce();
                if (returned) {
                    returned.click();
                    sleep(random(2000, 3000));
                    ////////////
                    var returned = textContains("Просмотр не доступен! Заявка о начале просмотра не найдена.").classNameContains("android.widget.TextView").findOnce(0);
                    if (returned) {
                        while (true) {
                            var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                            if (returned) {
                                break;
                            } else {
                                var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                                if (returned) {
                                    returned.click();
                                    sleep(500);
                                } else {
                                    var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                                    if (returned) {
                                        returned.click();
                                        sleep(500);
                                    } else {
                                        var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                                        if (returned) {
                                            returned.click();
                                            sleep(500);
                                        } else {
                                            var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                            if (returned) {
                                                returned.click();
                                                break;
                                            } else {
                                                app.startActivity({
                                                    packageName: "com.android.chrome",
                                                    className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                                    data: "https://aviso.bz/work-serf"
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        app.startActivity({
                            packageName: "com.android.chrome",
                            className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                            data: "https://aviso.bz/work-serf"
                        });
                        descContains("settings").classNameContains("android.view.View").waitFor();
                    } else {
                        sleep(random(4000, 5000));
                        var returned = idContains("timer_inp").classNameContains("android.widget.TextView").findOnce();
                        var returned1 = idContains("time").classNameContains("android.widget.TextView").findOnce();
                        if (returned || returned1) {
                            var returned_text = idContains("timer_inp").classNameContains("android.widget.TextView").findOnce();
                            if (returned_text) {
                                var text1 = returned_text.text()
                                if (text1 > 30) {
                                    while (true) {
                                        var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                                        if (returned) {
                                            break;
                                        } else {
                                            var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                                            if (returned) {
                                                returned.click();
                                                sleep(500);
                                            } else {
                                                var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                                                if (returned) {
                                                    returned.click();
                                                    sleep(500);
                                                } else {
                                                    var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                                                    if (returned) {
                                                        returned.click();
                                                        sleep(500);
                                                    } else {
                                                        var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                                        if (returned) {
                                                            returned.click();
                                                            break;
                                                        } else {
                                                            app.startActivity({
                                                                packageName: "com.android.chrome",
                                                                className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                                                data: "https://aviso.bz/work-serf"
                                                            });
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    app.startActivity({
                                        packageName: "com.android.chrome",
                                        className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                        data: "https://aviso.bz/work-serf"
                                    });
                                    descContains("settings").classNameContains("android.view.View").waitFor();
                                } else {
                                    while (true) {
                                        var returned = textContains("Подтвердить просмотр").classNameContains("android.widget.TextView").findOnce();
                                        if (returned) {
                                            returned.click();
                                            sleep(1000);
                                            back()
                                            sleep(1000);
                                            back()
                                            sleep(1000);
                                            break;
                                        } else {
                                            sleep(random(100, 500));
                                        }
                                    }
                                }
                            } else {
                                var returned_text1 = idContains("time").classNameContains("android.widget.TextView").findOnce();
                                if (returned_text1) {
                                    var text11 = returned_text1.text()
                                    if (text11 > 30) {
                                        while (true) {
                                            var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                                            if (returned) {
                                                break;
                                            } else {
                                                var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                                                if (returned) {
                                                    returned.click();
                                                    sleep(500);
                                                } else {
                                                    var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                                                    if (returned) {
                                                        returned.click();
                                                        sleep(500);
                                                    } else {
                                                        var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                                                        if (returned) {
                                                            returned.click();
                                                            sleep(500);
                                                        } else {
                                                            var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                                            if (returned) {
                                                                returned.click();
                                                                break;
                                                            } else {
                                                                app.startActivity({
                                                                    packageName: "com.android.chrome",
                                                                    className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                                                    data: "https://aviso.bz/work-serf"
                                                                });
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        app.startActivity({
                                            packageName: "com.android.chrome",
                                            className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                            data: "https://aviso.bz/work-serf"
                                        });
                                        descContains("settings").classNameContains("android.view.View").waitFor();
                                    } else {
                                        while (true) {
                                            var returned = textContains("Подтвердить просмотр").classNameContains("android.widget.TextView").findOnce();
                                            if (returned) {
                                                returned.click();
                                                sleep(1000);
                                                back()
                                                sleep(1000);
                                                back()
                                                sleep(1000);
                                                break;
                                            } else {
                                                sleep(random(100, 500));
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            back()
                            sleep(5000)
                            var 主页_Home = descContains("settings").classNameContains("android.view.View").findOnce();
                            if (主页_Home) {
                                sleep(random(100, 500));
                            } else {
                                while (true) {
                                    var 主页_Home = descContains("settings").classNameContains("android.view.View").findOnce();
                                    if (主页_Home) {
                                        break;
                                    } else {
                                        back()
                                        sleep(5000)
                                        if (主页_Home) {
                                            break;
                                        } else {
                                            back()
                                            sleep(5000)
                                            if (主页_Home) {
                                                break;
                                            } else {
                                                back()
                                                sleep(5000)
                                                if (主页_Home) {
                                                    break;
                                                } else {
                                                    launchApp("Chrome")
                                                    sleep(3000)
                                                    if (主页_Home) {
                                                        break;
                                                    } else {
                                                        while (true) {
                                                            var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                                                            if (returned) {
                                                                break;
                                                            } else {
                                                                var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                                                                if (returned) {
                                                                    returned.click();
                                                                    sleep(500);
                                                                } else {
                                                                    var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                                                                    if (returned) {
                                                                        returned.click();
                                                                        sleep(500);
                                                                    } else {
                                                                        var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                                                                        if (returned) {
                                                                            returned.click();
                                                                            sleep(500);
                                                                        } else {
                                                                            var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                                                            if (returned) {
                                                                                returned.click();
                                                                                break;
                                                                            } else {
                                                                                app.startActivity({
                                                                                    packageName: "com.android.chrome",
                                                                                    className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                                                                    data: "https://aviso.bz/work-serf"
                                                                                });
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        app.startActivity({
                                                            packageName: "com.android.chrome",
                                                            className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                                            data: "https://aviso.bz/work-serf"
                                                        });
                                                        text("AVISO").className("android.widget.TextView").waitFor();
                                                        if (主页_Home) {
                                                            getAccountAndPwd()
                                                        } else {
                                                            break;
                                                        }
                                                        descContains("settings").classNameContains("android.view.View").waitFor();

                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    var returned = descContains("Серфинг").classNameContains("android.view.View").findOnce();
                    if (returned) {
                        returned.click()
                        sleep(5000)
                        var 冲浪_tasks = idContains("start-serf").classNameContains("android.view.View").visibleToUser().findOnce();
                        if (冲浪_tasks) {
                            var 冲浪_tasks = idContains("start-serf").classNameContains("android.view.View").visibleToUser().findOnce();
                            if (冲浪_tasks) {
                                var returnedList = idContains("start-serf").classNameContains("android.view.View").visibleToUser().untilFind();
                                for (var i = 0, len = returnedList.length - 1; i < len; i++) {
                                    var returned = returnedList[i].bounds();
                                    click(returned.left, returned.top);
                                    sleep(1500);
                                    descContains("Приступить к просмотру").classNameContains("android.view.View").waitFor();
                                };
                            } else {
                                while (true) {
                                    var returned = textContains("Динамические ссылки.").classNameContains("android.widget.TextView").findOnce();
                                    if (returned) {
                                        break;
                                    } else {
                                        var returned = descContains("Серфинг").classNameContains("android.view.View").findOnce();
                                        if (returned) {
                                            returned.click();
                                            sleep(500);
                                        } else {
                                            var returned = idContains("mnu_title1").textContains("Заработать").classNameContains("android.widget.TextView").findOnce();
                                            if (returned) {
                                                returned.click();
                                                sleep(500);
                                                var returned = descContains("Серфинг").classNameContains("android.view.View").findOnce();
                                                if (returned) {
                                                    returned.click();
                                                    sleep(500);
                                                } else {
                                                    var returned = idContains("mnu_title1").textContains("Заработать").classNameContains("android.widget.TextView").findOnce();
                                                    if (returned) {
                                                        returned.click();
                                                        sleep(500);
                                                        var returned = descContains("Серфинг").classNameContains("android.view.View").findOnce();
                                                        if (returned) {
                                                            returned.click();
                                                            sleep(500);
                                                        }
                                                    } else {
                                                        toastLog("未找到符合条件的控件");
                                                    }
                                                }
                                            } else {
                                                while (true) {
                                                    var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                                                    if (returned) {
                                                        break;
                                                    } else {
                                                        var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                                                        if (returned) {
                                                            returned.click();
                                                            sleep(500);
                                                        } else {
                                                            var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                                                            if (returned) {
                                                                returned.click();
                                                                sleep(500);
                                                            } else {
                                                                var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                                                                if (returned) {
                                                                    returned.click();
                                                                    sleep(500);
                                                                } else {
                                                                    var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                                                    if (returned) {
                                                                        returned.click();
                                                                        break;
                                                                    } else {
                                                                        app.startActivity({
                                                                            packageName: "com.android.chrome",
                                                                            className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                                                            data: "https://aviso.bz/work-serf"
                                                                        });
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                app.startActivity({
                                                    packageName: "com.android.chrome",
                                                    className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                                    data: "https://aviso.bz/work-serf"
                                                });
                                                descContains("settings").classNameContains("android.view.View").waitFor();
                                            }

                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        while (true) {
                            var returned = textContains("Динамические ссылки.").classNameContains("android.widget.TextView").findOnce();
                            if (returned) {
                                break;
                            } else {
                                var returned = descContains("Серфинг").classNameContains("android.view.View").findOnce();
                                if (returned) {
                                    returned.click();
                                    sleep(500);
                                } else {
                                    var returned = idContains("mnu_title1").textContains("Заработать").classNameContains("android.widget.TextView").findOnce();
                                    if (returned) {
                                        returned.click();
                                        sleep(500);
                                        var returned = descContains("Серфинг").classNameContains("android.view.View").findOnce();
                                        if (returned) {
                                            returned.click();
                                            sleep(500);
                                        } else {
                                            var returned = idContains("mnu_title1").textContains("Заработать").classNameContains("android.widget.TextView").findOnce();
                                            if (returned) {
                                                returned.click();
                                                sleep(500);
                                                var returned = descContains("Серфинг").classNameContains("android.view.View").findOnce();
                                                if (returned) {
                                                    returned.click();
                                                    sleep(500);
                                                }
                                            } else {
                                                toastLog("未找到符合条件的控件");
                                            }
                                        }
                                    } else {
                                        while (true) {
                                            var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                                            if (returned) {
                                                break;
                                            } else {
                                                var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                                                if (returned) {
                                                    returned.click();
                                                    sleep(500);
                                                } else {
                                                    var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                                                    if (returned) {
                                                        returned.click();
                                                        sleep(500);
                                                    } else {
                                                        var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                                                        if (returned) {
                                                            returned.click();
                                                            sleep(500);
                                                        } else {
                                                            var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                                            if (returned) {
                                                                returned.click();
                                                                break;
                                                            } else {
                                                                app.startActivity({
                                                                    packageName: "com.android.chrome",
                                                                    className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                                                    data: "https://aviso.bz/work-serf"
                                                                });
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        app.startActivity({
                                            packageName: "com.android.chrome",
                                            className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                            data: "https://aviso.bz/work-serf"
                                        });
                                        descContains("settings").classNameContains("android.view.View").waitFor();
                                    }

                                }
                            }
                        }
                    }


                }
            }
        });
        for (i_1 = 0; i_1 < 冲浪_time + 1; i_1++) {
            sleep(1000)
            if (i_1 == 冲浪_time) {
                while (true) {
                    if (surf.isAlive() == true) {
                        surf.interrupt();
                    } else {
                        break;
                    }
                }
                break;
            } else {
                var Good = idContains("new-money-ballans").classNameContains("android.widget.TextView").findOnce()
                if (Good) {
                    var ii = idContains("new-money-ballans").classNameContains("android.widget.TextView").findOne();
                    var i = ii.text()
                    var w = i.indexOf(" руб.");
                    var q = i.substring(0, w)
                    console.setTitle("当前余额【" + q + "】卢布")
                }
            }
        }
        sleep(5000)
        ////////////////////////////
        //到此是主流程一次执行完毕
        while (true) {
            var returned = descContains("settings").classNameContains("android.view.View").findOnce();
            if (returned) {
                var Good = idContains("new-money-ballans").classNameContains("android.widget.TextView").findOnce()
                if (Good) {
                    var ii = idContains("new-money-ballans").classNameContains("android.widget.TextView").findOne();
                    var i = ii.text()
                    var w = i.indexOf(" руб.");
                    var 更新_good = i.substring(0, w)
                    profit = 更新_good - 全局_good

                    break;
                } else {
                    while (true) {
                        var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                        if (returned) {
                            break;
                        } else {
                            var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                            if (returned) {
                                returned.click();
                                sleep(500);
                            } else {
                                var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                                if (returned) {
                                    returned.click();
                                    sleep(500);
                                } else {
                                    var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                                    if (returned) {
                                        returned.click();
                                        sleep(500);
                                    } else {
                                        var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                        if (returned) {
                                            returned.click();
                                            break;
                                        } else {
                                            app.startActivity({
                                                packageName: "com.android.chrome",
                                                className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                                data: "https://aviso.bz/work-youtube"
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                    app.startActivity({
                        packageName: "com.android.chrome",
                        className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                        data: "https://aviso.bz/work-youtube"
                    });
                    descContains("settings").classNameContains("android.view.View").waitFor()
                }
            } else {
                back()
                sleep(5000)
                var returned = descContains("settings").classNameContains("android.view.View").findOnce();
                if (returned) {
                    sleep(500)
                } else {
                    back()
                    sleep(5000)
                    var returned = descContains("settings").classNameContains("android.view.View").findOnce();
                    if (returned) {
                        sleep(500)
                    } else {
                        launchApp("Chrome")
                        sleep(5000)
                        var returned = descContains("settings").classNameContains("android.view.View").findOnce();
                        if (returned) {
                            sleep(500)
                        } else {
                            app.startActivity({
                                packageName: "com.android.chrome",
                                className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                data: "https://aviso.bz/work-youtube"

                            });
                            descContains("settings").classNameContains("android.view.View").waitFor();
                        }
                    }
                }
            }
        }

        var exchangeRate = getExchangeRate();
        profit = toDecimal(profit / exchangeRate);
        console.log("金额：" + profit);
        getProfit(toFixedFloor(profit), "成功", 200);

    } catch (err) {
        var exchangeRate = getExchangeRate();
        profit = toDecimal(profit / exchangeRate);
        console.log("金额：" + profit);
        console.log("msg：" + err.message);
        getProfit(toFixedFloor(profit), err.message, 400);
    }

    console.setTitle("已运行" + ii_1 * 5 + "分钟")
    sleep(2000)

}
//接口一 获取平台账密
function getAccountAndPwd() {
    var url = "http://api.fairy-pig.com/gc/account/v1/info";
    var res = http.postJson(url, {
        androidId: device.getAndroidId(),
        imei: device.getIMEI(),
        platformId: "1722531896589193217"
    });
    if (res.statusCode != 200) {
        console.log("请求失败: " + res.statusCode + " " + res.statusMessage);
    } else {
        console.log("请求成功");
    }
    var content = res.body.string();
    let jsonText = JSON.parse(content);
    var textButton1 = textContains("").classNameContains("android.widget.EditText").findOnce();
    var textButton2 = textContains("").classNameContains("android.widget.EditText").findOnce(1);
    if (textButton1 && textButton2) {
        textButton1.click();
        sleep(2000)
        textButton1.setText(jsonText.data.account);
        sleep(2000);
        textButton2.setText(jsonText.data.password)
    } else {
        toastLog("未找到符合条件的控件");
    }
    sleep(2500)
    idContains("button-login").textContains("Войти в аккаунт").classNameContains("android.widget.Button").waitFor();
    var loginButton = idContains("button-login").textContains("Войти в аккаунт").classNameContains("android.widget.Button").findOnce();
    if (loginButton) {
        loginButton.click();
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    }
}
//接口二 脚本每次执行产生的收益回传
function getProfit(profit, msg, status) {

    console.log("进入收益回传接口")
    var url = "http://api.fairy-pig.com/system/script/v1/callBack/profit";
    var res = http.postJson(url, {
        androidId: device.getAndroidId(),
        imei: device.getIMEI(),
        status: status,
        taskProfit: profit,
        taskResult: msg
    });
    if (res.statusCode != 200) {
        console.log("收益回传接口请求失败: " + res.statusCode + " " + res.statusMessage);
    } else {
        console.log("收益回传接口请求成功");
    }
    var content = res.body.string();
    console.log(content)
}

function 冲浪_jiuzhneg() {
    while (true) {
        var returned = textContains("Динамические ссылки.").classNameContains("android.widget.TextView").findOnce();
        if (returned) {
            break;
        } else {
            var returned = descContains("Серфинг").classNameContains("android.view.View").findOnce();
            if (returned) {
                returned.click();
                sleep(500);
            } else {
                var returned = idContains("mnu_title1").textContains("Заработать").classNameContains("android.widget.TextView").findOnce();
                if (returned) {
                    returned.click();
                    sleep(500);
                    var returned = descContains("Серфинг").classNameContains("android.view.View").findOnce();
                    if (returned) {
                        returned.click();
                        sleep(500);
                    } else {
                        var returned = idContains("mnu_title1").textContains("Заработать").classNameContains("android.widget.TextView").findOnce();
                        if (returned) {
                            returned.click();
                            sleep(500);
                            var returned = descContains("Серфинг").classNameContains("android.view.View").findOnce();
                            if (returned) {
                                returned.click();
                                sleep(500);
                            }
                        } else {
                            toastLog("未找到符合条件的控件");
                        }
                    }
                } else {
                    while (true) {
                        var returned = idContains("com.android.chrome:id/empty_state_container").classNameContains("android.widget.ScrollView").findOnce();
                        if (returned) {
                            break;
                        } else {
                            var returned = idContains("com.android.chrome:id/tab_switcher_button").descContains("切换或关闭标签页").classNameContains("android.widget.ImageButton").findOnce();
                            if (returned) {
                                returned.click();
                                sleep(500);
                            } else {
                                var returned = idContains("com.android.chrome:id/menu_button").descContains("自定义及控制 Google Chrome").classNameContains("android.widget.ImageButton").findOnce();
                                if (returned) {
                                    returned.click();
                                    sleep(500);
                                } else {
                                    var returned = idContains("com.android.chrome:id/close_all_tabs_menu_id").classNameContains("android.widget.LinearLayout").findOnce();
                                    if (returned) {
                                        returned.click();
                                        sleep(500);
                                    } else {
                                        var returned = idContains("com.android.chrome:id/positive_button").textContains("关闭所有标签页").classNameContains("android.widget.Button").findOnce();
                                        if (returned) {
                                            returned.click();
                                            break;
                                        } else {
                                            app.startActivity({
                                                packageName: "com.android.chrome",
                                                className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                                                data: "https://aviso.bz/work-serf"
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                    app.startActivity({
                        packageName: "com.android.chrome",
                        className: "org.chromium.chrome.browser.ChromeTabbedActivity",
                        data: "https://aviso.bz/work-serf"
                    });
                    descContains("settings").classNameContains("android.view.View").waitFor();
                }

            }
        }
    }
}

// 收益保留修改，不执行四舍五入
function toFixedFloor(num) {
    var result = Math.floor(num * 100) / 100;
    return result;
}

//汇率
function getExchangeRate() {
    var url = "https://api.exchangerate-api.com/v4/latest/CNY";
    var res = http.get(url, {
    });
    if (res.statusCode != 200) {
        console.log("请求失败: " + res.statusCode + " " + res.statusMessage);
    } else {
        console.log("请求成功");
    }
    var content = res.body.string();
    let jsonText = JSON.parse(content);
    var exchangeRateForRUB = jsonText.rates.RUB;
    return exchangeRateForRUB;
}

//四舍五入
function toDecimal(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return;
    }

    f = Math.round(x * 100) / 100;
    return f;
}