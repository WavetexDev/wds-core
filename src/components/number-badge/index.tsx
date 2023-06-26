import React from 'react'
import * as s from './styles'

import { Typography } from '../typography'
import { WaveclassTheme } from '../../layout'

export const NumberBadge = ({
    value
}: NumberBadgeProps): JSX.Element => {
    return (
        <>
            <WaveclassTheme>
                <s.NumberBadgeContainer>
                    <Typography variant={'small-regular'} text={value.toString()} />
                </s.NumberBadgeContainer>
            </WaveclassTheme>
        </>
    )
}