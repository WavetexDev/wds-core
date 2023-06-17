import React from 'react'
import * as s from './styles'
import { WaveclassTheme } from '@/layout'

import { InputProps } from '../types'
import { Typography } from '../../typography'

export const StandardInput = (
    props
: InputProps): JSX.Element => {
    return (
        <>
            <WaveclassTheme>
                <s.StandardInputContainer>
                    <s.StandardInputWrapper>
                        {props.icon}
                        <s.StandardInput type={props.type} placeholder={props.placeholder} required={props.required} />
                    </s.StandardInputWrapper>

                    {
                        props.showError &&
                        <s.ErrorMessage>
                            <Typography variant={'small-regular'} content={props.errorMessage} />
                        </s.ErrorMessage>
                    }
                </s.StandardInputContainer>
            </WaveclassTheme>
        </>
    )
}