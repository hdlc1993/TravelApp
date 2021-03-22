<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
       reload: this.reload

    }
  }}
</script>

<style lang="less">

@w:100%;
#app {
  width: 100%;
  height:100%;
}
html{
  /* 50px等于1rem */
	font-size:50px;
  height:100%;
}
body{
  height: @w;
  width: @w;
  font-size:.3rem;
}
a{
	text-decoration: none;
  color:black;  
}
.ct-wrap{
  width: @w;
  height: @w;
}
.border-top:before{
  content: "";
  position: absolute;
  width: @w;
  height:1px;
  border-top:1px solid #ccc;
}
.border-top:before{
  content: "";
  position: absolute;
  width: @w;
  height:1px;
  border-top:1px solid #ccc;
}
.border-top:before{
  content: "";
  position: absolute;
  width: @w;
  height:1px;
  border-top:1px solid #ccc;
}
.border-right:before{
  content:"";
  position: absolute;
  width: 1px;
  height: 100%;
  left:50%;
  border-right: 1px solid #e0e0e0;
}
</style>
