<template>
<div class="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
</template>
<script>
export default {
  name: 'Loader',
};
</script>
<style scoped>

.loading {
  display: flex;
  justify-content: center;
}
.loading span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #f1c40f;
  margin: 4px;

  animation: dots .6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
}

.loading span:nth-child(1) {
  animation-delay: .1s;
}

.loading span:nth-child(2) {
  animation-delay: .2s;
}

.loading span:nth-child(3) {
  animation-delay: .3s;
}

.loading span:nth-child(4) {
  animation-delay: .4s;
}

@keyframes dots {
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(0,30px,0);
  }
}

</style>
