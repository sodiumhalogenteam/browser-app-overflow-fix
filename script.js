var css =
    "html {width: 95vw; height: 95vh; border: solid 1px red; position: relative; margin: 2.5vh auto 0;}",
  head = document.head || document.getElementsByTagName("head")[0],
  style = document.createElement("style");

head.appendChild(style);

style.type = "text/css";
if (style.styleSheet) {
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
console.log("Overflow Lens: ON 🤓");
