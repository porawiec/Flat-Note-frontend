import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

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
        this.props.signIn(this.state)

    }


    render() {
        const { authError } = this.props
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Sign In</h5>
                    <div className='input-field'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username' onChange={this.handleChange}></input>
                    </div>
                    <h5 className='grey-text text-darken-3'>Password</h5>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange}></input>
                    </div>
                    <div className='input-field'>
                        <button className='btn cyan lighten-1'>Login</button>
                        <div className='red-text.center'>
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
