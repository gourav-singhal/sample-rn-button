import React, { Component } from 'react';
import { View,
    TouchableHighlight,
    Text
} from 'react-native';

export default class Button extends Component {
    render()
    {
        return(
            <View>
                <TouchableHighlight onPress={this.props.handlePress}>
                    <Text>Press Me</Text>
                </TouchableHighlight>
            </View>
        );
    }
}