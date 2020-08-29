import React, { useState } from 'react';
import ikezakiList from '../Data/ikezaki.json';
import styled from 'styled-components'
import { Link } from "react-router-dom";

import ikezakiImg from '../Images/ikezaki.jpg'

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
const HomeButton = styled.button`
	position: fixed;
	bottom: 10px;
	right: 10px;
	display: inline-block;
	font-size: 16px;
	border-radius: 5px;
	background-color: #fff;
  color: #fff;
	padding: 2px 5px;
	margin-left: 10px 15px;
	cursor: pointer;
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

const Ikezaki = () => {
	const [ikezaki, setIkezaki] = useState(ikezakiList.ikezaki[Math.floor(Math.random() * Math.floor(ikezakiList.ikezaki.length))]);

	let random: any;
	const ikezakiSlot = () => {
		random = Math.floor(Math.random() * Math.floor(ikezakiList.ikezaki.length));
		setIkezaki(ikezakiList.ikezaki[random]);
	}

	return (
		<React.Fragment>
			<Img src={ikezakiImg} />
			<HomeButton type='button'>
				<Link to="/">HOME</Link>
			</HomeButton>
			<Main>
				<MainText>{ikezaki}</MainText>
			</Main>
			<Container>
				<Button
					onClick={() => ikezakiSlot()}>
					おかわり!
				</Button>
			</Container>
		</React.Fragment>
	);
};

export default Ikezaki;
