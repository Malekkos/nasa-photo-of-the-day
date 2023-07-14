import styled from "styled-components"
import React from "react"

const Wrapper = styled.div `
max-width: 100%;
background-color: burlywood;

`
const Header = styled.h1 `
color: cornsilk

`
const Title = styled.p `
color: mistyrose;
`
const Image = styled.img `
width: 70%
&:hover {
  width: 95%;
}
//not working, not sure why
`

const Explanation = styled.h4 `
color: black;

`
export {Explanation};
export {Image};
export {Title};
export {Header};
export {Wrapper};