console.log('Diamond Initalized');

ripplet.defaultOptions.opacity = 0.3

initializeRippleOnNewElements(true)

function initializeRippleOnNewElements(overrideVerbose) {

  if (!overrideVerbose) {
    console.log('Diamond -|> Initalized ripplet on new elements.');
  }

  $('.d-btn').attr('data-ripplet', 'true')

}