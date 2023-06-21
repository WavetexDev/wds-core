import React from 'react'
import * as s from './styles'
<<<<<<< HEAD
import { WaveclassTheme } from '@/layout';
=======
import { WaveclassTheme } from '../../../layout';
>>>>>>> 35266fa416f8ebda5186b42bcbe8bff5a91eb7d2

import { Typography } from '../../typography'

import { ButtonProps } from '../types'

export const FilterButton = ({
    content,
<<<<<<< HEAD
    icon,
=======
    icon
>>>>>>> 35266fa416f8ebda5186b42bcbe8bff5a91eb7d2
}: ButtonProps): JSX.Element => {
    return (
        <>
            <WaveclassTheme>
                <s.FilterButton>
                    {icon}
                    <Typography variant={'paragraph-bold'} content={content} />
                </s.FilterButton>
            </WaveclassTheme>
        </>
    )
}