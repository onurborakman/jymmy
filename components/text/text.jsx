import React from 'react';
import { Text as NativeText} from 'react-native';
import PropTypes from 'prop-types';

const Text = props => {

    const {
        children,
        size,
        family
    } = props;

    return (
        <NativeText>
            {children}
        </NativeText>
    );
};

export default Text;