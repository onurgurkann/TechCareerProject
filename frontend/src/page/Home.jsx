import React, { Component } from 'react'
import FooterComponent from '../component/FooterComponent'
import HeaderComponent from '../component/HeaderComponent'

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
