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
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.body.oncontextmenu = function() {return false;};
    // GM_addStyle(".app > div > div:nth-child(3) {height: 32px !important ; }");
    GM_addStyle(".topbar::before{content:'';display:inline-block;width:18px;height:18px;background-image:url(https://www.photopea.com/promo/thumb256.png);background-size:cover;-webkit-transform:translate(5px,4px);-ms-transform:translate(5px,4px);transform:translate(5px,4px);-webkit-user-drag:none;app-region:no-drag;margin-right:10px}")

    setInterval(function() {
        var targetElement = document.querySelector('.app > div > div:nth-child(3)');

        if (targetElement && targetElement.style.height === '31px') {
            targetElement.style.height = '32px';
        }
    }, 0);
})();
