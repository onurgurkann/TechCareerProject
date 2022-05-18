import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <>
                <div className="login">
                    <h2>Giriş Yap</h2>
                    <Form className="form">
                        <FormGroup>
                            <Label for="exampleEmail">Kullanıcı Adı</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="abc@abc.com"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Parola</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                            />
                        </FormGroup>
                        <Button>Giriş Yap</Button>
                    </Form>
                </div>
            </>
        )
    }
}
