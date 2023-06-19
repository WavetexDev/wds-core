import React from 'react'
import * as s from './styles'
import { WaveclassTheme } from '@/layout'

import { FloatingButtonProps } from './types'

export const FloatingButton = ({
    variant,
    icon
}: FloatingButtonProps): JSX.Element => {
    return (
        <>
            <WaveclassTheme>
                <s.FloatingButton variant={variant}>
                    {icon}
                </s.FloatingButton>
            </WaveclassTheme>
        </>
    )
}