import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  height: 60px;
  width: 100%;
  padding-top: 20px;
  padding-left: 30px;
  color: #fff;
  align-items: center;
  display: flex;
`;

export const LogoContainer = styled(Link)`

`

export const Divider = styled.div`
    height: 1px;
    width: 400px;
    background: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.25;
`
export const NavContainer = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
`