import React, { Component } from 'react'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'

export default class HomeComponent extends Component {
    render() {
        return (
            <>
                <HeaderComponent />
                <FooterComponent />
            </>
        )
    }
}
