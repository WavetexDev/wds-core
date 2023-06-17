import { styled } from "styled-components";

import { RegularButtonStylingProps } from "./types";

export const RegularButton = styled.button<RegularButtonStylingProps>`
    width: 183px;
    height: 36px;
    background: ${(props) => 
        props.variant.includes('ghost') || props.variant.includes('text') ? 
            `transparent` 
        : props.variant.includes('primary') ? 
            `${props.theme.primary}` 
        : `${props.theme.secondary}`};

    box-shadow: ${(props) => props.variant.includes('contained') ?  `${props.theme.box_shadow.dark}` : 'none'};
    border-radius: 8px;

    cursor: pointer;
    border: ${(props) => props.variant.includes('ghost') ? `2px solid` : 0};
    border-color: ${(props) => props.variant.includes('primary') ? `${props.theme.primary}` : `${props.theme.secondary}`};

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        opacity: 0.9;
    }
`