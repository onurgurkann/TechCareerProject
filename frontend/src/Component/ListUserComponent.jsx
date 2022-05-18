import React, { Component } from 'react'
import UserService from '../services/UserService'
import { withRouter } from './withRouter'
import {Table} from 'reactstrap'


class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }

        this.addUser = this.addUser.bind(this)
        this.viewUser = this.viewUser.bind(this)
        this.updateUser = this.updateUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
    }

    addUser() {
        this.props.navigate('/dashboard/add-user')
    }

    viewUser(id) {
        this.props.navigate(`/dashboard/view-user/${id}`)
    }

    updateUser(id) {
        this.props.navigate(`/dashboard/update-user/${id}`)
    }

    deleteUser(id) {
        UserService.deleteUser(id).then((res) => {
            this.setState({
                users: this.state.users.filter(
                    (user) => user.id !== id
                )
            })
        })
    }


    // Didmount - cdm
    componentDidMount() {
        UserService.getAllUsers().then((res) => {
            this.setState({ users: res.data })
        })
    }

    render() {
        return (
            <>
                <div className='container'>
                    <h3 className='text-danger'>Kullanıcı Listesi</h3>
                    {/* <div className="row">
                        <button className="btn btn-primary btn-dm" onClick={this.addUser}>
                            Ekleme
                        </button>
                    </div> */}
                    <br/>
                    <div className='row text-center'>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Ad</th>
                                    <th>Soyad</th>
                                    <th>Kullanıcı Adı</th>
                                    <th>E-Mail</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.surname}</td>
                                            <td>{user.username}</td>
                                            <td>{user.mail}</td>
                                            <td>
                                                <button onClick={() => this.viewUser(user.id)} className='btn btn-primary'>Göster</button>
                                                <button onClick={() => this.updateUser(user.id)} className='btn btn-success'>Güncelle</button>
                                                <button onClick={() => this.deleteUser(user.id)} className='btn btn-danger'>Sil</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(ListUserComponent)
