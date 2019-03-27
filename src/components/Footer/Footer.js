import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <>
        <footer>
          <div></div>
          <div>
            Made by <span style={{color: '#f50057'}}>François Cipriani</span>
          </div>
          <div className='social'>
            <a href="https://www.linkedin.com/in/fciprian42/" target='_blank'>
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
            <a className='comet' href="https://app.comet.co/freelancer/profile/d2k9zR7wYP" target='_blank'>
              <img width={46} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjY2cHgiIGhlaWdodD0iNjVweCIgdmlld0JveD0iMCAwIDI2NiA2NSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDYuMiAoNDQ0OTYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmNvbWV0LWxvZ28td2hpdGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9IjIwLjQ2MDU0MjggMC42NTQ1IDAuMjgyMzM2MDQ0IDAuNjU0NSAwLjI4MjMzNjA0NCAyMC44MzE4ODMzIDIwLjQ2MDU0MjggMjAuODMxODgzMyAyMC40NjA1NDI4IDAuNjU0NSI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBBR0VTIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iTWF0Y2hpbmctVGVjaG5vbG9neSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU4Ny4wMDAwMDAsIC0zNy4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9ImNvbWV0LWxvZ28td2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU4Ny4wMDAwMDAsIDM3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0MCw1NSBDMjM3LjIzODc4OCw1NSAyMzUsNTcuMjM4Nzg4NCAyMzUsNjAgQzIzNSw2Mi43NjEyMTE2IDIzNy4yMzg3ODgsNjUgMjQwLDY1IEMyNDIuNzYxMjEyLDY1IDI0NSw2Mi43NjEyMTE2IDI0NSw2MCBDMjQ1LDU3LjIzODc4ODQgMjQyLjc2MTIxMiw1NSAyNDAsNTUiIGlkPSJGaWxsLTExIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8ZyBpZD0iTE9HTyI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3Mi4wNTEyMTYsNDMuMTQ4OTk0IEMxNzIuMDUxMjE2LDM2LjU0MTYwOCAxNzcuNDQ5NDQsMzEuMTY2MTQ2OSAxODQuMDg0ODA2LDMxLjE2NjE0NjkgQzE4NS40OTkwMTUsMzEuMTY2MTQ2OSAxODYuODc5NDQxLDMxLjQwOTc0NzggMTg4LjE3NzE1OSwzMS44NzYwNjk3IEwxNzMuMTgxMTg1LDQ4LjIxNTg5NCBDMTcyLjQ1NjYwNyw0Ni42NzY1Njc5IDE3Mi4wNTEyMTYsNDQuOTU4NjAxMSAxNzIuMDUxMjE2LDQzLjE0ODk5NCBMMTcyLjA1MTIxNiw0My4xNDg5OTQgWiBNNjcuODU4NzMxMSw1NS4xMzMwMDEyIEM2MS4yMjMzNjUyLDU1LjEzMzAwMTIgNTUuODI1MTQwOSw0OS43NTYzOCA1NS44MjUxNDA5LDQzLjE0ODk5NCBDNTUuODI1MTQwOSwzNi41NDE2MDggNjEuMjIzMzY1MiwzMS4xNjYxNDY5IDY3Ljg1ODczMTEsMzEuMTY2MTQ2OSBDNzQuNDk0MDk2OSwzMS4xNjYxNDY5IDc5Ljg5MjMyMTIsMzYuNTQxNjA4IDc5Ljg5MjMyMTIsNDMuMTQ4OTk0IEM3OS44OTIzMjEyLDQ5Ljc1NjM4IDc0LjQ5NDA5NjksNTUuMTMzMDAxMiA2Ny44NTg3MzExLDU1LjEzMzAwMTIgTDY3Ljg1ODczMTEsNTUuMTMzMDAxMiBaIE0yMTcuOTY3NTc1LDQgTDIwOC4wNTc2MjgsNCBMMjA4LjA1NzYyOCwzNC4zNDEwNzk0IEwxOTIuNjQzNDQ5LDUxLjU3Mjk0NzIgQzE5MC4zNjQ4NzIsNTMuODY5NzU2MiAxODcuMzM0OTI0LDU1LjEzMzAwMTIgMTg0LjA4NDgwNiw1NS4xMzMwMDEyIEMxODIuOTEwNTcsNTUuMTMzMDAxMiAxODEuNzc0Nzc2LDU0Ljk2MzY0MDUgMTgwLjcwMDcyMyw1NC42NTA0MzkzIEwyMDIuNzI2OTY5LDMwLjY1MTEwNDkgTDE5OS4yMDc3NTUsMjcuMzE3MjUxNyBDMTk1LjExMTkwOCwyMy40MzU4NzY1IDE4OS43NDE2NDIsMjEuMjk5MTQ4MSAxODQuMDg0ODA2LDIxLjI5OTE0ODEgQzE3Ny40NjEwODksMjEuMjk5MTQ4MSAxNzEuNTI3MDAzLDI0LjI0OTAzOTcgMTY3LjUwMTA1MSwyOC44ODMyNTc5IEwxNjcuNDM0NjUxLDI4LjgyNDA5NzcgTDE2My44NTcxOTEsMzIuNzM1NjMzMSBDMTYxLjI1NzA5NywyNi4wNTYzMjY4IDE1NC43NTEwMzcsMjEuMjk5MTQ4MSAxNDcuMTM1OTc2LDIxLjI5OTE0ODEgQzE0Mi4yNTQ5NzUsMjEuMjk5MTQ4MSAxMzcuNTIxOTE4LDIzLjMxNTIzNiAxMzQuMTUyOTc5LDI2LjgzMjM2OTggTDEzNC45ODcwNTksMjcuNjg0OTczMiBMMTM0LjEwNzU0NywyNi44ODgwNTAxIEwxMjguNzU0NzU1LDMyLjc0MDI3MzEgQzEyNi4xNTU4MjUsMjYuMDU3NDg2OCAxMTkuNjQ4NiwyMS4yOTkxNDgxIDExMi4wMzEyMSwyMS4yOTkxNDgxIEMxMDcuMDgwMzEzLDIxLjI5OTE0ODEgMTAyLjQ2OTU3MywyMy4yNjQxOTU4IDk5LjA0ODIxMjQsMjYuODMyMzY5OCBMOTkuODg5MjgyMywyNy42OTE5MzMyIEw5OS4wMDE2MTU3LDI2Ljg4ODA1MDEgTDg5LjA5MDUwMzksMzcuNzI1OTcyNyBDODYuNjU4MTU3NywyOC4yOTc0NTU2IDc4LjA3NjIxNTksMjEuMjk5MTQ4MSA2Ny44NTg3MzExLDIxLjI5OTE0ODEgQzYxLjE2MTYyNDYsMjEuMjk5MTQ4MSA1NS4xNjQ2MzMxLDI0LjMwOTM1OTkgNTEuMTM2MzUxLDI5LjAzNTIxODUgTDUxLjEyMzUzNjksMjkuMDIzNjE4NSBMNDguMjI5ODgzNywzMi4xODY5NTA5IEw0OC4yMzgwMzgxLDMyLjE5NTA3MDkgTDMyLjc3NjA5NzksNDkuMTAyMTM3NSBMMzIuNzY3OTQzNSw0OS4wOTQwMTc0IEwzMC41Mjg5NzM1LDUxLjU0MTYyNyBMMzAuNTMxMzAzMyw1MS41NDI3ODcxIEMyOC4yNDkyMzE0LDUzLjg1OTMxNjIgMjUuMjA2NDY4OCw1NS4xMzMwMDEyIDIxLjk0MzUzNyw1NS4xMzMwMDEyIEMxNS4zMDgxNzExLDU1LjEzMzAwMTIgOS45MDk5NDY4Nyw0OS43NTYzOCA5LjkwOTk0Njg3LDQzLjE0ODk5NCBDOS45MDk5NDY4NywzNi41NDE2MDggMTUuMzA4MTcxMSwzMS4xNjYxNDY5IDIxLjk0MzUzNywzMS4xNjYxNDY5IEMyNi41ODIyMzU1LDMxLjE2NjE0NjkgMzAuODU3NDgsMzMuODY4OTU3NSAzMi44MzY2NzM2LDM4LjA0OTYxNCBDMzIuODc4NjEwNiwzOC4xMzc3NzQzIDMyLjkzNTY5MTUsMzguMjY1Mzc0OCAzMi45OTI3NzI1LDM4LjM5NTI5NTMgTDM5Ljk5MTU5MjMsMzAuNzQzOTA1MiBDMzUuOTM1MzUyMiwyNC45MTgzNjIzIDI5LjE4NTgyNDUsMjEuMjk5MTQ4MSAyMS45NDM1MzcsMjEuMjk5MTQ4MSBDOS44NDM1NDY2MSwyMS4yOTkxNDgxIDAsMzEuMTAwMDI2NiAwLDQzLjE0ODk5NCBDMCw1NS4xOTc5NjE0IDkuODQzNTQ2NjEsNjUgMjEuOTQzNTM3LDY1IEMyNy45OTg3NzQzLDY1IDMzLjYzODEzNjMsNjIuNTk2NDcwNSAzNy44MjAxODc1LDU4LjIzMTM3MzQgTDM3LjEzMTcyMTcsNTcuNTI4NDEwNiBMMzcuODU2Mjk5OSw1OC4xODQ5NzMyIEw0Ni42MzE2MTc5LDQ4LjU5MDU3NTQgQzQ5LjA2OTc4ODYsNTguMDA5ODEyNSA1Ny42NDgyMzU3LDY1IDY3Ljg1ODczMTEsNjUgQzc0LjI5MTQwMTQsNjUgODAuMDY5Mzg4NSw2Mi4yMTI1MDkgODQuMDg2MDIxNSw1Ny44MDU2NTE3IEw4NC4xMDkzMTk4LDU3LjgyNzY5MTggTDEwNi4zMzAxMDcsMzMuNTMxMzk2MiBMMTA2LjMyODk0MiwzMy41MzAyMzYyIEMxMDcuODQ5MTU4LDMyLjAwNDgzMDIgMTA5Ljg2Nzk1OSwzMS4xNjYxNDY5IDExMi4wMzEyMSwzMS4xNjYxNDY5IEMxMTYuNDYxMzg4LDMxLjE2NjE0NjkgMTIwLjA2NTY0MSwzNC43NTUyMDEgMTIwLjA2NTY0MSwzOS4xNjY2OTg0IEwxMjAuMDY1NjQxLDQyLjI0MTg3MDUgTDk5LjgxNTg5MjUsNjQuMzg0MDM3NiBMMTEzLjIxOTQyNSw2NC4zODQwMzc2IEwxNDEuNDMzNzA5LDMzLjUzMTM5NjIgTDE0MS40MzM3MDksMzMuNTMwMjM2MiBDMTQyLjk1Mjc2LDMyLjAwNDgzMDIgMTQ0Ljk3MTU2MSwzMS4xNjYxNDY5IDE0Ny4xMzU5NzYsMzEuMTY2MTQ2OSBDMTUxLjU2NjE1NSwzMS4xNjYxNDY5IDE1NS4xNjkyNDIsMzQuNzU1MjAxIDE1NS4xNjkyNDIsMzkuMTY2Njk4NCBMMTU1LjE2OTI0Miw0Mi4yMzYwNzA0IEwxMzQuOTE0ODM0LDY0LjM4NDAzNzYgTDE0OC4zMjMwMjYsNjQuMzg0MDM3NiBMMTU0LjIxMDUxNiw1Ny45NDk0OTIzIEwxNTQuMjA1ODU2LDU3Ljk0NjAxMjIgTDE2Mi44MzY3MjQsNDguNTA4MjE1MSBDMTY1LjI0NTc3Miw1Ny45NjkyMTIzIDE3My44NDUxODgsNjUgMTg0LjA4NDgwNiw2NSBDMTkwLjE0MDA0Myw2NSAxOTUuNzc5NDA1LDYyLjU5NjQ3MDUgMTk5Ljk2MTQ1Niw1OC4yMzEzNzM0IEwxOTguNzY5NzQ3LDU3LjAyMzgwODYgTDIwMC4wMzQ4NDYsNTguMTQ1NTMzIEwyMDguNzMwOTUsNDguNDI0Njk0OCBDMjExLjExMDg3NSw1Ny45Mjg2MTIyIDIxOS43MzAwOTQsNjUgMjMwLDY1IEwyMzAsNTUuMTMzMDAxMiBDMjIzLjM2NDYzNCw1NS4xMzMwMDEyIDIxNy45Njc1NzUsNDkuNzU2MzggMjE3Ljk2NzU3NSw0My4xNDg5OTQgTDIxNy45Njc1NzUsMzAuNzY3MTA1MyBMMjMwLDMwLjc2NzEwNTMgTDIzMCwyMC44OTg5NDY1IEwyMTcuOTY3NTc1LDIwLjg5ODk0NjUgTDIxNy45Njc1NzUsNCBaIiBpZD0iRmlsbC05IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDUuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwLTE0Ij48L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy42NTcxMTY3LDE0LjAxNTA1IEMxMi41OTA3ODMzLDEzLjc2NzcxNjcgMTEuNDkxNzgzMywxMy42NDA1NSAxMC4zNzE3ODMzLDEzLjY0MDU1IEM5LjI1MTc4MzMzLDEzLjY0MDU1IDguMTUxNjE2NjcsMTMuNzY3NzE2NyA3LjA4NjQ1LDE0LjAxNTA1IEM3LjU4MTExNjY3LDExLjg2NDg4MzMgNy41ODExMTY2Nyw5LjYyMTM4MzMzIDcuMDg2NDUsNy40NzIzODMzMyBDOC4xNTI3ODMzMyw3LjcxOTcxNjY3IDkuMjUxNzgzMzMsNy44NDU3MTY2NyAxMC4zNzE3ODMzLDcuODQ1NzE2NjcgQzExLjQ5MTc4MzMsNy44NDU3MTY2NyAxMi41OTA3ODMzLDcuNzE5NzE2NjcgMTMuNjU3MTE2Nyw3LjQ3MjM4MzMzIEMxMy4xNjI0NSw5LjYyMTM4MzMzIDEzLjE2MjQ1LDExLjg2NDg4MzMgMTMuNjU3MTE2NywxNC4wMTUwNSBMMTMuNjU3MTE2NywxNC4wMTUwNSBaIE0xOS4zNTYyODMzLDE3LjAyMTU1IEMxNi41NTg2MTY3LDEzLjMwMzM4MzMgMTYuNTU4NjE2Nyw4LjE4Mjg4MzMzIDE5LjM1NjI4MzMsNC40NjU4ODMzMyBMMjAuMDg4OTUsMy40OTE3MTY2NyBDMjEuMDU0OTUsMi4yMDcyMTY2NyAxOS45NzgxMTY3LDAuNjU0MzgzMzMzIDE4LjY4MTk1LDAuNjU0MzgzMzMzIEMxOC4zMzMxMTY3LDAuNjU0MzgzMzMzIDE3Ljk2Nzk1LDAuNzY2MzgzMzMzIDE3LjYyMjYxNjcsMS4wMjY1NSBMMTYuNjQ5NjE2NywxLjc1OTIxNjY3IEMxNC43OTExMTY3LDMuMTU4MDUgMTIuNTgxNDUsMy44NTY4ODMzMyAxMC4zNzE3ODMzLDMuODU2ODgzMzMgQzguMTYyMTE2NjcsMy44NTY4ODMzMyA1Ljk1MjQ1LDMuMTU4MDUgNC4wOTM5NSwxLjc1OTIxNjY3IEwzLjExOTc4MzMzLDEuMDI2NTUgQzIuNzc0NDUsMC43NjYzODMzMzMgMi40MTA0NSwwLjY1NDM4MzMzMyAyLjA2MTYxNjY3LDAuNjU0MzgzMzMzIEMwLjc2NDI4MzMzMywwLjY1NDM4MzMzMyAtMC4zMTEzODMzMzMsMi4yMDcyMTY2NyAwLjY1NDYxNjY2NywzLjQ5MTcxNjY3IEwxLjM4NzI4MzMzLDQuNDY1ODgzMzMgQzQuMTg0OTUsOC4xODI4ODMzMyA0LjE4NDk1LDEzLjMwMzM4MzMgMS4zODcyODMzMywxNy4wMjE1NSBMMC42NTQ2MTY2NjcsMTcuOTk1NzE2NyBDLTAuMzEyNTUsMTkuMjc5MDUgMC43NjQyODMzMzMsMjAuODMxODgzMyAyLjA2MTYxNjY3LDIwLjgzMTg4MzMgQzIuNDEwNDUsMjAuODMxODgzMyAyLjc3NDQ1LDIwLjcxOTg4MzMgMy4xMTk3ODMzMywyMC40NTk3MTY3IEw0LjA5Mzk1LDE5LjcyNzA1IEM1Ljk1MjQ1LDE4LjMyOTM4MzMgOC4xNjIxMTY2NywxNy42MjkzODMzIDEwLjM3MTc4MzMsMTcuNjI5MzgzMyBDMTIuNTgxNDUsMTcuNjI5MzgzMyAxNC43OTExMTY3LDE4LjMyOTM4MzMgMTYuNjQ5NjE2NywxOS43MjcwNSBMMTcuNjIyNjE2NywyMC40NTk3MTY3IEMxNy45Njc5NSwyMC43MTk4ODMzIDE4LjMzMzExNjcsMjAuODMxODgzMyAxOC42ODE5NSwyMC44MzE4ODMzIEMxOS45NzgxMTY3LDIwLjgzMTg4MzMgMjEuMDU0OTUsMTkuMjc5MDUgMjAuMDg4OTUsMTcuOTk1NzE2NyBMMTkuMzU2MjgzMywxNy4wMjE1NSBaIiBpZD0iRmlsbC0xMyIgZmlsbD0iI0ZGRkZGRiIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt=""/>
            </a>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer;