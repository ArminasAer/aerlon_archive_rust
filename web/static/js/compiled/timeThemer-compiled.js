"use strict";(()=>{var t=Intl.DateTimeFormat().resolvedOptions().timeZone,e=parseInt(new Date().toLocaleString("en-US",{hour:"numeric",hour12:!1,timeZone:t}));e<=7||e>=19?document.documentElement.setAttribute("data-time","night"):document.documentElement.setAttribute("data-time","day");})();
