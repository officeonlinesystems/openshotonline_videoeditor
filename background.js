chrome.runtime.onInstalled.addListener(function (){
    chrome.contextMenus.create({
        title: "Edit with Openshot online",
        id: "openshotUpload",
        contexts: ["link"]
    });
});


chrome.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId === "openshotUpload") {
        var imgUrl = info.linkUrl;
        openshotUpload(imgUrl);
    }
});



function openshotUpload(imgUrl) {      
     
  	var filenamex = Math.floor(Math.random() * 2000000) + ".mp4";
  	 
  	if ( (imgUrl.indexOf("http://") !=-1) || (imgUrl.indexOf("https://") !=-1)) {
    	finalurl =  "https://www.offidocs.com/community/preedit-openshot.php?fileurl="+ encodeURIComponent(imgUrl)+"&filename="+ filenamex ;
		window.open(finalurl,'_blank');
  	}	
  	else {
  		alert("This is not a video. Select a url with a video");
  			
  	}		

	
}





