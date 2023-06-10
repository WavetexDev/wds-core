import React from 'react';
import { AvatarProps } from './avatar.props';
import * as S from './styles';
import { WaveclassTheme } from '../../layout';

export const Avatar = ({
    size,
    img,
    name,
    online,
}: AvatarProps): JSX.Element => {
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
