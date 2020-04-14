import * as React from "react";
import TestRenderer from 'react-test-renderer';
import {App} from "../src";

it('renders without crashing', () => {
	TestRenderer.create(<App />);
});