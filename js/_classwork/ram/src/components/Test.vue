<template>
  <div class="test">
{{ test }}
<h1>{{newTest }}</h1>
  </div>
</template>

<script>
export default {
 data() {
    return {
        test: 'test text'
    }
 }, 
 computed: {
    newTest(){
        return this.upperCaseTest(this.test)
    }
 },
 watch: {
    test(newVal, oldVal){
        console.loge(newVal, oldVal)
    }

 },
 methods: {
    upperCaseTest (txt){
        return txt.toUpperCase()
    }
 }
}
</script>

<style>

</style>