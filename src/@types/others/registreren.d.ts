
declare interface IRegistrerenState
{
	username: string | null,
	email: string | null,
	radio: {
		age: boolean,
		terms: boolean
	},
	errors: {
		username: string,
		email: string
	}
}
