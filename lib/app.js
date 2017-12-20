
/* google maps API */
      // This example adds a search box to a map, using the Google Place Autocomplete
      // feature. People can enter geographical searches. The search box will return a
      // pick list containing a mix of places and predicted search terms.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 51.500152, lng:-0.126236},
          zoom: 2,
          mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

		// Create a marker for each place.
        let customeMarker = new google.maps.Marker({
              map: map,
              title: "Gran Telescopio Canarias",
              position: {lat:28.7636 , lng:-17.8947}
			  //place.geometry.location
            });
			
			
		// Create a marker for each place.
        let customeMarker1 = new google.maps.Marker({
              map: map,
              title: "Hobby-Eberly Telescope",
              position: {lat:30.681444 , lng:-104.014722}
			  //place.geometry.location
            });
			
		// Create a marker for each place.
        let customeMarker2 = new google.maps.Marker({
              map: map,
              title: "Southern African Large Telescope",
              position: {lat:-32.376006 , lng:20.810678}
			  //place.geometry.location
            });
		
		// Create a marker for each place.
        let customeMarker3 = new google.maps.Marker({
              map: map,
              title: "Subaru",
              position: {lat:19.825556 , lng:-155.476667}
			  //place.geometry.location
            });
			
		// Create a marker for each place.
        let customeMarker4 = new google.maps.Marker({
              map: map,
              title: "LAMOST",
              position: {lat:40.395761, lng:117.575861}
			  //place.geometry.location
            });
			
        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }


          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }
	  
//Nasa API JAVA taken from = https://api.nasa.gov/
var url = "https://api.nasa.gov/planetary/apod?api_key=56j71E0ymNKdDH9Ed3Xw0WxkOvd768lcFgNtWdgR";


$.ajax({
  url: url,
  success: function(result){
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
  
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none"); 
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.url);
  }
  $("#reqObject").text(url);
  $("#returnObject").text(JSON.stringify(result, null, 4));  
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}
});
