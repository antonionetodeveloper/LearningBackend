import { useState } from "react";
import styled from "styled-components";

export default function Loading(props){
	return(
		<Container isLoading={props.isVisible}>
			<div>
				<img src="/loading.svg" alt=""/>
			</div>
		</Container>
	);
}


const Container = styled.div`
&{
		position: fixed;
		height: 100vh;
		width: 100vw;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 3;

		display: ${(props) => {
			if(props.isLoading == "Loading"){
				return "flex"
			}if(props.isLoading == "notLoading"){
				return "none"
			}
		}};


		align-items: center;
		justify-content: center;
		
		div{
			width: 20vw;
			height: 30vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 5vw;
			border-radius: 1vw;
			box-shadow: #ECD0B4 0px 0px 30px;
			background-color: #CB997E;
			z-index: 3;

			img{
				width: 20vw;
			}
			p{
				font-size: 2.5vw;
			}

		}
	}
`;