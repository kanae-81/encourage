import React, { useState } from 'react';
import soshinaList from '../Data/soshina.json';
import styled from 'styled-components'
import { Link } from "react-router-dom";

import soshinaImg from '../Images/soshina.jpg'

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

const Soshina = () => {
	const [soshina, setSoshina] = useState(soshinaList.soshina[Math.floor(Math.random() * Math.floor(soshinaList.soshina.length))]);

	let random: any;
	const soshinaSlot = () => {
		random = Math.floor(Math.random() * Math.floor(soshinaList.soshina.length));
		setSoshina(soshinaList.soshina[random]);
	}

	return (
		<React.Fragment>
			<Img src={soshinaImg} />
			<HomeButton type='button'>
				<Link to="/">HOME</Link>
			</HomeButton>
			<Main>
				<MainText>{soshina}</MainText>
			</Main>
			<Container>
				<Button
					onClick={() => soshinaSlot()}>
					おかわり!
				</Button>
			</Container>
		</React.Fragment>
	);
};

export default Soshina;
