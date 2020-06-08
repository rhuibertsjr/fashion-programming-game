
import React from "react";
import { shallow } from "enzyme";
import EditorContainer from "@containers/editor-container/EditorContainer";
//@ts-ignore
import s from '@containers/editor-container/editor.module.less';

describe('Dresscode editor', () =>
{
	it('Editor can compile', () =>
	{
		const container = shallow(<EditorContainer />);

		container.find(
			<div className={s.appRunButton}>
				<button />
			</div>
		).simulate('click');

		//@ts-ignore
		expect(container.state().code.toHaveLength(5));
		
	});
	
});