/* Image 2stage fallback cf_optimized->origin->placeholder */
function loadFallback(element) {
    const placeholder = 'https://static.ladendirekt.com/frontend-static-assets/images/placeholder.svg';
    var fallbackImage = element.getAttribute('data-image-original');

    var image = new Image();
    image.onload = function() {
        element.src = this.src;
        element.setAttribute('data-source', 'origin');
        if (element.hasAttribute('data-zoom-image'))
           element.setAttribute('data-zoom-image', this.src);
    }
    image.onerror = function() {
        element.src = placeholder;
        if (element.hasAttribute('data-zoom-image'))
           element.setAttribute('data-zoom-image', placeholder);
    }
    image.src = fallbackImage;
}

