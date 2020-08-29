import React, { useState } from 'react';
import shuzoList from '../Data/shuzo.json';
import styled from 'styled-components'

import shuzoImg from '../Images/shuzo.jpg'

const Title = styled.h2`
	font-size: 1.3rem;
	color: #fff;
`
const Button = styled.p`
	display: inline-block;
	font-size: 1.6rem;
	background: palevioletred;
  border-radius: 30px;
	border: 2px solid palevioletred;
  color: #fff;
	padding: 10px 20px;
	margin: 0;
	cursor: pointer;
	transition: all  0.5s ease;
	&:hover {
		opacity: 0.8;
		background: #fff;
		color: palevioletred;
	}
`
const Main = styled.div`
	width: 100%;
	margin-top: 30px;
`
const MainText = styled.p`
	width: 80%;
	max-height: 65vh;
	overflow-y: auto;
	margin: 0 auto;
	font-size: 1.5rem;
	font-weight: bold;
	font-family: 'Sawarabi Mincho', sans-serif;
	padding 20px;
	background: #fff;
	opacity:0.8;
	border-radius: 10px;
`
const Img = styled.img`
	position: absolute;
	top: 0;
	left:0;
	width: 100%;
	height: 100%;
	z-index: -1;
	object-fit: cover;
`

const Container = styled.div`
	position: fixed;
	bottom: 10px;
	left 50%;
	transform: translateX(-50%);
`

const Shuzo = () => {
	const [shuzo, setShuzo] = useState(shuzoList.shuzo[Math.floor(Math.random() * Math.floor(shuzoList.shuzo.length))]);

	let random: any;
	const shuzoSlot = () => {
		random = Math.floor(Math.random() * Math.floor(shuzoList.shuzo.length));
		setShuzo(shuzoList.shuzo[random]);
	}

	return (
		<React.Fragment>
			<Img src={shuzoImg} />
			<Title>修造はいつでもあなたの味方！</Title>
			<Main>
				<MainText>{shuzo}</MainText>
			</Main>
			<Container>
				<Button
					onClick={() => shuzoSlot()}>
					おかわり!
				</Button>
			</Container>
		</React.Fragment>
	);
};

export default Shuzo;
