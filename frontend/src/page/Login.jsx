import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom';
import './Login.css';

class Login extends Component {

    constructor(props){
        super(props)
        this.state={}

        this.cancel = this.cancel.bind(this)
    }

    cancel(){
        this.props.navigate('/')
    }

    render() {
        return (
            <>
                <div className="login">
                    <h2>Giriş Yap</h2>
                    <Form className="form">
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
                        <Button className='btn btn-danger' style={{ marginLeft: "2%" }} onClick ={this.cancel}>İptal</Button>
                    </Form>
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