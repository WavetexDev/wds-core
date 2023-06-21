import React from 'react'
import * as s from './styles'
<<<<<<< HEAD
import { WaveclassTheme } from '@/layout';

import { TfiPlus } from 'react-icons/tfi'
=======
import { WaveclassTheme } from '../../../layout'
>>>>>>> 35266fa416f8ebda5186b42bcbe8bff5a91eb7d2

import { FloatingButtonProps } from './types'

export const FloatingButton = ({
<<<<<<< HEAD
    variant
=======
    variant,
    icon
>>>>>>> 35266fa416f8ebda5186b42bcbe8bff5a91eb7d2
}: FloatingButtonProps): JSX.Element => {
    return (
        <>
            <WaveclassTheme>
                <s.FloatingButton variant={variant}>
<<<<<<< HEAD
                    <TfiPlus size={16} />
=======
                    {icon}
>>>>>>> 35266fa416f8ebda5186b42bcbe8bff5a91eb7d2
                </s.FloatingButton>
            </WaveclassTheme>
        </>
    )
}