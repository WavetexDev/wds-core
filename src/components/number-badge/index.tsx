import React from 'react'
import { Typography } from '../typography'
import * as s from './styles'
import { WaveclassTheme } from '@/layout'

export const NumberBadge = ({
    value
}: NumberBadgeProps): JSX.Element => {
    return (
        <>
            <WaveclassTheme>
                <s.NumberBadgeContainer>
                    <Typography variant={'small-regular'} content={value} />
                </s.NumberBadgeContainer>
            </WaveclassTheme>
        </>
    )
}