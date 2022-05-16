import React, { Component } from 'react'
import UserService from '../services/UserService'
import { withRouter } from './withRouter'


class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }

        this.addUser = this.addUser.bind(this)
        this.viewUser = this.viewUser.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }

    addUser() {
        this.props.navigate('/dashboard/users/add-user')
    }

    viewUser(id){
        this.props.navigate(`/dashboard/users/view-user/${id}`)
    }

    updateUser(id){
        this.props.navigate(`/dashboard/users/update-user/${id}`)
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
                <h3 className='text-danger'>User List</h3>
                <div className='container'>
                    <div className="row">
                        <button className="btn btn-primary btn-dm" onClick={this.addUser}>
                            Ekleme
                        </button>
                    </div>
                    <div className='row'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Ad</th>
                                    <th>Soyad</th>
                                    <th>E-Mail</th>
                                    <th>Parola</th>
                                    <th>Resim</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map((user) => (
                                        <tr key={user.userId}>
                                            <td>{user.userId}</td>
                                            <td>{user.userName}</td>
                                            <td>{user.userSurname}</td>
                                            <td>{user.userMail}</td>
                                            <td>{user.userPassword}</td>
                                            <td>{user.userImage}</td>
                                            <td>
                                                <button onClick={()=>this.viewUser(user.userId)} className='btn btn-primary'>Göster</button>
                                                <button onClick={()=>this.updateUser(user.userId)} className='btn btn-success'>Güncelle</button>
                                                <button className='btn btn-danger'>Sil</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(ListUserComponent)
