<template>
  <!-- This is the Years list Page-->
  <Layout>
    <div>
      <div v-for="(edge, index) in $page.years.edges" :key="edge.node.id">
        <div>{{edge.node.name}}</div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Years {
    years: allYear (){
      edges {
        node{
          id
          name
        }
      }
    }
  }
</page-query>

<script>
import Layout from "~/layouts/Default.vue";
import EventCard from "~/components/EventCard.vue";
export default {
  components: {
    Layout,
    EventCard,
  },
  data() {
    return {
      hrColors: [
        "#FCB400", // Airtable Yellow
        "#18BFFF", // Airtable Blue
        "#D92654", // Airtable Red
      ],
    };
  },
};
</script>
