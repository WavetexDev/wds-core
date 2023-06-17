import styled from "styled-components";

import { TypographyStylingProps } from "./types";

export const Typography = styled.p<TypographyStylingProps>` // TODO Pick a better tag
    font-weight: ${({ variant }) => 
        variant.includes('bold') ? 'bold' : 'regular'
    };

    font-style: ${({ variant }) => variant.includes('italic') ? 'italic' : 'normal'};

    font-size: ${({ variant }) => 
        (variant.includes('h1') && '32px') ||

        (variant.includes('h2') && '26px') ||

        (variant.includes('h3') && '20px') ||

        (variant.includes('h4') && '16px') ||

        (variant.includes('h5') && '14px') ||

        (variant.includes('h6') && '12px') ||

        (variant.includes('small') && '10px') ||

        (variant.includes('paragraph') && '12px') ||


        '1rem'
    };
`