# AnnotateJS - Paint/Annotate on any Website
A small JavaScript script that allows you to paint on any website, in three different colours!

[Here it is as a Chrome Extension](https://chrome.google.com/webstore/detail/whereclick/jdpombalknfdfnheaokmglaacmlgbeen)

I recommend you use the `whereClick.canvas.js` file as it is the cleanest.

Howerver, if you don't want to use the canvas, you can use `whereClick.animationFrame.js` or `whereClick.js` where needed - as this does not require jQuery. The animation frame perhaps slightly imrpoves the performance of the drawing compared to without. Also, these don't have the button functionality for changing colours as of time of writing. You can hold the shift or ctrl key though, see below for details.

------

### WhereClick with Canvas `whereClick.canvas.js`

![Screenshot](/resources/whereClick.canvas.screenshot.png)

**To change colour:**
  - b = blue
  - c = cyan
  - g = green
  - o = orange
  - p = purple
  - r = red
  - v = violet
  - y = yellow

------

### WhereClick without Canvas

![Screenshot](/resources/whereClick.screenshot.png)

------

#### How To Test Drive

You can copy and paste the contents of `whereClick.animationFrame.js` into your console and start drawing (or make it a bookmarklet).

- The default colour is Red
  - Hold shift before clicking for Green
  - Hold ctrl before clicking for Blue

------

My website: [www.shanehoban.com](http://www.shanehoban.com)

My Twitter: [@shanehoban](https://www.twitter.com/shanehoban)
