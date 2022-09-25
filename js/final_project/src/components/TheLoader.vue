<template>
  <div class="loading-box">
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="text">
      <b>
        <i>{{ text }}</i>
      </b>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: false,
      type: String,
      default: "Loading...",
    },
  },
};
</script>

<style scope>
.loading-box {
  position: fixed;
  top: 40%;
  width: 25%;
  margin: auto;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.394);
  box-shadow: 0px 0px 9px -2px white;
  z-index: 11;
  text-align: center;
}
.text {
  color: white;
  padding-bottom: 10px;
  font-size: 20px;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: white;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
