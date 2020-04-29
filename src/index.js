var Cesium = require('cesium/Cesium');

require('./css/main.css');
require('cesium/Widgets/widgets.css');

var viewer = new Cesium.Viewer('cesiumContainer');

var city = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({ url: '/data/tileset.json'}));