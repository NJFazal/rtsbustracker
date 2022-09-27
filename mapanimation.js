<script>
mapboxgl.accessToken =
'pk.eyJ1Ijoic29mdGV4cGVyaW1lbnQiLCJhIjoiY2tjMngyZm9rMDFvajJzczJ3aWo0bnh6aiJ9.Bc_qK9Xf8SFBXkFM_x2gpg'

  let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.608241, 43.158973],
      zoom: 12
  });
 
var marker = new mapboxgl.Marker()
    .setLngLat([-77.608241, 43.158973])
    .addTo(map);

const busStops = [
    [-77.608241, 43.158973],
    [-77.576570, 43.189202], 
    [-77.575712, 43.183382],
    [-77.575884, 43.177060],
    [-77.579575, 43.172553],
    [-77.580175, 43.171990],
    [-77.580261, 43.170050],
    [-77.583437, 43.163476],
    [-77.586924, 43.193831],
];

let counter = 0;
function move(){
  setTimeout(()=>{
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  },1000); 
}
</script>
