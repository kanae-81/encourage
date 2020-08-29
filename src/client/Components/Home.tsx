import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Title = styled.h2`
	font-size: 1.3rem;
	color: #000;
`

const Home = () => {
  return (
    <React.Fragment>
      <Title>誰に励ましてもらう？</Title>
      <p>
        <Link to="/shuzo">松岡修造</Link>
      </p>
      <p>
        <Link to="/ikezaki">サンシャイン池崎</Link>
      </p>
      <p>
        <Link to="/tsunku">つんく♂さん</Link>
      </p>
      <p>
        <Link to="/pekopa">ぺこぱの人</Link>
      </p>
      <p>
        <Link to="/soshina">粗品</Link>
      </p>
      <p>
        <Link to="/zako">ハリウッドザコシショウ</Link>
      </p>
    </React.Fragment>
  );
};

export default Home;
