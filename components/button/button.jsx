import React from 'react';
import { Button as NativeButton } from 'react-native';
import PropTypes from 'prop-types';

const Button = props => {

    const {
        onPress,
        title,
        color
    } = props;

    return (
        <NativeButton
            onPress={onPress}
            title={title}
            color={color}
        />
    );
};

Button.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    color: PropTypes.string
};

export default Button;