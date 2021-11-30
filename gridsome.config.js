// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Stan’s Advent of Code",
  plugins: [
    {
      use: "@gridsome/source-airtable",
      options: {
        // Add these to a .env file
        // Details on finding these values can be found at:
        // https://gridsome.org/plugins/@gridsome/source-airtable
        apiKey: process.env.AIRTABLE_KEY, //required
        baseId: process.env.AIRTABLE_BASE, //required
        tables: [
          {
            name: "Years",
            typeName: "Year", //required - needs to match template name
            select: {}, //optional
            links: [], //optional
          },
          {
            name: "Days",
            typeName: "Day", //required - needs to match template name
            select: {}, //optional
            links: [], //optional
          },
        ],
      },
    },
  ],
  templates: {
    Day: "/days/:id", //optional
    Year: "/years/:id", //optional
    // Parties: "/parties/:id", //optional
  },
};
