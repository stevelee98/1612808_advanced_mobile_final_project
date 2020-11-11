import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { ErrorCode } from "config/errorCode";

export class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }

    componentDidUpdate(prevProps, prevState){
        
    }

    render() {
        return (
            <View>
                <Text> prop </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
