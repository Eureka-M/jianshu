import { createGlobalStyle } from 'styled-components'

export const Globalstyle2 = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1590129495254'); /* IE9 */
  src: url('./iconfont.eot?t=1590129495254#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1590129495254') format('woff'),
  url('./iconfont.ttf?t=1590129495254') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1590129495254#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`
