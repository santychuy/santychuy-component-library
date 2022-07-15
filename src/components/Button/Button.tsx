import React, { FC } from 'react';

import { Button as ButtonStyle } from './styles';

export interface ButtonProps {
    label: string;
}

const Button: FC<ButtonProps> = ({label}) => <ButtonStyle type='button'>{label}</ButtonStyle>

export default Button;