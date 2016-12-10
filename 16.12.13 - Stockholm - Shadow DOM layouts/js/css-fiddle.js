function initializeCssFiddle(selector){
    function applyCSS(textarea) {
        var tmp = document.getElementById("currentSlideFiddleStyle");
        tmp.innerHTML = textarea.value.replace(/^(\.\w+)/g, "#" + textarea.getAttribute("data-id") + " $1");
        textarea.rows = textarea.value.split(/\n/).length;
    }

    function applyCSSToTextAreas(event) {
        var textareas = event.currentSlide.querySelectorAll(selector);
        for (var i = 0; i < textareas.length; i++) {
            applyCSS(textareas[i]);
        }
    }

    Reveal.addEventListener('slidechanged', applyCSSToTextAreas);
    Reveal.addEventListener('ready', applyCSSToTextAreas);

    // Initialize textareas
    var textareas = document.querySelectorAll(selector);
    for (var i = 0; i < textareas.length; i++) {
        var textarea = textareas[i];
        textarea.addEventListener('input', function() {
            applyCSS(this);
        });
    }
}
