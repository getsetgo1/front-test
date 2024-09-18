<script setup>
import { ref } from 'vue';
import { KakaoMap } from 'vue3-kakao-maps';
import Modal from './Modal.vue';
// 위도 경도 받는 리스트 : 여기가 강의 과외 장소 리스트 받는 거로 생각하면 됨..!
// 여기서 클릭했을 때 클러스터 클릭 이벤트

const markerList = [
  {
    lat: 37.27943075229118,
    lng: 127.01763998406159
  },
  {
    lat: 37.55915668706214,
    lng: 126.92536526611102
  },
  {
    lat: 35.13854258261161,
    lng: 129.1014781294671
  },
  {
    lat: 37.55518388656961,
    lng: 126.92926237742505
  },
  {
    lat: 35.20618517638034,
    lng: 129.07944301057026
  },
  {
    lat: 37.561110808242056,
    lng: 126.9831268386891
  }
];
const map = ref();
const onLoadKakaoMap = (mapRef) => {
  map.value = mapRef;
};
const modalVisible = ref(false);
const modalMessage = ref('');


// KakaoMap 내부의 clusterer 객체를 가져와 이벤트 핸들러를 등록해줍니다.
const clusterer = ref();
const onLoadKakaoMapMarkerCluster = (clustererRef) => {
  clusterer.value = clustererRef;

  window.kakao.maps.event.addListener(clusterer.value, 'clusterclick', function (cluster) {
    const currentLevel = map?.value?.getLevel();
    if (currentLevel !== undefined && !isNaN(currentLevel)) {
      const newLevel = currentLevel - 1; //클러스터 클릭시 1레벨 zoom in
      map.value?.setLevel(newLevel, { anchor: cluster.getCenter() });
    }
    modalMessage.value = '클러스터가 클릭되었습니다!';
    modalVisible.value = true;
  });
};
const closeModal = () => {
  modalVisible.value = false;
};
</script>

<template>
  <!-- 여기에 lat이랑 lng를 각 사용자의 구를 받아서 넣기.. -->
  <KakaoMap 
  :lat="36.34" 
  :lng="127.77" 
  :level="14"
  :disableClickZoom="true" 
  :markerCluster="{ markers: markerList }"
  @onLoadKakaoMapMarkerCluster="onLoadKakaoMapMarkerCluster"
  @onLoadKakaoMap="onLoadKakaoMap"
   />

   <Modal 
    :isVisible="modalVisible" 
    :message="modalMessage" 
    @close="closeModal" 
  />
</template>
