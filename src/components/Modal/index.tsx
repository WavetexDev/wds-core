import React from 'react';
import { TfiClose } from 'react-icons/tfi';

import { WaveclassTheme } from '../../layout';
import { Typography } from '../typography';
import { RegularButton } from '../buttons/regular';

import { getThemeMode } from '../../utils/get-theme-mode';

import * as S from './styles';

import { Props } from './types';
import { theme } from '../../theme';

export const Modal: React.FC<Props> = ({
	isShowing = false,
	position = 'center',
	children,
	onClose,
	size = 'sm',
	title,
	subtitle,
	confirmButton = {
		show: false,
		disabled: false,
		text: '',
	},
	cancelButton = {
		show: false,
		disabled: false,
		text: '',
	},
	dangerButton = {
		show: false,
		disabled: false,
		text: '',
	},
	customStyles,
}): JSX.Element => {
	const currentThemeMode = getThemeMode();

	return (
		<WaveclassTheme>
			<S.Overlay
				isShowing={isShowing}
				position={position}
				customStyles={customStyles?.overlay}
			>
				<S.Modal
					size={size}
					position={position}
					customStyles={customStyles?.modal}
				>
					<S.CloseButton onClick={onClose}>
						<TfiClose
							size={
								theme[currentThemeMode]
									.fontSizes.fs18
							}
							color={
								theme[currentThemeMode]
									.colors.gray500
							}
						/>
					</S.CloseButton>

					{(title || subtitle) && (
						<S.Header>
							{title && (
								<Typography
									text={title}
									variant="h3-bold"
									customStyles={
										customStyles?.title
									}
								/>
							)}

							{subtitle && (
								<Typography
									text={subtitle}
									variant="h4-regular"
									customStyles={
										customStyles?.subtitle
									}
								/>
							)}
						</S.Header>
					)}

					<S.ChildrenContainer
						customStyles={
							customStyles?.childrenContainer
						}
					>
						{children}
					</S.ChildrenContainer>

					{(confirmButton.show ||
						cancelButton.show ||
						dangerButton.show) && (
							<S.ButtonWrapper>
								{cancelButton.show && (
									<RegularButton
										text={
											cancelButton.text ??
											'Cancelar'
										}
										variant="primary-ghost"
										onClick={
											cancelButton.action
										}
										disabled={
											cancelButton.disabled
										}
										customStyles={{
											...S.CancelButtonStyles,
											...customStyles?.cancelButton,
										}}
									/>
								)}

								{dangerButton.show && (
									<RegularButton
										text={
											dangerButton.text ??
											'Excluír'
										}
										variant="danger-contained"
										onClick={
											dangerButton.action
										}
										disabled={
											dangerButton.disabled
										}
										customStyles={{
											...S.ActionButtonStyles,
											...customStyles?.dangerButton,
										}}
									/>
								)}

								{confirmButton.show && (
									<RegularButton
										text={
											confirmButton.text ??
											'OK'
										}
										variant="primary-contained"
										onClick={
											confirmButton.action
										}
										disabled={
											confirmButton.disabled
										}
										customStyles={{
											...S.ActionButtonStyles,
											...customStyles?.confirmButton,
										}}
									/>
								)}
							</S.ButtonWrapper>
						)}
				</S.Modal>
			</S.Overlay>
		</WaveclassTheme>
	);
};
