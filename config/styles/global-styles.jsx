import { createGlobalStyle } from "styled-components";
import { cH1, cH2, cH3, cH4, cH5, cP, cInput, cLabel } from "./common-styles";

import { createTheme } from '@mui/material/styles';

export const MuiTheme =createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#eb8d00',
      darker: '#053e85',
    },
    neutral: {
      main: '#eb8d00',
      contrastText: '#fff',
    },
  },
});

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Poppins', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    font-family: 'Poppins';
  }

  * {
  font-family: 'Poppins' !important;
  }

  .MuiButtonBase-root{
    font-weight: 900 !important;
  }

  code {
    font-family: 'Poppins', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  @font-face {
    font-family: 'Poppins','futura-lt-w01-book';
    src: local('Poppins-Light'), url("/fonts/Poppins/Poppins-Light.ttf") format('truetype');
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: null; }
  button { background: transparent; border: 0; outline: 0 }
  
  h1 { ${cH1}; }
  h2 { ${cH2}; }
  h3 { ${cH3}; }
  h4 { ${cH4}; }
  h5 { ${cH5}; }
  p { ${cP}; }
  input { ${cInput}; }
  select { ${cInput}; }
  label { ${cLabel}; }

  .MuiInputBase-input{
    ${cP};
  }

  .MuiButton-contained{
    background-color: '#0C436D';
  }

  .MuiSlider-root{
    color: rgb(12, 67, 109);
    height: 0.4vw;
  }

  .MuiSlider-thumb {
    height: 1.2vw;
    width: 1.2vw;
    background-color: #fff;
    border: 2px solid rgb(12, 67, 109);
    margin-top: -0.4vw;
    margin-left: -0.6vw;
    &:focus, &:hover, &$active: {
      boxShadow: inherit;
    };
  }

  .MuiSlider-track, .MuiSlider-rail{
    height: 0.4vw;
    border-radius: 0.2vw;
  }

  .MuiSvgIcon-root{
    width: 1.3vw;
    height: 1.3vw;
  }
  .divider > div {
    z-index: 80 !important;
  }

  .edit-check + * {
    display: none !important;
  }

  .modal-header {
    width: 500px;
  }

  .modal-header {
    width: 500px;
  }

  .swal2-close {
    width: 1em !important;
    height: 1em !important;
    font-size: 2em !important;
  }
  .swal2-close:focus {
    box-shadow: none !important;
  }

  .custom-global-message-modal .swal2-icon{
    margin: 10px auto !important;
  }

  .custom-global-message-modal .swal2-title{
    padding: 0 !important;
    color: white !important;
  }

  .custom-global-message-modal{
    color: white !important;
  }

  .MuiTabPanel-root{
    padding: 24px 0 !important;
  }

  .accordion-button{
    --bs-accordion-btn-focus-border-color:  #eb8d00 !important;
    --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25remrgba(13, 110, 253, 0.25);

    --bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#e7f1ff' fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")

    --bs-accordion-active-bg: #eb8d00;

    --bs-accordion-active-color: grey !important;
    --bs-accordion-active-bg: #ffe9c7 !important;
  }

  /* react-phone-number-input/style.css CSS variables. */
:root {
	--PhoneInput-color--focus: #03b2cb;
	--PhoneInputInternationalIconPhone-opacity: 0.8;
	--PhoneInputInternationalIconGlobe-opacity: 0.65;
	--PhoneInputCountrySelect-marginRight: 0.35em;
	--PhoneInputCountrySelectArrow-width: 0.3em;
	--PhoneInputCountrySelectArrow-marginLeft: var(--PhoneInputCountrySelect-marginRight);
	--PhoneInputCountrySelectArrow-borderWidth: 1px;
	--PhoneInputCountrySelectArrow-opacity: 0.45;
	--PhoneInputCountrySelectArrow-color: inherit;
	--PhoneInputCountrySelectArrow-color--focus: var(--PhoneInput-color--focus);
	--PhoneInputCountrySelectArrow-transform: rotate(45deg);
	--PhoneInputCountryFlag-aspectRatio: 1.5;
	--PhoneInputCountryFlag-height: 1em;
	--PhoneInputCountryFlag-borderWidth: 1px;
	--PhoneInputCountryFlag-borderColor: rgba(0,0,0,0.5);
	--PhoneInputCountryFlag-borderColor--focus: var(--PhoneInput-color--focus);
	--PhoneInputCountryFlag-backgroundColor--loading: rgba(0,0,0,0.1);
}

.PhoneInput {
	/* This is done to stretch the contents of this component. */
	display: flex;
	align-items: center;
}

.PhoneInputInput {
	/* The phone number input stretches to fill all empty space */
	flex: 1;
	/* The phone number input should shrink
	   to make room for the extension input */
	min-width: 0;
}

.PhoneInputCountryIcon {
	width: calc(var(--PhoneInputCountryFlag-height) * var(--PhoneInputCountryFlag-aspectRatio));
	height: var(--PhoneInputCountryFlag-height);
}

.PhoneInputCountryIcon--square {
	width: var(--PhoneInputCountryFlag-height);
}

.PhoneInputCountryIcon--border {
	/* Removed 'background-color' because when an '<img/>' was still loading
	   it would show a dark gray rectangle. */
	/* For some reason the '<img/>' is not stretched to 100% width and height
	   and sometime there can be seen white pixels of the background at top and bottom. */
	background-color: var(--PhoneInputCountryFlag-backgroundColor--loading);
	/* Border is added via 'box-shadow' because 'border' interferes with 'width'/'height'. */
	/* For some reason the '<img/>' is not stretched to 100% width and height
	   and sometime there can be seen white pixels of the background at top and bottom,
	   so an additional "inset" border is added. */
	box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor),
		inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor);
}

