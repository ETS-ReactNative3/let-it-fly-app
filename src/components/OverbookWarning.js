import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

class OverbookWarning extends React.Component {

    render() {

        const containerStyle = {
            padding: 10,
            backgroundColor: '#DAA520'
        }

        const warningStyle = {
            fontSize: 15,
            color: 'white',
            textAlign: 'center'
        }

        const iconStyle = {
            color: 'white',
            fontSize: 15,
            paddingRight: 200
        }

        return (
            <View style={containerStyle}>
                <Text style={warningStyle}>Your flight SQ336 towards Singapore is overbooked. Would you like to take the next flight and enjoy free amenities on us ?</Text>
            </View >
        );
    }
}

export default OverbookWarning;