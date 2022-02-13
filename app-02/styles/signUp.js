import styled from "styled-components";

// pallet: #FFE8D6 #6B705C #A5A58D #B7B7A4 #DDBEA9 #CB997E

export const Main = styled.main`
	&{
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		background-image: url(${'/background.svg'});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		
		div{
			display: flex;
			flex-direction: column;
			align-items: center;
			z-index: 1;

			background-color: #DDBEA9;
			color: #6B705C;

			padding: 5vw;
			border-radius: 1vw;
			border: #CB997E solid;

			form{
				display: flex;
				flex-direction: column;
				align-items: center;

				h1{
					margin: 0px;
					font-size: 5vw;
				}

				div{
					display: flex;
					flex-direction: column;
					padding: 1vw;
					gap: 2vw;

					border: 0px solid;

					input{
						border: 0px;
						background-color: #FFE8D6;
						padding: 0.5vw 1vw 0.5vw 1vw;
						border-radius: 1vw;
						box-shadow: #ECD0B4 2px 2px 4px inset, #F0EAE5 -2px -2px 4px inset;
						color: #6B705C;
						font-size: 2vw;

						:focus{
							box-shadow: inset 0 0 0.5em #FFF2E8;
							outline: 0;
						}
					}
				}
				button{
					font-size: 2vw;
					margin-top: 2vw;

					img{
						width: 3vw;
					}
				}
			}
			a{
				color: #6B705C;
				margin-top: 1vw;
				font-size: 1.5vw;
			}
		}
	}
`;