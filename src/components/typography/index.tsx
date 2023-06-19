import React from 'react'
import * as s from './styles'
import { WaveclassTheme } from '@/layout'
import { TypographyProps } from './types'

export const Typography = ({
    variant,
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
}