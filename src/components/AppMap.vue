<script setup lang="ts">
import { ref, onMounted } from 'vue';
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import "leaflet.markercluster";

const initialMap = ref(null);

const props = defineProps<{
  longitude: number;
  latitude: number;
}>();

onMounted(()=> {
  initialMap.value = L.map('map').setView([props.latitude, props.longitude], 6);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(initialMap.value);
});
</script>

<template>
  <div>
    <h3>An interactive leaflet map</h3>
    <div id="map" style="height:90vh;"></div>
  </div>
</template>
