import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)

    }


    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'> {/* will handle onSubmit later */}
                    <h5 className='grey-text text-darken-3'>Create New Account</h5>
                    <div className='input-field'>
                        <label for='username'>Username</label>
                        <input type='text' id='username' onChange={this.handleChange}></input> {/* will handle onChange of username field later */}
                    </div>
                    <h5 className='grey-text text-darken-3'>Password</h5>
                    <div className='input-field'>
                        <label for='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange}></input> {/* will handle onChange of password field later */}
                    </div>
                    <div className='input-field'>
                        <button className='btn cyan lighten-1'>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
