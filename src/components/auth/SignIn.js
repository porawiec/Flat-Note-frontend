import React, { Component } from 'react'

class SignIn extends Component {
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
                    <h5 className='grey-text text-darken-3'>Sign In</h5>
                    <div className='input-field'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username' onChange={this.handleChange}></input> {/* will handle onChange of username field later */}
                    </div>
                    <h5 className='grey-text text-darken-3'>Password</h5>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange}></input> {/* will handle onChange of password field later */}
                    </div>
                    <div className='input-field'>
                        <button className='btn cyan lighten-1'>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
