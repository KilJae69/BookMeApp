export function formatInputForFetch(input) {
  let url = input;
  if (!url.match(/^https?:\/\//)) {
    url = "https://" + url; 
  }
  return url;
}
