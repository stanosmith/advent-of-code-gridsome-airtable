<template>
  <!-- This is the Day Details View Page-->
  <Layout>
    <h1 class="handwriting">
      <span>
        {{ $page.day.name }}
      </span>
    </h1>
  </Layout>
</template>

<script>
import moment from "moment";
import Layout from "~/layouts/Default.vue";

export default {
  components: {
    Layout,
  },
  data() {
    return {
      attachmentColors: [
        "hsl(345, 70%, 50%)", //Airtable Red
        "hsl(197, 100%, 55%)", // Airtable Blue
        "hsl(43, 100%, 49%)", // Airtable Yellow
      ],
    };
  },
  metaInfo() {
    return {
      title: this.$page.day.name,
    };
  },
  computed: {
    // The variety of dates is intended as an example of ways to use Moment to get different date formats.
    // Unused computed values should be removed.
    // formattedStart: function() {
    //   return moment(this.$page.day.startDate).format("MM/DD/YYYY h:mm A");
    // },
    // formattedEnd: function() {
    //   return moment(this.$page.day.endDate).format("MM/DD/YYYY h:mm A");
    // },
    // formattedDate: function() {
    //   const start = moment(this.$page.day.startDate).format("MM/DD/YYYY");
    //   const end = moment(this.$page.day.endDate).format("MM/DD/YYYY");
    //   if (start == end) {
    //     return (
    //       moment(this.$page.day.startDate).format("MM/DD/YYYY h:mm A") +
    //       " - " +
    //       moment(this.$page.day.endDate).format("h:mm A")
    //     );
    //   } else {
    //     return (
    //       moment(this.$page.day.startDate).format("MM/DD/YYYY h:mm A") +
    //       " - " +
    //       moment(this.$page.day.endDate).format("MM/DD/YYYY h:mm A")
    //     );
    //   }
    // },
  },
};
</script>

<page-query>
query Day ($id: ID!) {
  day: day(id: $id) {
    id
    name
    year
    stars
    inputs {
      id
      url
      filename
    }
  }
}
</page-query>

<style scoped>
/* 
"hsl(43, 100%, 49%)", Airtable Yellow
"hsl(197, 100%, 55%)", Airtable Blue
"hsl(345, 70%, 50%)"  Airtable Red 
*/

h1 > span {
  border-bottom: 4px solid hsl(345, 70%, 50%);
  padding-bottom: 4px;
}

h1 {
  margin-bottom: 16px;
}

.underline--blue {
  border-bottom: 4px solid hsl(197, 100%, 55%);
}

.underline--yellow {
  border-bottom: 4px solid hsl(43, 100%, 49%);
}

.date--fun {
  background: hsl(43, 100%, 49%);
  padding: 4px;
  font-weight: bold;
}

.paragraph--whitespace {
  /** This converts the `\n`'s into line breaks when *
  *   pulled from Airtable's Long text fields        */
  white-space: pre-wrap;
}

.attachments {
  display: flex;
  justify-content: space-evenly;
}

.attachment--item {
  padding: 15px;
  display: flex;
  align-items: center;
  width: 30%;
  word-wrap: anywhere;
  flex-direction: column;
  border-radius: 10px;
  text-align: center;
  justify-content: space-between;
}

.file--button-download {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  padding: 0;
}
</style>
