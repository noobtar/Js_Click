// ==UserScript==
// @name         TAR122
// @namespace    http://tampermonkey.net/
// @version      2025-10-29
// @description  try to take over the world!
// @author       Chatgpt
// @match        https://smartbmn.cdd.go.th/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=go.th
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

   const Array_togle = [
           "check110101","check160102","check160202","check160302","check160402","check160502",
  /* 4 */  "check140202","check150201","check150102",
  /* 7 */  "check170102","check170202","check170302","check170402","check170502","check170602","check170702","check170802","check170902","check171002","check171102","check171202",
  /* 8 */  "check180102","check180202","check180302","check180402","check190102",
  /* 11 */ "check210102","check210302","check210204",
  /* 12 */ "check220202",
  /* 13 */ "check230302","check230402","check230502",
  /* 14 */ "check240102","check240202","check240302","check240402","check240502","check240602","check240702","check240802","check240902","check241002","check241102",
  /* 15 */ "check250102","check250202","check250302","check250402","check250502","check250602","check250702",
  /* 16 */ "check26010201","check26010301","check26010401","check26020202","check26020302","check26020402","check26040101","check260501","check260601","check260701","check260801","check260901",
  /* 17 */ "check270101","check270201","check270301","check270401","check270501",
  /* 18 */ "check280102","check280202","check290102","check290302",
  /* 20 */ "check300103","check300202","check300302","check300402","check300502","check30060201","check30060202","check30060203","check30060204","check30060205","check30060206","check310102","check31020201","check310301",
  /* 22 */ "check320202","check320302","check330401","check33070101",
  /* 24 */ "check340202","check340401",
  /* 25 */ "check350302","check360102","check360202","check360302","check360402",
  /* 29 */ "check39010101","check390302","check39020102","check39020103","check39020104",
  /* 30 */ "check400102","check4001030101","check4001030102","check4001030104","check400202",
  /* 31 */ "check41020101",
  /* 32 */ "check420101","check430101",
  /* 34 */ "check440201","check440401","check44050101","check44050102",
  /* 36 */ "check470102","check480102","check46010102","check46010202","check46010302","check46020102","check46020202"];


  let lenarray = Array_togle.length;


  function handleCheckboxes() {
  const timer = setInterval(() => {
    const checks = document.querySelectorAll('.form-check-input');

    if (checks.length > 0) {
      checks.forEach(el => {
        if (el.type === 'checkbox' & !el.checked) {
        for (let index = 0; index < lenarray; index++) {
            if(el.id == Array_togle[index]){
                 if (!el.disabled){
                  el.click();
                  console.log(`✅ ทำการออโต้คลิก id="${el.id}" เรียบร้อย`);
                 }
            }
        }
    }
      });

      clearInterval(timer);
    }
  }, 500);
  }


  handleCheckboxes();


  const observer = new MutationObserver((mutations) => {
    handleCheckboxes();
  });

    observer.observe(document.body, { childList: true, subtree: true });

})
();

