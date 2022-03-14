import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
`;

interface IProps {
  totalCntMatch: boolean;
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
      background-color: whitesmoke;
    }
  }
  background-color: ${(props) =>
    props.isActive ? "whitesmoke" : "transparent"};
`;

const Tabs = ({ totalCntMatch }: IProps) => {
  return (
    <Box>
      <Tab isActive={totalCntMatch}>
        <Link to={`/확진자`}>국내 코로나 확진자 현황</Link>
      </Tab>
      <Tab isActive={!totalCntMatch}>
        <Link to={`/사망자`}>국내 코로나 사망자 현황</Link>
      </Tab>
    </Box>
  );
};

export default Tabs;
