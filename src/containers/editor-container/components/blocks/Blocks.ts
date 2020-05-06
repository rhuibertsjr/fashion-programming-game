// @ts-nocheck due to blockly's typings
import Blockly from "blockly";
import * as Compiler from "blockly/javascript";

Blockly.Blocks['create_ellipse'] = {
	init: function() {
		this.appendValueInput("width")
		.setCheck("Number")
		.appendField("Teken een cirkel, breedte");
		this.appendValueInput("hoogte")
		.setCheck("Number")
		.appendField("hoogte");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(330);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.JavaScript['create_ellipse'] = function(block) {
	let width = Compiler.valueToCode(block, 'width', Compiler.ORDER_ATOMIC);
	let height = Compiler.valueToCode(block, 'hoogte', Compiler.ORDER_ATOMIC);

	return `
		console.log(${width},${height});
	`;
};