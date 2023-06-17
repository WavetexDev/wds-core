import React from 'react'
import * as s from './styles'
import { WaveclassTheme } from '@/layout';

import { Typography } from '../../typography'

import { ButtonProps } from '../types'

export const FilterButton = ({
    content,
    icon,
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