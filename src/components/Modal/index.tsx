import React from 'react';
import { FiX } from 'react-icons/fi';

import { WaveclassTheme } from '../../layout';

import * as S from './styles';

import { PropsT } from './types';

export const Modal: React.FC<PropsT> = ({
	children,
	position,
	isShowing,
	title,
	subtitle,
	onClose,
	customStyle,
}): JSX.Element => {
	return (
		<WaveclassTheme>
			<S.Overlay
				isShowing={isShowing}
				position={position}
				customStyle={customStyle?.overlay}
			>
				<S.Modal
					position={position}
					customStyle={customStyle?.modal}
				>
					<S.CloseButton onClick={onClose}>
						<FiX size={24} color="#8C97AA" />
					</S.CloseButton>

					{(title || subtitle) && (
						<S.Header>
							{title && (
								<S.Title
									customStyle={
										customStyle?.title
									}
								>
									{title}
								</S.Title>
							)}
							{subtitle && (
								<S.Subtitle
									customStyle={
										customStyle?.subtitle
									}
								>
									{subtitle}
								</S.Subtitle>
							)}
						</S.Header>
					)}

					{children}
				</S.Modal>
			</S.Overlay>
		</WaveclassTheme>
	);
};
