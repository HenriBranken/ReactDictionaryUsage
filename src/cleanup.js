// To escape the regular expression itself.
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

// A function for cleaning up the output received from the API.
// Remove 'decorations' not needed in the Definition & Example Usage.
export function replaceAll(str) {
  str = str.replace(new RegExp(escapeRegExp("{it}"), "g"), "");
  str = str.replace(new RegExp(escapeRegExp("{/it}"), "g"), "");
  str = str.replace(new RegExp(escapeRegExp("{bc}"), "g"), "");
  str = str.replace(new RegExp(escapeRegExp("{wi}"), "g"), "");
  str = str.replace(new RegExp(escapeRegExp("{/wi}"), "g"), "");
  str = str.replace(/{.*}/, "");
  return str;
}

/*
[1]
Chris Sev (28 October 2020), How to replace All Instances of a String in JavaScript, Accessed on 5 July 2023, Retrieved From: https://www.digitalocean.com/community/tutorials/replace-all-instances-of-a-string-in-javascript

[2]
coolaj86 (6 August 2011), Escape string for use in Javascript regex, Accessed on 5 July 2023. Retrieved From: https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
*/
