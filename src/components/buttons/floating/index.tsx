import React from 'react'
import * as s from './styles'
import { WaveclassTheme } from '@/layout';

import { TfiPlus } from 'react-icons/tfi'

import { FloatingButtonProps } from './types'

export const FloatingButton = ({
    variant
}: FloatingButtonProps): JSX.Element => {
    return (
        <>
            <WaveclassTheme>
                <s.FloatingButton variant={variant}>
                    <TfiPlus size={16} />
                </s.FloatingButton>
            </WaveclassTheme>
        </>
    )
}