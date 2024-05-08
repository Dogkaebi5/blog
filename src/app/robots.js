export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/test/", "/syllable/initial/*", "/syllable/vowel/*"],
      },
    ],
    sitemap: "https://dogkaebi.com/sitemap.xml",
  };
}
