module.exports = {
  SiteTitle: "Daniel",
  Sitelogo: "#",
  SiteLogoText: "Daniel",
  SiteAuthor: "Daniel Tillero",
  SiteDescription: "Software Engineer",
  defaultDescription: "Software engineer!",
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  },
  SiteSocialLinks: {
    twitter: "https://twitter.com/dtmdot",
    github: "https://github.com/gardensgreen",
    linkedin: "https://www.linkedin.com/in/danieltillero/",
  },
  SiteAddress: {
    city: "Casablanca",
    region: "CurvaSud",
    country: "Morocco",
    zipCode: "ZipCode",
  },
  SiteContact: {
    email: "danieltillero67@gmail.com",
    phone: "9544960899",
  },
  SiteCopyright: "2020",
}
