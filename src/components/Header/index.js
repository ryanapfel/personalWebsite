import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          author
          description
        }
      }
    }
  `)

  return (
    <header css={styles}>
      <h1>{data.site.siteMetadata.author}</h1>
      <p>{data.site.siteMetadata.description}</p>
    </header>
  )
}

const styles = css({
  fontFamily: `Raleway`,
  padding: `3rem`,
  maxWidth: `500px`,
})

export default Header
