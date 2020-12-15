import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Seo from "../Seo"
import Column from "../Column"
import Header from "../Header"
import FunLink from "../FunLink"

const Layout = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          author
          description
          links {
            name
            comment
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <Seo title={data.site.siteMetadata.author} />
      <Header />
      <Column css={links}>
        <ul css={list}>
          {data.site.siteMetadata.links.map(link => {
            return (
              <li>
                {link.comment} <FunLink title={link.name} uri={link.url} />
              </li>
            )
          })}
        </ul>
      </Column>
    </>
  )
}

const links = css({
  fontFamily: `Raleway`,
})

const list = css({
  listStyle: `none`,
  margin: `0`,
})

export default Layout
