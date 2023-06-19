import React, { ReactNode } from 'react'
import * as s from './styles'
import { WaveclassTheme } from '../../layout'
import { TypographyProps } from './types'

export const Typography = ({
    variant,
    content
}: TypographyProps): JSX.Element => {
    const Wrapper = (props: { children: ReactNode }): JSX.Element => <WaveclassTheme>{props.children}</WaveclassTheme>
    switch (variant) {
        case 'h1-bold':
            return <Wrapper><h1></h1></Wrapper>
        // ...outras variants
        default:
            return <Wrapper><h1></h1></Wrapper>
    }
}