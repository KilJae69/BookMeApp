export function formatInputForFetch(input) {
  let url = input;
  if (!url.match(/^https?:\/\//)) {
    url = "http://" + url; // Prefix with http:// if no protocol is specified
  }
  return url;
}
