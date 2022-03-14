import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

interface IProps {
  totalCntMatch: boolean;
  deathCntMatch: boolean;
}

const Tab = styled.div<{ isActive: boolean }>`
  width: 50%;
  text-align: center;
  list-style: none;
  a {
    display: block;
    text-decoration: none;
    color: inherit;
    line-height: 50px;
    &:hover {
      color: white;
      background-color: #222222;
    }
  }
  background-color: ${(props) => (props.isActive ? "#222222" : "transparent")};
  color: ${(props) => (props.isActive ? "white" : "black")};
`;

const Tabs = ({ totalCntMatch, deathCntMatch }: IProps) => {
  return (
    <Box>
      <Tab isActive={totalCntMatch}>
        <Link to={`/확진자`}>국내 코로나 확진자 현황</Link>
      </Tab>
      <Tab isActive={deathCntMatch}>
        <Link to={`/사망자`}>국내 코로나 사망자 현황</Link>
      </Tab>
    </Box>
  );
};

export default Tabs;
