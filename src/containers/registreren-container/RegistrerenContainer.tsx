import React, { PureComponent, Fragment } from 'react';
import s from './registreren.module.less';
import {Link} from "react-router-dom";

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors: any) => {
	let valid = true;
	Object.values(errors).forEach(
		(val: any) => val.length > 0 && (valid = false)
	);
	return valid;
};

class RegistrerenContainer extends PureComponent<{}, IRegistrerenState> {
	
	public state: IRegistrerenState =
	{
		username: null,
		email: null,
		radio: {
			age: true,
			terms: false
		},
		errors: {
			username: '',
			email: ''
		}
	};
	
	private handleChange = (event: any): void =>
	{
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors;
		
		switch (name)
		{
			case 'username':
				errors.username = value.length > 15 ? 'De gebruikers naam mag maximaal 15 letters lang zijn' : '';
				break;
			case 'email':
				errors.email = !validEmailRegex.test(value) ? 'Deze email is niet geldig.' : '';
				break;
			default:
				break;
		}
		
		// @ts-ignore
		this.setState({
			errors,
			[name]: value
		});
		
	};
	
	private handleSubmit = (event: any): void =>
	{
		event.preventDefault();
		if (validateForm(this.state.errors) && this.state.username != null)
		{
			localStorage.setItem('username', this.state.username)
		}
		else
		{
			console.error('Invalid Form');
		}
	};
	
	private onRadioCheck = (_event: any): void =>
	{
	
	};
	
	public render(): JSX.Element
	{
		const { errors } = this.state;
		
		return (
			<Fragment>
				<form className={s.form} onSubmit={this.handleSubmit} noValidate>
					<div className={s.formUsername}>
						<label>
							<input
								type="text"
								name="Naam"
								className={s.formInput}
								placeholder="Naam"
								formNoValidate
							/>
						</label>
						<label>
							<input
								type="text"
								name="username"
								className={s.formInput}
								placeholder="Gebruikersnaam"
								onChange={this.handleChange}
								formNoValidate
							/>
						</label>
						{ errors.username.length > 0 && <span className={s.error}>{errors.username}</span> }
					</div>
					<div className={s.formAge}>
						<label>
							<input
								type="text"
								name="birthday"
								className={s.formInput}
								placeholder="Geboortedatum"
								formNoValidate
							/>
						</label>
						<label>
							<input
								type="text"
								name="birthyear"
								className={`${s.formInput} ${s.birthyear}`}
								placeholder="Geboortejaar"
								formNoValidate
							/>
						</label>
					</div>
					<div className={s.formEmail}>
						<label>
							<input
								type="email"
								name="email"
								className={s.formInput}
								placeholder="Email"
								onChange={this.handleChange}
								formNoValidate
							/>
						</label>
						{ errors.email.length > 0 && <span className={s.error}>{errors.email}</span> }
					</div>
					<div className={s.formTerms}>
						<label>
							<input type="radio" name="age" checked={this.state.radio.age} onChange={this.onRadioCheck} />
							<p>Ik ben 8 jaar of ouder en ik heb toestemming van mijn ouders/verzorgers om dit spel te spelen.</p>
						</label>
						<br />
						<label>
							<input type="radio" name="terms" checked={this.state.radio.terms} onChange={this.onRadioCheck} />
							<p>Ik ga akkoord met de <span>regels</span> en <span>algemene voorwaarden</span> van dit spel.</p>
						</label>
					</div>
				</form>
				<div className={s.formButton}>
					<button onClick={this.handleSubmit}>
						<Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to="/uitleg/hello">
							Volgende stap
						</Link>
					</button>
				</div>
			</Fragment>
		);
	}
}

export default RegistrerenContainer;
