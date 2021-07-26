function initMap() {
    const caravaggio = { lat: 45.497046, lng: 9.643638 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: caravaggio,

    });
    const cestini = [
        [{ lat: 45.491491, lng: 9.645623 }, "../immagini/Cestini/1.jpeg"],
        [{ lat: 45.491500, lng: 9.643503 }, "../immagini/Cestini/2.jpeg"],
        [{ lat: 45.491767, lng: 9.649711 }, "../immagini/Cestini/3.jpeg"],
        [{ lat: 45.492131, lng: 9.641040 }, "../immagini/Cestini/4.jpeg"],
        [{ lat: 45.492311, lng: 9.648764 }, "../immagini/Cestini/5.jpeg"],
        [{ lat: 45.492455, lng: 9.640170 }, "../immagini/Cestini/6.jpeg"],
        [{ lat: 45.493026, lng: 9.640677 }, "../immagini/Cestini/7.jpeg"],
        [{ lat: 45.493086, lng: 9.647755 }, "../immagini/Cestini/8.jpeg"],
        [{ lat: 45.494078, lng: 9.641528 }, "../immagini/Cestini/9.jpeg"],
        [{ lat: 45.494469, lng: 9.645308 }, "../immagini/Cestini/10.jpeg"],
        [{ lat: 45.494621, lng: 9.642014 }, "../immagini/Cestini/11.jpeg"],
        [{ lat: 45.494664, lng: 9.646915 }, "../immagini/Cestini/12.jpeg"],
        [{ lat: 45.495015, lng: 9.642535 }, "../immagini/Cestini/13.jpeg"],
        [{ lat: 45.495259, lng: 9.642730 }, "../immagini/Cestini/14.jpeg"],
        [{ lat: 45.495302, lng: 9.642812 }, "../immagini/Cestini/15.jpeg"],
        [{ lat: 45.495788, lng: 9.645767 }, "../immagini/Cestini/16.jpeg"],
        [{ lat: 45.495882, lng: 9.645694 }, "../immagini/Cestini/17.jpeg"],
        [{ lat: 45.496123, lng: 9.642648 }, "../immagini/Cestini/18.jpeg"],
        [{ lat: 45.496282, lng: 9.645028 }, "../immagini/Cestini/19.jpeg"],
        [{ lat: 45.496557, lng: 9.644823 }, "../immagini/Cestini/20.jpeg"],
        [{ lat: 45.496714, lng: 9.644780 }, "../immagini/Cestini/21.jpeg"],
        [{ lat: 45.496735, lng: 9.649013 }, "../immagini/Cestini/22.jpeg"],
        [{ lat: 45.496979, lng: 9.645081 }, "../immagini/Cestini/23.jpeg"],
        [{ lat: 45.496998, lng: 9.645460 }, "../immagini/Cestini/24.jpeg"],
        [{ lat: 45.497046, lng: 9.643638 }, "../immagini/Cestini/25.jpeg"],
        [{ lat: 45.497366, lng: 9.645103 }, "../immagini/Cestini/26.jpeg"],
        [{ lat: 45.497739, lng: 9.645193 }, "../immagini/Cestini/27.jpeg"],
        [{ lat: 45.500600, lng: 9.645302 }, "../immagini/Cestini/28.jpeg"],
      ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    //Markers
    cestini.forEach(([position, content]) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: content,
            optimized: false,
          });
        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent('<img src=' + marker.getTitle() + ' alt="foto cestino" class="foto_marker">');
            infoWindow.open(marker.getMap(), marker);
        });
    });
    
}