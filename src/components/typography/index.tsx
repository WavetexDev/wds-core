import React, { ReactNode } from 'react'
import * as s from './styles'
<<<<<<< HEAD
import { WaveclassTheme } from '@/layout'
=======
import { WaveclassTheme } from '../../layout'
>>>>>>> 35266fa416f8ebda5186b42bcbe8bff5a91eb7d2
import { TypographyProps } from './types'

export const Typography = ({
    variant,
<<<<<<< HEAD
    content 
}: TypographyProps): JSX.Element => {
    return (
        <>
            <WaveclassTheme>
                <s.Typography variant={variant}>
                    {content}
                </s.Typography>
            </WaveclassTheme>
        </>
    )
=======
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
>>>>>>> 35266fa416f8ebda5186b42bcbe8bff5a91eb7d2
}