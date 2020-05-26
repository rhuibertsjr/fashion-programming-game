import React from 'react';
import { shallow } from "enzyme";

import { Landing } from '../../../src/pages';


it('ORKAY', async () =>
{
	try
	{
		const result = shallow(<Landing/>).contains(<button> Start het spel </button>);
		return expect(result).toBeTruthy();
	}
	catch (error)
	{
		expect(error).toEqual(new Error());
	}
});

beforeAll(done => {
	done()
});
