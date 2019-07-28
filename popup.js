(function(){
  
  var apps_urls = {
    png1: "https://www.offidocs.com/community/preedit-openshot.php",
    png2: "http://www.redcoolmedia.net/PopcornEditor/moviemaker.html",
    files: "https://www.offidocs.com/community/preprefile.php",
    email: "http://www.offilive.com/signin.php",
    usersettings: "https://www.offidocs.com/community/offidocschangeuser.html",
  };

  
  for (var link_id in apps_urls){
        var url = apps_urls[link_id];
        document.getElementById(link_id).firstElementChild.href = url;
  }
  
  aaa = encodeURIComponent("https://www.offidocs.com/community/preprefile.php");
  document.getElementById("usersettings").firstElementChild.href = "https://www.offidocs.com/community/offidocschangeuser.html?ira=" + aaa;
  
  document.getElementById('status').innerText = `Using Openshot free video editor`;
    
  for (var link_id in apps_urls) {
    var localLabel = chrome.i18n.getMessage("new_" + link_id);
    document.querySelector(`#${link_id} .label`).innerText = localLabel;
  }
  
  document.querySelector(`#png1 .label`).innerText = "OpenShot";
  document.querySelector(`#png2 .label`).innerText = "Movie maker";
  document.querySelector(`#files .label`).innerText = "File Manager";
  document.querySelector(`#usersettings .label`).innerText = "Set userid";
  document.querySelector(`#email .label`).innerText = "Email";
  
})();
