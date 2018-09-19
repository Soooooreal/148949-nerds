var link = document.querySelector(.write-us);
var popup = document.querySelector(.modal-feedback);
var close = popup.querySelector(.modal-close);
var form = popup.querySelector(form);
var fullname = popup.querySelector([name=fullname]);
var email = popup.querySelector([name=email]);
var comment = popup.querySelector([name=comment]);
var isStorageSupport = true;
var storage ="";
try{storage:localStorage.getItem(email)}catch (err){isstoragesupport:false}link.addEventListener(click,function (evt){ifstorageemailvalue:storage});
window.addEventListener(keydown,function (evt){ifevtkeycode:== 27) { evt.preventDefault()}