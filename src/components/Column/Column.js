import { css } from "@emotion/core"
import styled from "@emotion/styled"

export default styled.div`
  ${({ theme: { space, sizes } }) => css`
    max-width: 500px;
    padding-left: 3rem;
  `}
`
