import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {}

        this.cancel = this.cancel.bind(this)
    }

    cancel() {
        this.props.navigate('/')
    }

    render() {
        return (
            <>
                <br /><br /><br />
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3'><br />
                            <div className='text-center bg-light'><h3>Giriş Yap</h3></div>
                            <div className='card-body'>
                                <Form>
                                    <FormGroup>
                                        <Label for="username">Kullanıcı Adı</Label>
                                        <Input
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder=""
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Parola</Label>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder=""
                                        />
                                    </FormGroup>
                                    <Button className='btn btn-success'>Giriş Yap</Button>
                                    <Button className='btn btn-danger' style={{ marginLeft: "2%" }} onClick={this.cancel}>İptal</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default (props) => (
    <Login
        {...props}
        params={useParams()}

        navigate={useNavigate()}
        {...props}
    />
);