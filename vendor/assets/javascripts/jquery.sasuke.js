function isHidden() {
  return document[getHiddenProperty()]
}

function getVisibilityChangeEvent() {
  var visProp = getHiddenProperty();
  if (visProp) {
var eventName = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
    return eventName
  }
}
var a = document.title;

document.addEventListener(getVisibilityChangeEvent(), function(event){
  if (isHidden())
      document.title = a + "(Inactive)"
  else
      document.title = a + "(Active)"
})