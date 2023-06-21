import React from 'react'
import * as s from './styles'
<<<<<<< HEAD
import { WaveclassTheme } from '@/layout'
=======
import { WaveclassTheme } from '../../../layout';
>>>>>>> 35266fa416f8ebda5186b42bcbe8bff5a91eb7d2

import { Typography } from '../../typography'

import { RegularButtonProps } from './types'

export const RegularButton = ({
<<<<<<< HEAD
    variant, 
    content 
=======
    variant,
    content
>>>>>>> 35266fa416f8ebda5186b42bcbe8bff5a91eb7d2
}: RegularButtonProps): JSX.Element => {
    return (
        <>
            <WaveclassTheme>
                <s.RegularButton variant={variant}>
                    <Typography variant={'paragraph-bold'} content={content} />
                </s.RegularButton>
            </WaveclassTheme>
        </>
    )
}