import React from 'react'
import * as s from './styles'
<<<<<<< HEAD

import { Typography } from '../typography'
import { WaveclassTheme } from '@/layout'
=======
import { WaveclassTheme } from '../../layout'
>>>>>>> 35266fa416f8ebda5186b42bcbe8bff5a91eb7d2

export const NumberBadge = ({
    value
}: NumberBadgeProps): JSX.Element => {
    return (
        <>
            <WaveclassTheme>
                <s.NumberBadgeContainer>
<<<<<<< HEAD
                    <Typography variant={'small-regular'} content={value} />
=======
                    <Typography variant={'small-regular'} content={value.toString()} />
>>>>>>> 35266fa416f8ebda5186b42bcbe8bff5a91eb7d2
                </s.NumberBadgeContainer>
            </WaveclassTheme>
        </>
    )
}