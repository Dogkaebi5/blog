export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/test/", "/syllable/initial/*", "/syllable/vowel/*", "/search/"],
      },
    ],
    sitemap: "https://dogkaebi.com/sitemap.xml",
  };
}
