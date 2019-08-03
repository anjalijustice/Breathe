import React from 'react';
import { Image } from 'react-native'

class breatheBanner extends React.Component{
    render() {
        return(
            <Image
                source={require('./banner.png')}
                style={{ width: 100, height: 50}}
            />
        );
    }
}

export default breatheBanner;