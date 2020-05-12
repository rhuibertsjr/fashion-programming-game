// @ts-nocheck due to blockly's typings
import Blockly from "blockly";
import * as Compiler from "blockly/javascript";

function getRandomString(length: number) {
	let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	let result = '';
	for ( let i = 0; i < length; i++ ) {
		result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
	}
	return result;
}

Blockly.Blocks['create_ellipse'] = {
	init: function() {
		this.appendValueInput("x")
		.setCheck("Number")
		.appendField("Teken een cirkel, x");
		this.appendValueInput("y")
		.setCheck("Number")
		.appendField("y");
		this.appendValueInput("radius")
		.setCheck("Number")
		.appendField("radius");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(330);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.JavaScript['create_ellipse'] = function(block) {
	const x = Compiler.valueToCode(block, 'x', Compiler.ORDER_ATOMIC);
	const y = Compiler.valueToCode(block, 'y', Compiler.ORDER_ATOMIC);
	const r = Compiler.valueToCode(block, 'radius', Compiler.ORDER_ATOMIC);
	const n = getRandomString(5);
	
	return (
		`
		const ${n} = new PIXIJS.Graphics();
	
		${n}.beginFill(0x74cc3c);
		${n}.drawCircle(${x}, ${y}, ${r});
		${n}.endFill();
	
		${n}.mask = this.state.stage.children[3].children[0];
		this.state.stage.children[3].addChild(${n});
	`
	);
};

Blockly.Blocks['start'] = {
	init: function() {
		this.appendValueInput("start")
		.setCheck(null)
		.appendField("Als de code start");
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("Als je op de 'start' knop drukt");
		this.setHelpUrl("");
	}
};