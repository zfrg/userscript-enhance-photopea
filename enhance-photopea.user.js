// ==UserScript==
// @name         Enhance Photopea
// @namespace    https://github.com/zfrg/userscript-enhance-photopea
// @version      1.0.4
// @description  优化 Photopea 使用体验
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
    GM_addStyle(".topbar::before{content:'';display:inline-block;width:18px;height:18px;background-image:url(https://www.photopea.com/promo/thumb256.png);background-size:cover;-webkit-transform:translate(5px,4px);-ms-transform:translate(5px,4px);transform:translate(5px,4px);-webkit-user-drag:none;app-region:no-drag;margin-right:10px}")
    GM_addStyle("div.flexrow.app:last-child > div:first-child > div:nth-child(3) > div:first-child{right:calc(100vw - env(titlebar-area-width, 100vw) - env(titlebar-area-x, 0px))!important;}")

    setInterval(function() {
        var targetElement = document.querySelector('.app > div > div:nth-child(3)');
        if (targetElement && targetElement.style.height === '31px') {
            targetElement.style.height = '32px';
        }
    }, 0);
})();
