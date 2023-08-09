import { styled } from 'styled-components';

export const ScaleUpCenter = styled.div`
	@-webkit-keyframes scale-up-center {
		0% {
			-webkit-transform: scale(0.5);
			transform: scale(0.5);
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
	@keyframes scale-up-center {
		0% {
			-webkit-transform: scale(0.5);
			transform: scale(0.5);
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}

	-webkit-animation: scale-up-center 0.6s both;
	animation: scale-up-center 0.6s both;
`;

export const ScaleUpRight = styled.div`
	@-webkit-keyframes scale-up-right {
		0% {
			-webkit-transform: scale(0.5);
			transform: scale(0.5);
			-webkit-transform-origin: 100% 50%;
			transform-origin: 100% 50%;
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-transform-origin: 100% 50%;
			transform-origin: 100% 50%;
		}
	}
	@keyframes scale-up-right {
		0% {
			-webkit-transform: scale(0.5);
			transform: scale(0.5);
			-webkit-transform-origin: 100% 50%;
			transform-origin: 100% 50%;
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-transform-origin: 100% 50%;
			transform-origin: 100% 50%;
		}
	}

	-webkit-animation: scale-up-right 0.6s both;
	animation: scale-up-right 0.6s both;
`;
