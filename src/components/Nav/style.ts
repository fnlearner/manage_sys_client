import styled from "styled-components";
export const Container = styled.div`
  #components-layout-demo-side .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
  overflow:hidden;
`;
export const TopContainer = styled.div`
  color: #108ee9;
  background: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: 20px;
  border: 1px solid grey;
  padding: 10px;
  &:hover {
    color: #49a9ee;
    outline: 0;
    text-decoration: none;
  }
`;

export const HeaderLoginStatus = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  & > header {
    background-color: transparent;
  }
  & label {
    color: ${(props) => (props.theme === "dark" ? "#fff" : "")};
  }
  & > span {
    line-height: 15px;
    margin: 15px;
    &:hover {
    }
  }
`;
export const H1Font = styled.h1`
   color: #fafafa;

  letter-spacing: 0;

   text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777,
    0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333,
    0px 8px 7px #001135;
`;