.PhoneInputCountryIconImg {
	/* Fixes weird vertical space above the flag icon. */
	/* https://gitlab.com/catamphetamine/react-phone-number-input/-/issues/7#note_348586559 */
	display: block;
	/* 3rd party <SVG/> flag icons won't stretch if they have 'width' and 'height'.
	   Also, if an <SVG/> icon's aspect ratio was different, it wouldn't fit too. */
	width: 100%;
	height: 100%;
}

.PhoneInputInternationalIconPhone {
	opacity: var(--PhoneInputInternationalIconPhone-opacity);
}

.PhoneInputInternationalIconGlobe {
	opacity: var(--PhoneInputInternationalIconGlobe-opacity);
}

/* Styling native country '<select/>'. */

.PhoneInputCountry {
	position: relative;
	align-self: stretch;
	display: flex;
	align-items: center;
	margin-right: var(--PhoneInputCountrySelect-marginRight);
}

.PhoneInputCountrySelect {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
	border: 0;
	opacity: 0;
	cursor: pointer;
}

.PhoneInputCountrySelect[disabled] {
	cursor: default;
}

.PhoneInputCountrySelectArrow {
	display: block;
	content: '';
	width: var(--PhoneInputCountrySelectArrow-width);
	height: var(--PhoneInputCountrySelectArrow-width);
	margin-left: var(--PhoneInputCountrySelectArrow-marginLeft);
	border-style: solid;
	border-color: var(--PhoneInputCountrySelectArrow-color);
	border-top-width: 0;
	border-bottom-width: var(--PhoneInputCountrySelectArrow-borderWidth);
	border-left-width: 0;
	border-right-width: var(--PhoneInputCountrySelectArrow-borderWidth);
	transform: var(--PhoneInputCountrySelectArrow-transform);
	opacity: var(--PhoneInputCountrySelectArrow-opacity);
}

.PhoneInputCountrySelect:focus + .PhoneInputCountryIcon + .PhoneInputCountrySelectArrow {
	opacity: 1;
	color: var(--PhoneInputCountrySelectArrow-color--focus);
}

.PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {
	box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor--focus),
		inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor--focus);
}

.PhoneInputCountrySelect:focus + .PhoneInputCountryIcon .PhoneInputInternationalIconGlobe {
	opacity: 1;
	color: var(--PhoneInputCountrySelectArrow-color--focus);
}

.swal2-confirm {
  background-color: #0C436D !important;
  box-shadow: none !important;
}

.swal2-cancel {
  background-color: #0C436D !important;
  box-shadow: none !important;
}
`;

export default GlobalStyle;
