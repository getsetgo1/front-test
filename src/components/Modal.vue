<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <span class="close" @click="$emit('close')">&times;</span>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
}
</style>
