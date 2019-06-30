<template>
  <div class="dashboard-container">
    <section>
        <section-first></section-first>
    </section>
    <section>
        <section-second></section-second>
    </section>
  </div>
</template>
<script>
import sectionFirst from './section-first.vue';
import sectionSecond from './section-second.vue';
export default{
    components: {
        sectionFirst,
        sectionSecond
    },
    data () {
        return {
         };
    },
    mounted(){
    },
    watch:{
    },
    computed:{
   },
    methods:{
    }
};
</script>