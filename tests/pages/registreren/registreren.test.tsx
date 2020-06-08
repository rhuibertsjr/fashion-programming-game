
const spy = jest.spyOn(Storage.prototype, 'setItem');

describe('Dresscode registreren', () =>
{
	it('User has a character', () =>
	{
		localStorage.setItem = jest.fn(localStorage.setItem);
		localStorage.setItem( 'character', '0' );
		
		expect( spy ).toHaveBeenCalledTimes( 1 );
	});
});