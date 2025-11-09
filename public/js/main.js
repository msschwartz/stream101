SpatialNavigation.init();
SpatialNavigation.add({
  selector: ".control",
});
SpatialNavigation.makeFocusable();
SpatialNavigation.focus();

var OnKeyUpHandler = function (e) {
  switch (e.keyCode) {
    case 13: // Enter
      alert("You pressed Enter on " + e.target.innerText);
      break;
    default:
      break;
  }
};

document.addEventListener("keyup", OnKeyUpHandler, false);
