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
	let x = Compiler.valueToCode(block, 'x', Compiler.ORDER_ATOMIC);
	let y = Compiler.valueToCode(block, 'y', Compiler.ORDER_ATOMIC);
	let r = Compiler.valueToCode(block, 'radius', Compiler.ORDER_ATOMIC);
	let name = getRandomString(10);
	
	return `
		const ${name} = new PIXIJS.Graphics();

		${name}.beginFill(0x74cc3c);
		${name}.drawCircle(${x}, ${y}, ${r});
		${name}.endFill();
		
		${name}.mask = this.state.stage.children[0].children[0];
		
		this.state.stage.addChild(${name});
	`;
};