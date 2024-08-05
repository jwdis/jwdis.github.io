
// get theme name
var path = location.pathname.split("/");
if (path[path.length - 1].indexOf(".html") > -1) {
  path.length = path.length - 1;
}
var theme = path.join("");

var urlParams = new URLSearchParams(location.search);
var demoLinkValue = urlParams.get('demoLink');
// variables
let iframeView = document.getElementById("demoLink");
iframeView.src = demoLinkValue;
document.getElementById("title").innerHTML = theme;

// demo switcher
var demoSwitcher = document.querySelector(".demo-switch");
demoSwitcher.innerHTML = `
<div class="demo-switch-container">
  <button type="button" class="demo-switch-desktop active" aria-label="Toggle Desktop" title="Desktop Mode">
    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path>
      <path d="M7 20h10"></path>
      <path d="M9 16v4"></path>
      <path d="M15 16v4"></path>
    </svg>
  </button>
  <button type="button" class="demo-switch-tablet" aria-label="Toggle tablet" title="Tablet Mode">
    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 4a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16z"></path>
      <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
    </svg>
  </button>
  <button type="button" class="demo-switch-mobile" aria-label="Toggle Mobile" title="Mobile Mode">
    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"></path>
      <path d="M11 4h2"></path>
      <path d="M12 17v.01"></path>
    </svg>
  </button>
 </div>
`;

// browser preview device toggle
var demoBlock = document.querySelector(".demo-content");
if (demoBlock) {
  var toogleDesktop = document.querySelector(".demo-switch-desktop");
  var toogleTablet = document.querySelector(".demo-switch-tablet");
  var toogleMobile = document.querySelector(".demo-switch-mobile");

  toogleDesktop.addEventListener("click", function () {
    demoBlock.classList.remove("demo-mobile");
    demoBlock.classList.remove("demo-tablet");
  });
  toogleTablet.addEventListener("click", function () {
    demoBlock.classList.add("demo-tablet");
    demoBlock.classList.remove("demo-mobile");
  });
  toogleMobile.addEventListener("click", function () {
    demoBlock.classList.add("demo-mobile");
    demoBlock.classList.remove("demo-tablet");
  });
}
document.addEventListener("DOMContentLoaded", function (event) {
  var demoSwitch = document.querySelectorAll(".demo-switch button");
  if (demoSwitch) {
    demoSwitch.forEach(function (el, key) {
      el.addEventListener("click", function () {
        el.classList.add("active");
        demoSwitch.forEach(function (ell, els) {
          if (key !== els) {
            ell.classList.remove("active");
          }
        });
      });
    });
  }
});

// site reference
var url = new URL(window.location.href);
var ref = url.searchParams.get("ref");
var ghtOnly = document.querySelectorAll(".gethugothemes");
var tfOnly = document.querySelectorAll(".themefisher");
if (ref === "themefisher") {
  [].forEach.call(ghtOnly, function (e) {
    e.style.display = "none";
  });

  [].forEach.call(tfOnly, function (e) {
    e.style.display = "block";
  });
} else {
  [].forEach.call(ghtOnly, function (e) {
    e.style.display = "block";
  });

  [].forEach.call(tfOnly, function (e) {
    e.style.display = "none";
  });
}

// frame hide/show
var demoHeader = document.querySelector(".demo-header");
var headerToggle = document.querySelector(".demo-header-toggler");
var demoWrapper = document.querySelector(".demo-wrapper");
headerToggle.addEventListener("click", function () {
  headerToggle.classList.toggle("active");
  demoHeader.classList.toggle("close");
  demoWrapper.classList.toggle("full-view");
});


let pageView = document.querySelector('#pageView');
pageView.value = demoLinkValue;
pageView.addEventListener('change', function (event) {
  iframeView.src = pageView.value;
  var url = new URL(location.href);
  var search_params = url.searchParams;
  search_params.set('demoLink', pageView.value);
  url.search = search_params.toString();
  var new_url = url.toString();
  ChangeUrl(pageView.value, new_url);
});

if(!demoLinkValue){
  pageView.selectedIndex = 0;
  pageView.dispatchEvent(new Event('change'));
}


function ChangeUrl(page, url) {
  if (typeof (history.pushState) != "undefined") {
    var obj = {Page: page, Url: url};
    history.pushState(obj, obj.Page, obj.Url);
  } else {
    window.location.href = url;
    // alert("Browser does not support HTML5.");
  }
}


let botaoProximo = document.querySelector('#proximo');
let botaoAnterior = document.querySelector('#anterior');

botaoProximo.addEventListener('click', function (event) {
  var idx = pageView.selectedIndex;
  var options = pageView.options;
  console.log("Idx: "+idx+"; IndexOptions: " + options[idx].index + " is " + options[idx].text + '; total: '+options.length);
  if(idx<options.length-1){
    pageView.selectedIndex = (idx+1);
    pageView.dispatchEvent(new Event('change'));
  }
});

botaoAnterior.addEventListener('click', function (event) {
  var idx = pageView.selectedIndex;
  var options = pageView.options;
  console.log("Idx: "+idx+"; IndexOptions: " + options[idx].index + " is " + options[idx].text + '; total: '+options.length);
  if(idx>0){
    pageView.selectedIndex = (idx-1);
    pageView.dispatchEvent(new Event('change'));
  }
});