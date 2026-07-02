// ==UserScript==
// @name         Photopea窗口图标&标题栏宽度优化
// @namespace    https://github.com/zfrg/userscript-enhance-photopea
// @version      2026-07-02
// @description  优化 Photopea PWA 使用体验
// @author       zfrg
// @match        https://www.photopea.com/*
// @icon         https://www.photopea.com/promo/thumb256.png
// @updateURL    https://github.com/zfrg/userscript-enhance-photopea/raw/refs/heads/main/enhance-photopea.user.js
// @downloadURL  https://github.com/zfrg/userscript-enhance-photopea/raw/refs/heads/main/enhance-photopea.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.body.oncontextmenu = function() {return false;};
    // GM_addStyle(".app > div > div:nth-child(3) {height: 32px !important ; }");

    setInterval(function() {
        var targetElement = document.querySelector('.app > div > div:nth-child(3)');

        if (targetElement && targetElement.style.height === '31px') {
            targetElement.style.height = '32px';
        }
    }, 0);

    var observer = new MutationObserver(function(mutationsList) {
        var count = 0;

        for (var mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                var topbar = document.querySelector('.topbar');
                if (topbar) {
                    count++;

                    if (count === 1) {
                        var c = document.createElement('span');
                        var icon = document.createElement('img');
                        icon.src = "https://www.photopea.com/promo/thumb256.png";
                        icon.style = "width: 18px;height: 18px;position: relative;left: 5px;top: 4px;bottom: 4px;padding-right: 10px;user-select: none;-webkit-user-select: none;-webkit-user-drag: none;app-region: no-drag;";
                        icon.oncontextmenu = function() {
                            return false;
                        };
                        c.appendChild(icon);
                        topbar.insertBefore(c, topbar.firstChild);
                        observer.disconnect();
                    }
                }
            }
        }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });

})();
