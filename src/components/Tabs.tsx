import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  li {
    width: 600px;
    text-align: center;
    list-style: none;
    a {
      display: block;
      text-decoration: none;
      color: inherit;
      line-height: 50px;
      &:hover {
        background-color: whitesmoke;
      }
    }
  }
`;

const Tabs = ({ totalCntMatch }: any) => {
  return (
    <Box>
      <li>
        <Link to={`/확진자`}>국내 코로나 확진자 현황</Link>
      </li>
      <li>
        <Link to={`/사망자`}>국내 코로나 사망자 현황</Link>
      </li>
    </Box>
  );
};

export default Tabs;
