function initMap() {
    const uluru = { lat: 45.497046, lng: 9.643638 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,

    });
    const cestini = [
        [{ lat: 45.497046, lng: 9.643638 }],
        [{ lat: 34.8559195, lng: -111.7988186 }],
        [{ lat: 34.832149, lng: -111.7695277 }],
        [{ lat: 34.823736, lng: -111.8001857 }],
        [{ lat: 34.800326, lng: -111.7665047 }],
      ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    //Markers
    cestini.forEach(([position]) => {
        const marker = new google.maps.Marker({
            position,
            map,
            optimized: false,
          });
        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent('<h1>CIAO</h1>');
            infoWindow.open(marker.getMap(), marker);
        });
    });
    
}