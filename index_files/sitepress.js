"use strict";

var icl_lang = icl_vars.current_language;
var icl_home = icl_vars.icl_home;

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }  
}

/*
     FILE ARCHIVED ON 03:26:35 Jan 08, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:59:15 Jan 25, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 74.434
  exclusion.robots: 0.124
  load_resource: 125.743
  exclusion.robots.policy: 0.114
  RedisCDXSource: 0.636
  CDXLines.iter: 12.189 (3)
  esindex: 0.009
  PetaboxLoader3.datanode: 142.885 (4)
  PetaboxLoader3.resolve: 30.218
  LoadShardBlock: 59.085 (3)
*/