<script setup lang="ts">
import { ref, onMounted } from 'vue';
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import "leaflet.markercluster";
import { LayerGroup, Map } from 'leaflet'

const initialMap = ref<LayerGroup | Map>();
const props = defineProps<{
  coords: {
    long: number;
    lat: number;
  }
}>();

onMounted(()=> {
  initialMap.value = L
    .map('map').setView([props.coords.lat, props.coords.long], 6);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(initialMap.value);

  L.marker([props.coords.lat, props.coords.long])
    .addTo(initialMap.value)
    .bindPopup("You are here")
    .openPopup();
});
</script>

<template>
  <div id="map" class="rounded-lg h-96 w-full"></div>
</template>
