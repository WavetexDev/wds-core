import { styled } from "styled-components";

import { FloatingButtonProps } from './types'

export const FloatingButton = styled.button<FloatingButtonProps>`
    min-width: 32px;
    min-height: 32px;
    background: ${(props) => props.variant === 'primary' ? props.theme.primary : props.theme.secondary};
    box-shadow: ${(props) => props.theme.box_shadow.dark};
    border: 0;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`