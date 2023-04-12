import './style.css';
import {Map, View} from 'ol';
import {Vector as VectorSource} from 'ol/source.js';
import {Vector as VectorLayer} from 'ol/layer.js';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature.js';
import {Fill, Stroke, Style} from 'ol/style.js';
import Point from 'ol/geom/Point.js';
import CircleStyle from 'ol/style/Circle';

const mapLayer = new TileLayer({
  source: new OSM()
});

const count = 3;
const features = new Array(count);
features[0] = new Feature(new Point([-12461026.30276253, 3977935.2578132707]));/*Phoenix Coordinates: -95.937672 20.851012*/
features[0].setStyle(
  new Style({
    image: new CircleStyle({
      fill: new Fill({color: 'red'}),
      stroke: new Stroke({color: 'black', width: 2}),
      radius: 10,
    })
  })
);
features[1] = new Feature(new Point([-13615772.70153345, 6016702.061829333]));//Seattle, Washington
features[1].setStyle(
  new Style({
    image: new CircleStyle({
      fill: new Fill({color: 'blue'}),
      stroke: new Stroke({color: 'black', width: 2}),
      radius: 15,
    }),
  })
);
features[2] = new Feature(new Point([-13574000.588928854, 4571245.8185172025]));//Clayton, CA
features[2].setStyle(
  new Style({
    image: new CircleStyle({
      fill: new Fill({color: 'aqua'}),
      stroke: new Stroke({color: 'black', width: 2}),
      radius: 10,
    }),
  })
);


const source = new VectorSource({
  features: features,
});

const vectorLayer = new VectorLayer({
  source: source,
});

const map = new Map({
  target: 'map',
  layers: [mapLayer, vectorLayer],
  view: new View({
    center: [-13432337.965647222, 4205678.201402327],
    zoom:4.8
  })
});

map.on('click', function(e){
  console.log(e.coordinate);
})



