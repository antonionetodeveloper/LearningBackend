import styled from "styled-components";

export const Button = styled.button`
	/* From cssbuttons.io by @alexmaracinaru */
	&{
		cursor: pointer;
		font-weight: 700;
		font-family: Helvetica,"sans-serif";
		transition: all .2s;
		padding: 10px 20px;
		border-radius: 100px;
		background: #6B705C;
		border: 1px solid transparent;
		display: flex;
		align-items: center;
		font-size: 15px;
		transition: 0.5s;
		color: #FFE8D6;
		}


		img {
			width: 34px;
			margin-left: 10px;
			transition: transform .3s ease-in-out;
		}
		:hover {
			background: #A5A58D;
			img {
				transform: translateX(5px);
			}
		}


		:active {
			transform: scale(0.95);
		}


`