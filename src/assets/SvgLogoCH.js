import React, { Component } from 'react';

class SvgLogoCH extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full: this.screenWidth() > 700
    };

    window.addEventListener('resize', this.checkScreenWidth);
  }

  checkScreenWidth = () => {
    var full = this.screenWidth() > 700;
    if (full !== this.state.full) {
      this.setState({ full: full });
    }
  };

  screenWidth = () => {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.documentElement.clientWidth
    );
  };

  imgDefs = (t, x, y, w, h) => {
    return (
      '<pattern id="img1" patternUnits="userSpaceOnUse" width="' +
      w +
      '" height="' +
      h +
      '" >' +
      '<image xlink:href="' +
      t +
      '" x="' +
      x +
      '" y="' +
      y +
      '" width="' +
      w +
      '" height="' +
      h +
      '" />' +
      '</pattern>'
    );
  };

  render() {
    if (this.state.full) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 91.9 29.08"
          style={this.props.style || {}}
        >
          <path d="M41.2 11.9c-.33-.65-.89-1.23-1.33-1.82-.1-.14-.18-.6.15-.47.22.08.48.14.72.05.18-.07.47-.05.47.2v1.46c0 .15.02.45-.02.57m-.25-3.56l-.4-.07.02.47-.34-.38-.23.42-.06-.45-.47.14.31-.4-.38-.25.43-.06-.14-.43.38.25.15-.44.17.42.4-.26-.19.41.46.07-.41.23.3.33m2.26 0l-.4-.07v.47l-.32-.38-.24.42-.05-.45-.47.14.3-.4-.38-.25.43-.06-.14-.43.39.25.14-.44.17.42.4-.26-.18.41.46.07-.42.23.3.33m-.42 1.73c-.45.59-1 1.17-1.33 1.8-.04-.11-.02-.41-.02-.56V9.83c0-.25.3-.26.48-.2.24.1.5.03.71-.05.34-.12.26.33.16.48m.72 7.8c-.19.34-.53.52-.75.76-.4.44-.56.72-.6 1.1-.5-.89-1.47-3.49 1.27-6.49a6.16 6.16 0 0 0-.8 2.26c-.03.43.09.77.3 1.16.3.33.68.74.58 1.21" />
          <path d="M40.5 19.77a2.28 2.28 0 0 0-.64-1.15c-.27-.26-.7-.49-.8-.79-.07-.34.33-.7.6-1.1.24-.37.39-.78.34-1.27a5.05 5.05 0 0 0-.83-2.15 5.28 5.28 0 0 1 1.34 6.46m3.79-.4c-.04.46 0 1.05-.38 1.03-.18-.01-.35-.22-.71-.23-.21 0-.44.05-.65.12-.32.11-.07-.95.46-1.37.1-.07.4-.25.73-.75.15-.22.2-.22.29.08.17.42.19.64.26 1.12m-4.25.98a2.3 2.3 0 0 0-.65-.12c-.36.01-.54.22-.7.23-.4.02-.35-.57-.39-1.03.07-.48.1-.7.26-1.12.08-.3.13-.3.28-.07.34.5.64.68.73.75.54.42.79 1.48.47 1.36m3.41 1.13c-.21-.2-.5-.4-.67-.6-.12-.13.05-.3.22-.32.23-.01.44.01.7.09.49.13-.08.47-.25.83m-3.64-.61c-.29.29-.46.56-.63.63-.15-.33-.76-.75-.28-.79.3-.02.41-.12.61-.14.24-.03.5.1.3.3" />
          <path d="M42.57 24.36l-1.25-1.6-1.26 1.62a10.01 10.01 0 0 1-3.29-7.04 7.89 7.89 0 0 1 3-6.23 3.59 3.59 0 0 1 1.55-6.78c3.13 0 5.3 4.3 1.58 6.74a8 8 0 0 1 3.06 6.29 9.96 9.96 0 0 1-3.4 7zm6.56-19.73h-.07c-.78 0-1.59-.08-2.4-.26-2.43-.52-4.4-1.6-5.3-2.93h-.23c-.93 1.37-3.03 2.54-5.38 2.99-.78.15-1.57.21-2.32.2-1.1 2.56-1.25 5.9-1.25 8.85 0 3.14 1.6 6.56 4.63 9.88 1.9 2.07 3.77 3.5 4.44 3.98.67-.48 2.55-1.91 4.44-3.98 3.03-3.33 4.63-6.74 4.63-9.88 0-3.14-.15-6.39-1.19-8.85" />
          <path d="M45.95 23.6a30.46 30.46 0 0 1-4.6 4.1l-.1.07-.1-.07a30.3 30.3 0 0 1-4.6-4.1c-3.09-3.4-4.72-6.9-4.72-10.12 0-3.03.16-6.47 1.33-9.1l.04-.1h.12c.76.02 1.56-.05 2.37-.2 2.3-.44 4.34-1.58 5.2-2.91l.05-.08h.6l.05.08c.82 1.26 2.8 2.36 5.14 2.86.8.17 1.58.25 2.33.25h.3l.05.1c1.11 2.54 1.26 5.87 1.26 9.1 0 3.23-1.63 6.73-4.72 10.12zm4.38-19.8l-.29-.63-.69.02-.29.01c-.68 0-1.39-.08-2.1-.23-2.76-.6-4.58-2-4.69-2.96L40.21 0c-.12 1.05-2.05 2.5-4.73 3.02a10.18 10.18 0 0 1-2.26.17l-.7-.03-.28.63c-1.32 2.83-1.5 6.49-1.5 9.69 0 3.5 1.74 7.25 5.01 10.85a30.8 30.8 0 0 0 4.92 4.36l.58.4.58-.4c.1-.07 2.5-1.7 4.92-4.36 3.27-3.6 5-7.35 5-10.85 0-3.41-.17-6.95-1.42-9.68m30.95 8.59c0 .28.22.43.5.43.34 0 .79-.33.79-.77v-.33c-1.04.16-1.29.33-1.29.67m-10.42 4.07c-.3 0-.54.2-.54.6 0 .38.26.64.59.64.37 0 .54-.27.54-.57 0-.45-.27-.67-.6-.67m7.01-3.64c.34 0 .79-.33.79-.77v-.33c-1.04.16-1.29.33-1.29.67 0 .28.22.43.5.43m-2.99 3.72c-.42 0-.69.23-.69.69h1.39c0-.46-.27-.69-.7-.69" />
          <path d="M87.75 13.37c-.21-.02-.42-.05-.64-.05-.24 0-.44.03-.65.05v-2.08c0-.49-.2-.58-.42-.58-.32 0-.44.4-.44.7v1.52c0 .25.2.3.34.3v.14a9.6 9.6 0 0 0-1.6 0v-.14c.18 0 .3-.05.3-.43v-2.13c0-.28-.15-.32-.32-.32v-.14c.37-.08.84-.19 1.24-.35l-.01.72h.01a.98.98 0 0 1 .93-.62c.55 0 .93.25.93 1.18v1.73c0 .25.1.36.33.36v.14zm-2.65 1.76c0 .95-.74 1.33-.81 1.33-.03 0-.07-.04-.07-.06 0-.06.2-.4.2-.91 0-.16-.04-.42-.08-.64h.76v.28zm-1.2-1.76a6.34 6.34 0 0 0-1.25 0v-.54h-.01c-.35.52-.67.6-1.28.6-.6 0-1.04-.37-1.04-.98 0-.95.93-1.06 1.55-1.14.65-.07.7-.1.7-.31 0-.36-.3-.5-.64-.5-.57 0-.84.14-1.1.66h-.12l.02-.96c.38-.14.8-.24 1.27-.24.82 0 1.53.22 1.53 1.23v1.7c0 .24.14.34.37.34v.14zm-1.76 6.06c-.46 0-.84-.1-1.13-.24l-.05-.97h.14c.19.5.62.76 1.13.76.26 0 .59-.15.59-.47 0-.32-.47-.35-.95-.46-.47-.11-.94-.3-.94-.94 0-.86.75-1.15 1.63-1.15.3 0 .6.05.86.14l.06.94h-.13c-.17-.44-.57-.58-1.02-.58-.23 0-.53.09-.53.33 0 .34.48.36.95.49.47.12.94.33.94 1.03 0 .9-.94 1.12-1.55 1.12zm-1.64-.07c-.21-.02-.42-.04-.64-.04-.24 0-.44.02-.65.04V17.3c0-.49-.2-.58-.42-.58-.32 0-.44.4-.44.7v1.52c0 .24.2.3.34.3v.13a9.64 9.64 0 0 0-1.6 0v-.13c.18 0 .3-.06.3-.44v-2.12c0-.28-.15-.33-.32-.33v-.13c.37-.08.84-.2 1.24-.35l-.01.72h.01a.98.98 0 0 1 .93-.62c.55 0 .93.24.93 1.18v1.72c0 .26.1.37.33.37v.13zm-4.1-6.91c0-.95.93-1.06 1.55-1.14.65-.07.7-.1.7-.31 0-.36-.3-.5-.65-.5-.56 0-.83.14-1.08.66h-.14l.03-.96c.38-.14.8-.24 1.27-.24.82 0 1.53.22 1.53 1.23v1.7c0 .24.14.34.36.34v.14a6.34 6.34 0 0 0-1.24 0v-.54h-.01c-.36.52-.67.6-1.28.6-.6 0-1.04-.37-1.04-.98zm.17 5.31h-2.42c0 .8.65 1.05 1.14 1.05.36 0 .85-.19 1.2-.43l-.13.67c-.36.3-.87.38-1.32.38-1.04 0-1.89-.55-1.89-1.76 0-.97.71-1.7 1.75-1.7 1 0 1.67.6 1.67 1.53v.26zm-4.25-.73c0 .88-.76 1.2-1.52 1.2-.46 0-.62-.06-.74-.1-.17.04-.2.15-.2.22 0 .13.09.22.66.22h.88c.85 0 1.32.31 1.32.9 0 .79-.95 1.21-1.94 1.21-.72 0-1.27-.28-1.27-.69a.8.8 0 0 1 .05-.25l.86-.22c-.03.08-.03.17-.03.28 0 .19.16.43.65.43.46 0 .8-.18.8-.46 0-.3-.25-.38-.92-.38l-.74.02c-.82 0-1.12-.33-1.12-.8 0-.13.05-.32.2-.39l.53-.25a1.08 1.08 0 0 1-.38-.83c0-.79.64-1.18 1.51-1.18.4 0 .9.16 1.2.16.19 0 .46-.04.7-.08l-.16.52-.45.02a1 1 0 0 1 .11.45zm-3.55-.6l-.9 2.79c-.37 1.17-.79 1.46-1.24 1.46a.69.69 0 0 1-.41-.14l-.05-1h.14c.02.18.12.35.33.35.35 0 .6-.27.6-.48 0-.07-.07-.22-.2-.54l-1-2.48c-.06-.13-.13-.18-.29-.22v-.14a10.33 10.33 0 0 0 1.66 0v.14c-.12.01-.33 0-.33.17 0 .05.05.2.12.4l.5 1.5h.02l.32-1.23c.08-.28.15-.5.15-.58 0-.18-.12-.26-.32-.26v-.14c.2.02.4.05.6.05.2 0 .4-.03.6-.05v.14c-.2.01-.23.06-.3.26zm-3.17 2.93a6.67 6.67 0 0 0-.65-.04l-.56.04.02-.67h-.01c-.09.44-.42.74-.93.74-.55 0-.98-.22-.98-1.1v-1.65c0-.27-.16-.35-.32-.34v-.13c.42-.05.84-.17 1.32-.35-.03.17-.04.3-.04.43v1.97c.02.25.1.43.36.43.3 0 .5-.22.5-.64v-1.37c0-.27-.16-.35-.3-.34v-.13c.4-.05.82-.17 1.3-.35-.03.17-.04.3-.04.43v2.57c0 .26.1.37.33.37v.13zm-3.58-6.13v.14a9.64 9.64 0 0 0-.78-.05c-.3 0-.57.03-.84.05v-.14c.2 0 .32-.05.32-.43V9.28c0-.51-.1-.54-.32-.59v-.13a4.3 4.3 0 0 0 1.3-.39l-.02.59v1.71h.02c.08-.17.2-.3.35-.38.16-.08.34-.13.52-.13.55 0 .93.25.93 1.18v1.73c0 .25.1.36.33.36v.14c-.21-.02-.42-.05-.64-.05-.24 0-.44.03-.64.05v-2.08c0-.49-.2-.58-.43-.58-.37 0-.44.36-.44.67v1.55c0 .25.2.3.34.3zm-.42 1.7c-.24.02-.33.1-.33.3v3.7c0 .2.09.3.33.3v.13c-.31-.02-.59-.04-.85-.04s-.54.02-.85.04v-.13c.24 0 .33-.1.33-.3v-1.62h-1.71v1.62c0 .2.08.3.32.3v.13c-.3-.02-.58-.04-.84-.04s-.54.02-.85.04v-.13c.24 0 .33-.1.33-.3v-3.7c0-.2-.09-.28-.33-.3v-.12c.31.02.59.04.85.04s.53-.02.84-.04v.13c-.24 0-.32.1-.32.3v1.4h1.7v-1.4c0-.2-.08-.3-.32-.3v-.13c.31.02.59.04.85.04s.54-.02.85-.04v.13zm-5.51-3.82c0-1.23.86-2.42 2.51-2.42.58 0 1.01.12 1.17.18 0 .48 0 .94.05 1.4h-.14c-.11-.59-.57-.9-1.16-.9-.8 0-1.43.63-1.43 1.69 0 .8.66 1.7 1.6 1.7.4 0 .96-.18 1.34-.5l-.08.75a2.6 2.6 0 0 1-1.48.47 2.32 2.32 0 0 1-2.38-2.37zm-.7-.65h-.77v-.28c0-.95.74-1.33.81-1.33.02 0 .07.04.07.06 0 .06-.2.4-.2.9 0 .16.04.43.08.65zm8.93-.25c.38-.08.84-.19 1.24-.35v.72a.98.98 0 0 1 1.18-.58l.05 1.05h-.08c-.12-.23-.25-.34-.51-.34-.42 0-.6.46-.6.82v1.43c0 .18.27.26.42.27v.14a11.24 11.24 0 0 0-1.68 0v-.14c.19 0 .3-.05.3-.43v-2.13c0-.28-.15-.32-.32-.32v-.14zM67 13.23c.12 0 .32-.05.32-.3v-2.26c0-.28-.15-.32-.32-.32v-.14c.46-.05 1-.2 1.28-.35v3.03c0 .31.18.34.33.34v.14c-.27-.02-.54-.05-.8-.05-.27 0-.53.03-.81.05v-.14zm.73-4.63c.36 0 .55.24.55.57 0 .3-.2.56-.51.56-.34 0-.58-.22-.58-.56 0-.32.2-.57.54-.57zm2.86 1.36c.3 0 .6.05.87.14l.06.95h-.13c-.17-.44-.57-.6-1.02-.6-.23 0-.53.1-.53.34 0 .34.47.37.95.49.47.12.94.33.94 1.04 0 .9-.94 1.12-1.55 1.12-.46 0-.84-.12-1.14-.24l-.04-.98h.13c.2.51.63.77 1.13.77.27 0 .6-.15.6-.48 0-.31-.48-.34-.95-.46-.47-.1-.94-.3-.94-.93 0-.87.75-1.16 1.62-1.16zm1.44.08h.39v-.48c.26-.1.57-.33.77-.55h.18v1.03h.77v.53h-.77v1.72c0 .37.17.53.44.53a.7.7 0 0 0 .42-.16l-.08.61c-.21.11-.46.17-.73.17-.86 0-1-.55-1-1.07v-1.8h-.39v-.53zm2.41 3.2c.12 0 .32-.06.32-.32v-2.25c0-.28-.15-.32-.32-.32v-.14a4 4 0 0 0 1.28-.35v3.03c0 .31.18.34.33.34v.14c-.27-.02-.54-.05-.8-.05-.27 0-.53.03-.81.05v-.14zm.73-4.64c.36 0 .55.24.55.57 0 .3-.2.56-.51.56-.34 0-.57-.22-.57-.56 0-.32.19-.57.53-.57zm16.73-.77v-.68c-.32-.02-.58-.3-.58-.66H51.56c.46 2.2.55 4.62.55 6.99 0 2.91-1.16 5.98-3.38 9h42.6a.64.64 0 0 1 .57-.58v-.68c-.32-.02-.58-.31-.58-.67 0-.36.26-.64.58-.67v-.68c-.32-.02-.58-.3-.58-.66 0-.36.26-.65.58-.67v-.68c-.32-.02-.58-.31-.58-.67 0-.35.26-.64.58-.66v-.68c-.32-.02-.57-.3-.58-.66.01-.35.26-.63.58-.65v-.68c-.32-.02-.58-.3-.58-.66 0-.36.26-.65.58-.67v-.68c-.32-.02-.58-.31-.58-.67 0-.36.26-.65.58-.67v-.68c-.32-.02-.58-.3-.58-.66 0-.36.26-.65.58-.67M22.71 9.48c-.34 0-.42.36-.42.55h.81c0-.2-.06-.55-.39-.55M18.1 14.5c0 .16.09.33.28.33.2 0 .37-.18.43-.24v-.48c-.17 0-.7 0-.7.4m-5.51.32c.33 0 .43-.3.43-.74 0-.37-.1-.7-.44-.7-.34 0-.44.31-.44.69 0 .43.1.75.44.75m8.16-3.93c.2 0 .36-.16.45-.21V9.63a.84.84 0 0 0-.43-.13c-.32 0-.35.37-.35.73 0 .32.02.68.33.68m-2.21 7.37c-.27 0-.29.3-.3.4h.55c0-.15-.01-.4-.25-.4m9.64.57c0 .32.07.52.28.52.17 0 .26-.09.3-.12v-.82a.41.41 0 0 0-.28-.1c-.21 0-.3.19-.3.52m-12.73-.57c-.27 0-.29.3-.3.4h.55c0-.15-.01-.4-.25-.4m8.68-3.78c0 .16.08.33.28.33s.36-.18.42-.24v-.48c-.16 0-.7 0-.7.4m-.94 4.34c0 .32.07.52.28.52.18 0 .26-.09.3-.12v-.82c-.05-.04-.12-.1-.28-.1-.2 0-.3.19-.3.52m-11.16-.57c-.27 0-.28.3-.3.4h.56c0-.15-.02-.4-.26-.4m-3.38.61c0 .4.07.56.3.56.15 0 .21-.08.25-.12v-.96c-.03-.01-.09-.07-.23-.07-.27 0-.32.2-.32.59" />
          <path d="M29.19 19.85c0 .38-.19.63-.67.63-.28 0-.73-.11-.73-.19l.02-.06.06-.22c.01-.02.02-.03.04-.03.04 0 .26.13.57.13.24 0 .28-.1.28-.3v-.22c-.06.03-.2.13-.43.13-.39 0-.6-.33-.6-.85 0-.57.25-.92.66-.92.25 0 .35.11.42.17.01-.03.07-.17.12-.17l.04.01.27.1.03.03c0 .05-.1.18-.1.45v.52l.02.79zm-1.9-.16c0 .04 0 .05-.04.05h-.35c-.04 0-.05-.01-.05-.05v-1.08c0-.13-.02-.29-.2-.29-.14 0-.26.1-.3.14v1.23c0 .04 0 .05-.05.05h-.35c-.04 0-.04-.01-.04-.05v-1.05c0-.5-.07-.47-.07-.55 0-.02.01-.03.04-.04l.26-.08.06-.02c.04 0 .07.08.1.25.1-.1.27-.25.54-.25.2 0 .46.1.46.51v1.23zm-2.22-1.9a.29.29 0 0 1-.29-.3c0-.15.13-.28.3-.28a.29.29 0 0 1-.01.58zm.22 1.9c0 .04 0 .05-.04.05h-.35c-.04 0-.05-.01-.05-.05v-1.35h-.27c-.04 0-.05-.01-.05-.05v-.23c0-.04.01-.05.05-.05h.67c.04 0 .04.01.04.05v1.63zm-1.44-5.16c0-.64.75-.65.98-.66v-.13c0-.22-.06-.34-.33-.34-.25 0-.43.12-.46.12-.01 0-.02 0-.03-.02l-.05-.13a.12.12 0 0 1 0-.05c0-.06.34-.17.58-.17.43 0 .58.2.58.52v.74c0 .24.01.27.05.38l.06.14-.03.03-.15.09h-.03c-.05 0-.12-.19-.14-.24-.05.04-.23.25-.54.25-.3 0-.5-.2-.5-.53zm.35 5.32c0 .38-.19.63-.67.63-.27 0-.72-.11-.72-.19l.01-.06.07-.22c0-.02.02-.03.03-.03.05 0 .26.13.57.13.25 0 .29-.1.29-.3l-.01-.22c-.06.03-.19.13-.43.13-.39 0-.6-.33-.6-.85 0-.57.25-.92.67-.92.24 0 .35.11.41.17.01-.03.08-.17.12-.17l.04.01.27.1.03.03c0 .05-.1.18-.1.45v.52l.02.79zm-2.02-5.69c0-.63.3-1.01.77-1.01.25 0 .54.17.54.23l-.01.03-.09.16c0 .01 0 .02-.02.02s-.18-.19-.4-.19c-.37 0-.48.27-.48.7 0 .35.07.7.44.7.24 0 .44-.15.46-.15l.02.03.06.15.02.03c0 .05-.32.2-.6.2-.45 0-.7-.35-.7-.9zm-.13 3.63a.29.29 0 0 1-.3-.3c0-.15.14-.28.3-.28.15 0 .28.13.28.29 0 .16-.13.29-.28.29zm.22 1.9c0 .04 0 .05-.05.05h-.34c-.05 0-.05-.01-.05-.05v-1.35h-.27c-.04 0-.05-.01-.05-.05v-.23c0-.04 0-.05.05-.05h.66c.04 0 .05.01.05.05v1.63zm-.94-4.73v-1.53h-.3c-.02 0-.04-.01-.04-.04v-.14c0-.03.02-.05.05-.05h.53c.04 0 .05.02.05.06v1.7c0 .03-.02.05-.05.05h-.2c-.02 0-.04-.02-.04-.05zm-.2 4.73c0 .04-.02.05-.06.05h-.34c-.05 0-.05-.01-.05-.05v-1.08c0-.13-.02-.29-.2-.29-.14 0-.26.1-.3.14v1.23c0 .04-.01.05-.05.05h-.35c-.04 0-.05-.01-.05-.05v-1.05c0-.5-.07-.47-.07-.55 0-.02.02-.03.04-.04l.27-.08.05-.02c.05 0 .07.08.11.25.1-.1.26-.25.54-.25.19 0 .45.1.45.51v1.23zm-1.58-6.3v-.14c0-.03 0-.05.03-.05h.28v-.51c0-.03.01-.04.04-.05l.2-.06h.02c.02 0 .02.02.02.04v.58h.56c.02 0 .04 0 .04.03v.02l-.05.15c0 .02-.03.03-.05.03h-.5v1.07c0 .15 0 .3.23.3.18 0 .33-.1.36-.1l.03.03.04.14v.04c0 .04-.28.15-.48.15-.16 0-.3-.06-.35-.13-.11-.12-.11-.29-.11-.43v-1.07h-.28c-.03 0-.03-.02-.03-.04zm-.22-2.28c-.03 0-.04-.02-.04-.05V9.81c0-.17-.04-.3-.25-.3-.24 0-.4.14-.5.22v1.33c0 .03 0 .05-.04.05h-.2c-.02 0-.04-.02-.04-.05v-1.3l-.01-.22c-.03-.11-.06-.14-.06-.16l.02-.02.17-.1.03-.01c.06 0 .1.22.11.25.13-.1.32-.25.6-.25.43 0 .46.3.46.56v1.25c0 .03-.02.05-.05.05h-.2zM19.18 19h-.94c0 .2.06.43.39.43.25 0 .4-.11.44-.11l.04.02.09.21v.04c0 .1-.34.2-.62.2-.46 0-.78-.25-.78-.9 0-.55.3-.94.76-.94.6 0 .7.54.7.96 0 .06-.01.09-.08.09zm-1.53-.93l-.1.3-.03.02c-.02 0-.09-.03-.17-.03-.1 0-.22.11-.26.16v1.17c0 .04 0 .05-.05.05h-.35c-.04 0-.05-.01-.05-.05v-1.05c0-.39-.09-.45-.09-.53 0-.02.02-.03.04-.03l.26-.11.05-.02c.04 0 .1.16.13.28.06-.08.2-.28.43-.28.1 0 .2.04.2.08v.04zm-1.24-3.1c0 .02-.02.04-.05.04h-.2c-.02 0-.04-.02-.04-.05V13.7c0-.16-.04-.3-.24-.3-.17 0-.3.1-.37.16v1.4c0 .03-.01.05-.04.05h-.2c-.03 0-.04-.02-.04-.05v-1.29c0-.09 0-.18-.03-.26-.01-.09-.04-.11-.04-.13l.01-.03.17-.09.03-.01c.06 0 .1.2.1.22.1-.09.33-.22.49-.22.25 0 .35.07.4.22.11-.08.32-.22.5-.22.41 0 .44.3.44.56v1.25c0 .03-.01.05-.04.05h-.2c-.03 0-.04-.02-.04-.05V13.7c0-.16-.04-.3-.24-.3-.18 0-.3.1-.37.15v1.41zM16.09 19h-.94c0 .2.06.43.39.43.25 0 .4-.11.44-.11l.04.02.09.21v.04c0 .1-.34.2-.62.2-.46 0-.78-.25-.78-.9 0-.55.3-.94.76-.94.6 0 .7.54.7.96 0 .06-.01.09-.08.09zm-1.5-5.57c-.14 0-.27.2-.36.29v1.24c0 .03-.02.05-.05.05h-.2c-.02 0-.04-.02-.04-.05v-1.29c0-.07 0-.2-.06-.29a.28.28 0 0 1-.04-.09l.02-.04.14-.08.04-.02c.07 0 .13.23.15.31.1-.1.23-.31.45-.31.09 0 .18.03.18.06v.03l-.09.2s0 .02-.02.02-.06-.03-.13-.03zm-.09 4.69l-.57 1.6c-.01.04-.02.05-.06.05h-.3c-.04 0-.04 0-.06-.04l-.55-1.61-.02-.06c0-.03.02-.04.08-.04l.29-.03h.05c.03 0 .04.03.05.06l.21.79.12.5.12-.5.24-.79c.01-.04.02-.07.05-.07h.05l.24.04c.05 0 .08 0 .08.04l-.02.06zm-1.82.88h-.94c0 .2.05.43.38.43.25 0 .4-.11.44-.11l.04.02.1.21v.04c0 .1-.35.2-.62.2-.47 0-.79-.25-.79-.9 0-.55.3-.94.77-.94.6 0 .7.54.7.96 0 .06-.02.09-.08.09zm-1.58-4.04c0 .03-.01.05-.04.05h-.2c-.03 0-.04-.02-.04-.05v-1.53h-.26c-.03 0-.03-.02-.03-.04v-.14c0-.03 0-.05.03-.05h.26v-.3c0-.28.06-.62.52-.62.17 0 .42.08.42.13l-.02.06-.06.12-.02.02c-.07 0-.17-.08-.33-.08-.21 0-.23.16-.23.38v.29h.55c.02 0 .04 0 .04.03v.02l-.05.15a.05.05 0 0 1-.05.03h-.49v1.53zm-.54 2.83a.29.29 0 0 1-.3-.3c0-.15.13-.28.3-.28.15 0 .28.13.28.29 0 .16-.13.29-.28.29zm.22 1.9c0 .04 0 .05-.05.05h-.35c-.04 0-.04-.01-.04-.05v-1.35h-.27c-.05 0-.05-.01-.05-.05v-.23c0-.04 0-.05.05-.05h.66c.04 0 .05.01.05.05v1.63zm-.8-4.68h-.2c-.02 0-.04-.02-.04-.05V13.7c0-.16-.04-.3-.24-.3-.25 0-.4.15-.5.23v1.33c0 .03-.01.05-.04.05h-.2c-.03 0-.05-.02-.05-.05v-1.3l-.01-.22c-.03-.11-.06-.14-.06-.16l.02-.02.17-.1.03-.01c.07 0 .11.22.11.25.13-.1.32-.25.61-.25.42 0 .45.3.45.56v1.25c0 .03-.02.05-.05.05zm-.3 4.67l-.27.1-.04.02c-.03 0-.09-.12-.1-.21-.06.05-.21.2-.46.2-.4 0-.6-.31-.6-.84 0-.66.24-1 .67-1 .19 0 .27.07.32.1v-.7c0-.06.03-.06.07-.07l.3-.06.04-.01c.03 0 .04.01.04.07v1.91c0 .34.06.39.06.45 0 .02-.01.03-.03.04zm-1.54-7.05c0 .03-.02.04-.05.04h-.34v2.1h.34c.03 0 .05 0 .05.04v.15c0 .03-.02.05-.05.05H7.1c-.03 0-.05-.02-.05-.05v-.15c0-.03.02-.05.05-.05h.34v-2.09H7.1c-.03 0-.05-.01-.05-.04v-.16c0-.03.02-.04.05-.04h1c.02 0 .04.01.04.04v.16zm-.39 7.07l-.27.09a.17.17 0 0 1-.05 0c-.04 0-.07-.06-.11-.2-.1.09-.26.2-.53.2-.2 0-.46-.08-.46-.5v-1.2c0-.05.03-.06.07-.07l.3-.05.05-.02c.02 0 .03.02.03.08v1.1c0 .14.01.3.2.3.14 0 .25-.07.3-.1v-1.24c0-.05.02-.06.06-.07l.3-.05.06-.02c.01 0 .02.02.02.08v1.09c0 .49.07.46.07.54 0 .02-.02.03-.04.04zm-2.24.1c-.45 0-.45-.35-.45-.68v-.78H4.8c-.04 0-.05-.01-.05-.05v-.23c0-.04 0-.05.05-.05h.25v-.44c0-.04 0-.05.06-.06l.3-.04h.05c.03 0 .03.01.03.05v.5h.4c.03 0 .06 0 .06.03v.03l-.05.2c0 .06-.02.06-.06.06H5.5v.84c0 .12 0 .22.12.22.14 0 .23-.07.28-.07.01 0 .02 0 .03.02l.07.29v.03c0 .06-.25.13-.49.13zm-1.74 0c-.36 0-.73-.16-.73-.21l.01-.06.08-.23.04-.03c.02 0 .28.15.58.15.2 0 .32-.1.32-.32 0-.31-.36-.34-.72-.56a.56.56 0 0 1-.3-.54c0-.5.36-.71.77-.71.33 0 .67.15.67.21l-.01.05-.12.23c-.01.02-.02.04-.04.04s-.24-.16-.49-.16c-.16 0-.33.07-.33.28 0 .26.41.31.72.54.18.13.3.32.3.58 0 .45-.31.74-.75.74zM8.9 8.56l.19-.04.05-.02.03.07.32 1.83.03.4a3 3 0 0 1 .05-.42l.36-1.8c0-.03 0-.05.03-.05h.24c.03 0 .03.02.04.05l.31 1.85a2 2 0 0 1 .04.37c.01-.12.01-.27.03-.37l.34-1.86.03-.07.06.02.18.04c.02 0 .04.01.04.03v.05l-.52 2.45c0 .02-.01.04-.04.04h-.28c-.03 0-.04-.01-.04-.04L10.08 9l-.4 2.08c0 .02 0 .04-.03.04h-.27c-.03 0-.04-.02-.04-.04l-.46-2.45v-.05c0-.02.02-.03.03-.03zm2.67.79c0-.03.02-.05.05-.05h.53c.04 0 .05.02.05.06v1.7c0 .03-.02.05-.05.05h-.2c-.02 0-.04-.02-.04-.05V9.53h-.29c-.03 0-.05-.01-.05-.04v-.14zm.47-.94c.13 0 .23.1.23.23 0 .12-.1.23-.23.23a.23.23 0 0 1-.23-.23c0-.13.1-.23.23-.23zm1.29 5.68c0 .53-.23.97-.77.97-.51 0-.73-.41-.73-.95 0-.52.22-.96.76-.96.52 0 .74.41.74.94zm-.56-3.16l.05-.11.04-.04c.03 0 .23.14.48.14.17 0 .3-.1.3-.28 0-.39-.83-.3-.83-.87 0-.3.24-.52.57-.52.13 0 .34.06.44.11.03.02.04.03.04.05l-.01.04-.05.1c-.02.03-.02.04-.05.04-.02 0-.18-.1-.38-.1-.15 0-.27.08-.27.25 0 .42.83.3.83.89 0 .35-.28.53-.6.53-.18 0-.57-.1-.57-.18l.01-.05zm1.71-2.45c0-.02.01-.04.03-.04l.19-.05h.04c.03 0 .03.02.03.04v1.7l.75-.85c0-.01.02-.03.04-.03l.04.02.13.1c.01 0 .03 0 .03.02s-.02.03-.03.04l-.64.7.67.85.02.04c0 .02-.01.02-.02.03l-.13.09-.05.02c-.02 0-.03-.02-.04-.03l-.77-.95v.88c0 .03-.02.05-.05.05h-.2c-.02 0-.04-.02-.04-.05V8.48zm1.74.87c0-.03.01-.04.03-.05l.19-.04.04-.01c.03 0 .03.03.03.05v1.3c0 .17.06.3.3.3.12 0 .37-.12.44-.18V9.35c0-.03 0-.04.02-.05l.2-.04.04-.01c.02 0 .02.03.02.05v1.34c0 .08 0 .17.04.25l.08.14-.04.03-.15.09-.02.01c-.06 0-.1-.14-.14-.22a.9.9 0 0 1-.53.22c-.5 0-.55-.3-.55-.56V9.35zm2.24 4.05c-.25 0-.42.12-.46.12 0 0-.02 0-.02-.02l-.05-.13a.12.12 0 0 1-.01-.05c0-.06.34-.17.58-.17.44 0 .58.2.58.52v.74c0 .24.01.27.05.38l.07.14-.04.03-.14.09h-.04c-.05 0-.12-.19-.14-.24-.04.04-.23.25-.54.25-.3 0-.49-.2-.49-.53 0-.64.75-.65.99-.66v-.13c0-.22-.07-.34-.34-.34zm2.27-4.15c.23 0 .36.06.46.13v-.9c0-.02.01-.04.03-.04l.18-.05h.04c.03 0 .03.02.03.04v2.08c0 .17 0 .29.05.38l.06.14-.03.03-.15.09-.03.01c-.05 0-.12-.16-.13-.22-.1.06-.28.22-.56.22-.4 0-.58-.45-.58-.92 0-.54.19-1 .63-1zm.95 3.29c0 .12-.1.23-.23.23a.23.23 0 0 1-.23-.23.23.23 0 0 1 .46 0zm1.04-3.3c.63 0 .68.62.68.94 0 .05 0 .08-.04.08H22.3c0 .23.1.65.52.65.24 0 .44-.16.46-.16l.03.03.06.15.01.03c0 .05-.32.2-.6.2-.5 0-.79-.38-.79-.96 0-.55.28-.95.75-.95zm7.66 4.24c0-2.25.1-4.72.6-7H.56c0 .36-.25.64-.57.67v.68c.32.03.57.31.57.67 0 .35-.25.64-.57.66v.68c.32.03.57.32.57.67 0 .35-.25.64-.57.67v.68c.32.03.57.31.57.67 0 .35-.25.64-.57.66v.68c.32.03.56.3.57.65 0 .35-.25.63-.57.66v.68c.32.02.57.3.57.66 0 .36-.25.64-.57.67v.68c.32.03.57.31.57.67 0 .35-.25.64-.57.66v.69c.32.02.57.3.57.66 0 .36-.25.64-.57.67v.68c.3.02.52.26.56.57h33.2c-2.2-3-3.37-6.08-3.37-8.99" />
          <defs
            dangerouslySetInnerHTML={{
              __html: this.imgDefs('ch_bg_l.png', 0, 0, 91.9, 29.08)
            }}
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="30.3 0 22.3 29.08"
          style={this.props.style || {}}
        >
          <path d="M41.2 11.9c-.33-.65-.89-1.23-1.33-1.82-.1-.14-.18-.6.15-.47.22.08.48.14.72.05.18-.07.47-.05.47.2v1.46c0 .15.02.45-.02.57m-.25-3.56l-.4-.07.02.47-.34-.38-.23.42-.06-.45-.47.14.31-.4-.38-.25.43-.06-.14-.43.38.25.15-.44.17.42.4-.26-.19.41.46.07-.41.23.3.33m2.26 0l-.4-.07v.47l-.32-.38-.24.42-.05-.45-.47.14.3-.4-.38-.25.43-.06-.14-.43.39.25.14-.44.17.42.4-.26-.18.41.46.07-.42.23.3.33m-.42 1.73c-.45.59-1 1.17-1.33 1.8-.04-.11-.02-.41-.02-.56V9.83c0-.25.3-.26.48-.2.24.1.5.03.71-.05.34-.12.26.33.16.48m.72 7.8c-.19.34-.53.52-.75.76-.4.44-.56.72-.6 1.1-.5-.89-1.47-3.49 1.27-6.49a6.16 6.16 0 0 0-.8 2.26c-.03.43.09.77.3 1.16.3.33.68.74.58 1.21" />
          <path d="M40.5 19.77a2.28 2.28 0 0 0-.64-1.15c-.27-.26-.7-.49-.8-.79-.07-.34.33-.7.6-1.1.24-.37.39-.78.34-1.27a5.05 5.05 0 0 0-.83-2.15 5.28 5.28 0 0 1 1.34 6.46m3.79-.4c-.04.46 0 1.05-.38 1.03-.18-.01-.35-.22-.71-.23-.21 0-.44.05-.65.12-.32.11-.07-.95.46-1.37.1-.07.4-.25.73-.75.15-.22.2-.22.29.08.17.42.19.64.26 1.12m-4.25.98a2.3 2.3 0 0 0-.65-.12c-.36.01-.54.22-.7.23-.4.02-.35-.57-.39-1.03.07-.48.1-.7.26-1.12.08-.3.13-.3.28-.07.34.5.64.68.73.75.54.42.79 1.48.47 1.36m3.41 1.13c-.21-.2-.5-.4-.67-.6-.12-.13.05-.3.22-.32.23-.01.44.01.7.09.49.13-.08.47-.25.83m-3.64-.61c-.29.29-.46.56-.63.63-.15-.33-.76-.75-.28-.79.3-.02.41-.12.61-.14.24-.03.5.1.3.3" />
          <path d="M42.57 24.36l-1.25-1.6-1.26 1.62a10.01 10.01 0 0 1-3.29-7.04 7.89 7.89 0 0 1 3-6.23 3.59 3.59 0 0 1 1.55-6.78c3.13 0 5.3 4.3 1.58 6.74a8 8 0 0 1 3.06 6.29 9.96 9.96 0 0 1-3.4 7zm6.56-19.73h-.07c-.78 0-1.59-.08-2.4-.26-2.43-.52-4.4-1.6-5.3-2.93h-.23c-.93 1.37-3.03 2.54-5.38 2.99-.78.15-1.57.21-2.32.2-1.1 2.56-1.25 5.9-1.25 8.85 0 3.14 1.6 6.56 4.63 9.88 1.9 2.07 3.77 3.5 4.44 3.98.67-.48 2.55-1.91 4.44-3.98 3.03-3.33 4.63-6.74 4.63-9.88 0-3.14-.15-6.39-1.19-8.85" />
          <path d="M45.95 23.6a30.46 30.46 0 0 1-4.6 4.1l-.1.07-.1-.07a30.3 30.3 0 0 1-4.6-4.1c-3.09-3.4-4.72-6.9-4.72-10.12 0-3.03.16-6.47 1.33-9.1l.04-.1h.12c.76.02 1.56-.05 2.37-.2 2.3-.44 4.34-1.58 5.2-2.91l.05-.08h.6l.05.08c.82 1.26 2.8 2.36 5.14 2.86.8.17 1.58.25 2.33.25h.3l.05.1c1.11 2.54 1.26 5.87 1.26 9.1 0 3.23-1.63 6.73-4.72 10.12zm4.38-19.8l-.29-.63-.69.02-.29.01c-.68 0-1.39-.08-2.1-.23-2.76-.6-4.58-2-4.69-2.96L40.21 0c-.12 1.05-2.05 2.5-4.73 3.02a10.18 10.18 0 0 1-2.26.17l-.7-.03-.28.63c-1.32 2.83-1.5 6.49-1.5 9.69 0 3.5 1.74 7.25 5.01 10.85a30.8 30.8 0 0 0 4.92 4.36l.58.4.58-.4c.1-.07 2.5-1.7 4.92-4.36 3.27-3.6 5-7.35 5-10.85 0-3.41-.17-6.95-1.42-9.68" />
          <defs
            dangerouslySetInnerHTML={{
              __html: this.imgDefs('ch_bg_s.png', 0, 0, 27.45, 29.08)
            }}
          />
        </svg>
      );
    }
  }
}

export default SvgLogoCH;