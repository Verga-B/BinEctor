var map;
        $(document).ready(function(){
          map = new GMaps({
            el: '#map',
            lat: 45.497046,
            lng: 9.643638
          });

          /* MARKER */
          map.addMarker({
            lat: 45.496214,
            lng: 9.643378,
            title: 'Marker with InfoWindow',
            infoWindow: {
              content: '<a onclick="fullboximg("../immagini/foto_es.jpeg", 365, 455, 15, 2); return false;" href="../immagini/foto_es.jpeg"> <img alt="demo" src="../immagini/foto_es.jpeg" class="foto_marker"/></a><p class="testo_marker">Via Roma</p>'
            }
          });
        });
        

