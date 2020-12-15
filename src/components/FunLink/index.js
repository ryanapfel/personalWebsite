import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const StyledLink = styled.a({
  position: `relative`,
  overflow: `hidden`,
  textDecoration: `none`,
  margin: `auto`,
  color: `#ec407a`,
  fontWeight: `bold`,
})

const FunLink = props => {
  return (
    <>
      <StyledLink href={props.uri} target="_blank">
        {props.title}
      </StyledLink>
    </>
  )
}

export default FunLink
