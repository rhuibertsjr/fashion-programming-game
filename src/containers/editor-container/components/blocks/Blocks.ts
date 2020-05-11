// @ts-nocheck due to blockly's typings
import Blockly from "blockly";
import * as Compiler from "blockly/javascript";

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
	
	return `
		const circle = new PIXIJS.Graphics();

		circle.beginFill(0x74cc3c);
		circle.drawCircle(370, 185, 10);
		circle.endFill();
		
		circle.mask = character_clothes;
		
		stage.addChild(circle);
	`;
};