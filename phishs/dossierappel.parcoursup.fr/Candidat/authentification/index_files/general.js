var GLOBALS={preventDefaultFocus:!1};function setFocusFirstInputToComplete(){var a=$("input:text[value='']");0<$(a).length&&$(a)[0].focus()}function afficher_bulle(a){a=document.getElementById(a);document.getElementById("pos");a.style.visibility="visible"==a.style.visibility?"hidden":"visible"}function afficher_popup(a){a=document.getElementById(a);a.style.display="none"==a.style.display?"block":"none"}
function blocking(a){document.layers?(current="none"==document.layers[a].display?"block":"none",document.layers[a].display=current):document.all?(current="none"==document.all[a].style.display?"block":"none",document.all[a].style.display=current):document.getElementById&&(vista="none"==document.getElementById(a).style.display?"block":"none",document.getElementById(a).style.display=vista)}
function show(a){document.layers&&document.layers[a]?document.layers[a].display="block":document.all&&document.all[a]?document.all[a].style.display="block":document.getElementById&&document.getElementById(a)&&(document.getElementById(a).style.display="block")}
function showInline(a){document.layers&&document.layers[a]?document.layers[a].display="inline":document.all&&document.all[a]?document.all[a].style.display="inline":document.getElementById&&document.getElementById(a)&&(document.getElementById(a).style.display="inline")}
function hide(a){document.layers&&document.layers[a]?document.layers[a].display="none":document.all&&document.all[a]?document.all[a].style.display="none":document.getElementById&&document.getElementById(a)&&(document.getElementById(a).style.display="none")}function confirmerSuppression(){return confirm("Etes-vous certain de vouloir supprimer cet \u00e9l\u00e9ment?")?!0:!1}
function isANumber(a,b,c){if(parseInt(a,10))for(var d=0;d<a.length;d++){if("0"!=a.charAt(d)&&!parseInt(a.charAt(d),10))return alert("Veuillez entrer une valeur num\u00e9rique pour "+b+" ."),c.focus(),!1}else return alert("Veuillez entrer une valeur num\u00e9rique non nulle pour "+b+" ."),c.focus(),!1;return!0}function estNombre(a){return!isNaN(a)}function change_focus(a){a.blur()}function isEmail(a){return 0<=a.indexOf("@")&&a.indexOf(".")>=a.indexOf("@")?!0:!1}
function verifMail(a){testm=!1;for(var b=1;b<a.length;b++)if("@"==a.charAt(b)&&b<a.length-4)for(var c=b;c<a.length-2;c++)"."==a.charAt(c)&&(testm=!0);return testm}function formatWebAdress(a){return 0==a.indexOf("http")?a:"http://"+a}function tronque(a,b){a.value.length>b&&(a.value=a.value.substring(0,b))}
function verifDate(a){if(""==a)return!1;a=a.match(/^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/);if(null==a)return!1;dtDay=a[1];dtMonth=a[3];dtYear=a[5];return 1>dtMonth||12<dtMonth||1>dtDay||31<dtDay||(4==dtMonth||6==dtMonth||9==dtMonth||11==dtMonth)&&31==dtDay||2==dtMonth&&(a=0==dtYear%4&&(0!=dtYear%100||0==dtYear%400),29<dtDay||29==dtDay&&!a)?!1:!0}
function CheckDate(a,b,c){var d=[31,28,31,30,31,30,31,31,30,31,30,31];return 0>=b||12<b?!1:0>=a||a>d[b-1]?2==b&&29==a?0==c%4&&0!=c%100||0==c%400:!1:!0}function popup(a){null!=a&&""!=a&&window.open(a)}function compterCar(a,b){a.value.length>b&&(a.value=a.value.substring(0,b))}function retourPage(a){document.forms[0].reset();document.forms[0].action=a;document.forms[0].submit()}
function trim(a){for(i=0;i<a.length&&" "==a.charAt(i);)i++;texte=a.substring(i,a.length);for(j=texte.length-1;0<j&&" "==texte.charAt(j);)j--;return texte=texte.substring(0,j+1)}function justeUnClic(a,b){hide(a);showInline(b)}function annulerJusteUnClic(a){showInline(a);hide("msgWait-"+a)}function setHtml(a,b){document.getElementById(a).innerHTML=b}
function ouvrirMessagerieOuContact(a){open(a,"messagerie_postbac","resizable=yes,location=yes,width="+screen.availWidth+",height="+screen.availHeight+",menubar=yes,status=yes,toolbar=yes,scrollbars=yes").focus()}function isMobile(){return/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())}
function conversionStandard(a){a=a.toLowerCase();a=a.replace(" ","");a=a.replace("'","");a=a.replace("-","");a=a.replace("_","");a=a.replace("(","");a=a.replace(")","");a=a.replace(".","");a=a.replace(",","");a=a.replace(":","");a=a.replace(";","");a=a.replace("/","");a=a.replace("\u00e0","a");a=a.replace("\u00e7","c");a=a.replace("\u00e2","a");a=a.replace("\u00e4","a");a=a.replace("\u00e8","e");a=a.replace("\u00e9","e");a=a.replace("\u00ea","e");a=a.replace("\u00eb","e");a=a.replace("\u00ef","i");
a=a.replace("\u00f4","o");a=a.replace("\u00f6","o");a=a.replace("\u00f9","u");a=a.replace("\u00fc","u");a=a.replace("\u00fb","u");return a=a.replace("&","")}
function initPays(a,b){"99"!=document.getElementById(a).options[document.getElementById(a).selectedIndex].value?(a=document.getElementById(a).options[document.getElementById(a).selectedIndex].value,"987"==a?document.getElementById(b).value="165":"988"==a?document.getElementById(b).value="149":document.getElementById(b).value="0"):document.getElementById(b).value="-1"};