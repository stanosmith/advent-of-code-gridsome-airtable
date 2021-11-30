<template>
  <!-- This is the Years list Page-->
  <Layout>
    <div>
      <div v-for="(edge, index) in $page.years.edges" :key="edge.node.id">
        <div><g-link :to="'years/'+edge.node.id">{{edge.node.name}}</g-link></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Years {
    years: allYear (sort: { by: "name", order: ASC }){
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
import EventCard from "~/components/DayCard.vue";
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
