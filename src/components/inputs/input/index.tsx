import React from 'react'
import * as s from './styles'
import { WaveclassTheme } from '../../../layout';

import { InputProps } from '../types'
import { Typography } from '../../typography'

export const Input = (props: InputProps): JSX.Element => {
    return (
        <>
            <WaveclassTheme>
                <s.InputContainer>
                    <s.InputWrapper>
                        {props.icon}
                        <s.Input type={props.type} placeholder={props.placeholder} required={props.required} />
                    </s.InputWrapper>

                    {
                        props.showError &&
                        <s.ErrorMessage>
                            <Typography variant={'small-regular'} content={props.errorMessage} />
                        </s.ErrorMessage>
                    }
                </s.InputContainer>
            </WaveclassTheme>
        </>
    )
}