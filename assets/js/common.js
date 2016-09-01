// Initialize and setup facebook js sdk
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1136800093076582',
      xfbml      : true,
      version    : 'v2.7'
    });

    // To verify if you're logged or not
    FB.getLoginStatus(function(response) {
		  	if (response.status === 'connected') {
		  		document.getElementById('status').innerHTML = 'We are connected';
		  	} else if (response.status === 'not_authorized'){
		  		document.getElementById('status').innerHTML = 'We are not logged in';
		  	} else {
		  		document.getElementById('status').innerHTML = 'You are not logged in to Facebook';
		  	}
	  });

		// Make the API call
		FB.api(
		  "/search",
		  "GET",
		  {
		  	"type": "post",
   			"q": "homerefill",
		  	"fields":"id,name,name_with_location_descriptor,tagged{target,targeting,with_tags},feed{target,targeting,with_tags}"
		  },
		  function (response) {
		      if (response && !response.error) {
		        document.getElementById('api').innerHTML = 'Show the API';
		      } else if (response && response.error) {
						document.getElementById('api').innerHTML = 'Do not show the API';
		      }
		    }
		);

		// This code used work in the last version to api | Error message: "(#11) Post search has been deprecated"
		// GET /search?q={https://graph.facebook.com/search?q=%23homerefill}&type=post&access_token={EAACEdEose0cBAIhuf8hUWkdP7cAKfxgbxOChkmeySIXdqZBy6NlDzNMZBZBqBu252kZAdcLlr2fcBRtmEYhZBdWl2k2KxVYZBiHZCZApZC3i1R0DpMAOEOTYcHuCxa0bIJlgRhfka2ljRf3MnnqS4FjMZC3InLHHxN8v965yCmBI5d5wZDZD}

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  function login() {
  	FB.login(function(response) {
  		if (response.status === 'connected') {
  			document.getElementById('status').innerHTML = 'We are connected';
  		} else if (response.status === 'not_authorized') {
  			document.getElementById('status').innerHTML = 'We are not logged in';
  		} else {
  			document.getElementById('status').innerHTML = 'You are not logged in Facebook';
  		}
  	});
  }