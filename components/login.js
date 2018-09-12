import React from 'react';

class Login extends React.Component{
	state = {
		submitted: false
	}

	onSubmit = event => {
		event.preventDefault();

		if(this.props.showResultAfterSubmit){
			this.setState(() => ({
				submitted: true
			}))
		}
	}

	render(){
		if(this.state.submitted){
			return <h1>Login Successful</h1>
		}
		
		return (
			<form onSubmit={this.onSubmit}>
				<p>
					<input type="email" />
				</p>
				<p>
					<input type="password" />
				</p>
				<p>
					<button>Submit</button>
				</p>
			</form>
		)
	}
}

export default Login;