const div = document.createElement('div');
div.id = "filtro-svg";

const body = document.querySelector('body');
body.appendChild(div);

$('div#filtro-svg').append('<svg> <defs> <filter id="protanopia"> <feColorMatrix type="matrix" values="1.3 0 0 0 0 0 0.9 0 0 0 0 0 0 0 0 0 0 0 1 0" /> <feColorMatrix type="saturate" values="2" /> </filter> <filter id="deuteranopia"> <feColorMatrix type="matrix" values="0.9 0 0 0 0 0 0.9 0 0 0 0 0 1.3 0 0 0 0 0 1 0" /> <feColorMatrix type="saturate" values="2" /> </filter> <filter id="tritanopia"> <feColorMatrix type="matrix" values="1.3 0 0 0 0 0 0.9 0 0 0 0 0 1.3 0 0 0 0 0 1 0" /> <feColorMatrix type="saturate" values="2" /> </filter> <feColorMatrix type="saturate" values="2" /> </filter> <filter id="normal"> <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /> </filter> </defs> </svg>');
$('#filtro-svg').css('display','none');

/**
 * @function toDichromaticColors
 * 
 * Apply the selected filter to all page pictures.
 * 
 * @param {string} id The filter to be applied.
 */
const toDichromaticColors = (id) => {
    const imgs = document.querySelectorAll('img');
    for (img of imgs)
        img.style.cssText = `-webkit-filter: url(#${id}); filter: url(#${id});`;
}

/**
 * Triggers 'toDichromaticColors'.
 */
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        toDichromaticColors(request.message);
    }
);