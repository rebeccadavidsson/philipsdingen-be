module.exports = {
  categories: [
    {
      name: "Back",
      slug: "back",
    },
    {
      name: "Front",
      slug: "front",
    },
    {
      name: "SSG",
      slug: "ssg",
    },
    {
      name: "Container",
      slug: "container",
    },
    {
      name: "Database",
      slug: "database",
    },
    {
      name: "Other",
      slug: "other",
    },
  ],
  products: [
    {
      id: 1,
      title: "Gatsby",
      description:
        "Blazing fast modern site generator for React. Go beyond static sites: build blogs, e-commerce sites, full-blown apps, and more with Gatsby.",
      price: 1.84,
      slug: "gatsby",
      status: "published",
      Custom_field: [
        {
          id: 1,
          title: "Select the size of your sticker",
          required: true,
          options: "Small[+0.00]|Medium[+0.40]|Large[+0.80]",
        },
      ],
      image: null,
      categories: [
        {
          id: 3,
        },
      ],
    },
  ],
};
