
import React from "react";
import { shallow } from "enzyme";

describe('Dresscode intro', () =>
{
	it('User can continue', () =>
	{
		const button = shallow(
			<button> Start het spel {">"} </button>
		);
		
		expect(button.find('button').html()).toMatch("Start het spel &gt;")
	});
	
	it('User is able to login ', () =>
	{
		const button = shallow(
			<p> Ik heb al een account </p>
		);
		
		expect(button.find('p').html()).toMatch("Ik heb al een account")
	});
	
});