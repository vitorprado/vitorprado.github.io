import * as React from "react"
import type { GatsbyBrowser } from "gatsby"
import GlobalCSS from './src/components/GlobalCSS'

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  return (
    <>
      <GlobalCSS />
      {element}
    </>
  )
}