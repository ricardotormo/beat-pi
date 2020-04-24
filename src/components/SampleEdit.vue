<template>
  <div class="type__container">
    <div class="type--trash">
      <span>
        <i class="fi-trash"></i>
      </span>
    </div>
    <div class="name">
      <!-- <span class="type--cell">{{ instrument.name }}</span> -->
      <span class="instrument__name__cell">Instrument</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.type__container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.5%;
  background-color: #6c6c6c;
  color: #fff;
  & .name {
    width: 80%;
    .instrument__name__cell {
      text-align: center;
      max-width: 80%;
      margin: auto;
      display: block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 0.7em;
    }
  }
}
.type--trash {
  height: 100%;
  box-shadow: 1px 0 0 rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  cursor: pointer;
  &:hover {
    span {
      background: rgba(255, 255, 255, 0.6);
    }
  }
  span {
    height: 20px;
    width: 20px;
    background: white;
    border-radius: 50%;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
