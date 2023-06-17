import * as S from './styles';
import { WaveclassTheme } from '../../layout';
import React from 'react';

export const Avatar = ({
    size,
    img,
    name,
    online,
}: any): JSX.Element => {
    return (
        <>
            <WaveclassTheme>
                <S.Container
                    size={size}
                    img={img}
                    title={name}
                >
                    {img ? (
                        <img src={img} alt={name} />
                    ) : (
                        name.charAt(0)
                    )}

                    {online && (
                        <S.OnlineBadge size={size} />
                    )}
                </S.Container>
            </WaveclassTheme>
        </>
    );
};
