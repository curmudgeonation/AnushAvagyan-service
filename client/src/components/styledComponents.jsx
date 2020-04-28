import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Montserrat';
  font-size: 1.1em;
}
div {
  padding-top: 10px;
  padding-bottom: 10px;
}
`

export const Headline = styled.div`
font-weight: bold;
padding-top: 10px;
padding-bottom: 10px;
`
export const Avatar = styled.div`
position:relative;
float:left;
margin-right: 20px;
padding-top: 10px;
padding-bottom: 10px;
`
export const Image = styled.img`
position: relative;
width: 100px;
height: 100px;
border-radius: 50%;
`
export const Icon = styled.img`
position: absolute;
width: 40px;
top: 60px;
left: 70px;
`
export const Title = styled.div`
margin-top: 30px;
`
export const Date = styled.div`
color: rgb(113, 113, 113);
font-weight: 400;
font-size: 16px;
padding-top: 6px;
`
export const Name = styled.h2`
margin: 0px ;
padding: 0px;
`
export const ReadMore = styled.a`
text-decoration: underline;
font-weight: bold;
padding-bottom: 10px;
cursor: pointer;
`

