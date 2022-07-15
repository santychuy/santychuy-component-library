import React, { FC } from 'react';

import './styles.css';

export interface ButtonProps {
    label: string;
}

const Button: FC<ButtonProps> = ({label}) => <button type='button'>{label}</button>;

export default Button;