import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat';
  font-size: 1.1em;

  margin-left: 250px;
}
div {
  padding-top: 5px;
  padding-bottom: 5px;
}
@media screen and (max-width: 600px) {
  .info {
    width: 100%;
  }
}
.checked {
  color: rgb(255, 102, 102);
}

`
export const Info = styled.div`
float: left;
width: 42%;
padding-right: 100px;
`
export const NoteIcon = styled.img`
float: left;
`
export const Cols = styled.table`
padding-bottom: 15px;

`
export const StatsData = styled.td`
text-align: left;
padding-right: 30px;

`


export const Top = styled.div`
padding-bottom: 10px;
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




// /* Clear floats after the columns */
// .row:after {
//   content: "";
//   display: table;
//   clear: both;
// }


export const Bold = styled.div`
font-weight: bold;
padding-top: 10px;
padding-bottom: 3px;
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
width: 90px;
height: 90px;
border-radius: 50%;
`
export const Icon = styled.img`
position: absolute;
width: 30px;
top: 75px;
left: 65px;
`
export const Title = styled.div`
margin-top: 30px;
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
padding-top: 30px;
align-items: center;
width: 50%;


`

