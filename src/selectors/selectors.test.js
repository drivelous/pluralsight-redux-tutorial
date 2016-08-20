import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
	describe('authorsFormattedForDropdown', () => {
		it('Should return author data formatted for use in a dropdown', () => {
			const authors = [
				{id: 'cory-house', firstName: 'Cory', lastName: 'House'},
				{id: 'dan-wahlin', firstName: 'Dan', lastName: 'Wahlin'}
			];

			const expected = [
				{value: 'cory-house', text: 'Cory House'},
				{value: 'dan-wahlin', text: 'Dan Wahlin'}
			];
			expect(authorsFormattedForDropdown(authors)).toEqual(expected);
		});
	});
});
