#
# @class Dom
#
class Dom
    #
    # @param {HTMLEntity} canvas
    #
    constructor: (canvas) ->
        @body = document.getElementsByTagName('body')[0]
        @canvas = canvas

    #
    # @param {HTMLEntity} el - needs width and height attrs and position: absolute;
    #
    stretchAndCenter: (el) ->
        if not el.height and not el.height
            false

        LANDSCAPE_RATIO = el.height / el.width
        PORTRAIT_RATIO  = el.width / el.height
        IS_LANDSCAPE    = LANDSCAPE_RATIO < PORTRAIT_RATIO ? true : false
        winWidth = window.innerWidth
        winHeight = window.innerHeight
        winLandscapeRatio = winHeight / winWidth
        winPortraitRatio  = winWidth / winHeight
        left = 0
        top  = 0

        if IS_LANDSCAPE
            if LANDSCAPE_RATIO < winLandscapeRatio
                elWidth = winWidth
                elHeight = elWidth * LANDSCAPE_RATIO
                top  = (winHeight - elHeight) / 2
            else
                elHeight = winHeight
                elWidth = winHeight * PORTRAIT_RATIO
                left = (winWidth - elWidth) / 2
        else
            if PORTRAIT_RATIO < winPortraitRatio
                elHeight = winHeight
                elWidth = winHeight * PORTRAIT_RATIO
                left = (winWidth - elWidth) / 2
            else
                elWidth = winWidth
                elHeight = elWidth * LANDSCAPE_RATIO
                top  = (winHeight - elHeight) / 2

        el.style.width  = "#{Math.round(elWidth)}px"
        el.style.height = "#{Math.round(elHeight)}px"
        el.style.left   = "#{Math.round(left)}px"
        el.style.top    = "#{Math.round(top)}px"

        undefined

    getCanvas: () ->
        @canvas


module.exports = Dom