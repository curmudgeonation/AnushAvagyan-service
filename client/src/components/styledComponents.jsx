import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat';
  font-size: 1.1em;
}
#host {
  margin-left: 150px;
  margin-right: 50px;
  width: auto;
  padding-left: 24px;
}
@media screen and (max-width: 600px) {
  .info {
    width: 100%;
  }
}
.flex-container {
  display: flex;
}

.checked {
  color: rgb(255, 102, 102);
}

`
export const Info = styled.div`
padding-top: 5px;
padding-bottom: 5px;
width: 42%;
padding-right: 100px;
* {
  padding-top: 5px;
  padding-bottom: 5px;
}
`
export const NoteIcon = styled.img`
float: left;
`
export const Cols = styled.div`
display: flex;
`
export const StatsData = styled.div`
padding-right: 30px;
padding-top: 0px;
padding-bottom: 0px;
* {
  padding-right: 5px;
  padding-bottom: 0px;
}
`
export const Top = styled.div`
padding-top: 5px;
padding-bottom: 0px;
display: flex;
`

export const ContactHost = styled.button`
cursor: pointer;
font-size: 16px;
font-weight: 600;
padding-top: 13px;
padding-bottom: 13px;
padding-left: 23px;
padding-right: 23px;
margin-top: 30px;
border-radius: 8px;
border-width: 1px;
background-color: white;
&:hover {
  background: rgb(240,240,240);
}
border-color: rgb(34, 34, 34);

`
export const Bold = styled.div`
font-weight: 600;
padding-top: 10px;
padding-bottom: 4px;
font-size: 1.11em;
`
export const Avatar = styled.div`
position:relative;
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
width: 30px;
top: 80px;
left: 75px;
`
export const Title = styled.div`
margin-top: 30px;
padding-top: 5px;
padding-bottom: 5px;
`
export const Date = styled.div`
color: rgb(113, 113, 113);
font-weight: 400;
font-size: 16px;
padding-top: 6px;
padding-bottom: 10px;
`
export const Name = styled.h2`
margin: 0px ;
padding: 0px;
`
export const ReadMore = styled.a`
text-decoration: underline;
font-weight: 550;
padding-bottom: 0px;
padding-top: 0px;
cursor: pointer;
`
export const Note = styled.div`
color: rgb(34, 34, 34);
font-weight: 400;
font-size: 13px;
padding-top: 10px;
padding-bottom: 5px;
align-items: center;
width: 50%;


`

