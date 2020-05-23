// @ts-nocheck due to blockly's typings
import Blockly from "blockly";
import * as Compiler from "blockly/javascript";

function getRandomString(length: number)
{
	let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	let result = '';
	for ( let i = 0; i < length; i++ ) {
		result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
	}
	return result;
}

Blockly.Blocks['create_ellipse'] =
{
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
		this.appendValueInput("color")
		.setCheck(null)
		.appendField("kleur");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(330);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.JavaScript['create_ellipse'] = function(block)
{
	const x = Compiler.valueToCode(block, 'x', Compiler.ORDER_ATOMIC);
	const y = Compiler.valueToCode(block, 'y', Compiler.ORDER_ATOMIC);
	const r = Compiler.valueToCode(block, 'radius', Compiler.ORDER_ATOMIC);
	const c = Compiler.valueToCode(block, 'color', Compiler.ORDER_ATOMIC).replace('#', '');
	const n = getRandomString(5);
	
	return (
		`
	//================================================
	const ${n} = new PIXIJS.Graphics();
	
	let x1${n} = 280 + ${x};
	let y1${n} = 250 + ${y};

	${n}.beginFill(0x${c.replace("'", "").replace("'", "")});
	${n}.drawCircle(x1${n}, y1${n}, ${r});
	${n}.endFill();
	
	${n}.mask = this.state.stage.children[3].children[0];
	this.state.stage.children[3].addChild(${n});
	//================================================
	`
	);
};

Blockly.Blocks['start'] = {
	init: function() {
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("Als je op de 'start' knop drukt");
		this.setHelpUrl("");
		this.jsonInit({
			message0: 'Als de code start'
		});
	}
};

Blockly.JavaScript['start'] = function (block)
{
	return '';
};

Blockly.Blocks['star'] =
{
	init: function() {
		this.appendValueInput("x")
		.setCheck("Number")
		.appendField("Teken een ster, x");
		this.appendValueInput("y")
		.setCheck("Number")
		.appendField("y");
		this.appendValueInput("p")
		.setCheck("Number")
		.appendField("points");
		this.appendValueInput("radius")
		.setCheck("Number")
		.appendField("radius");
		this.appendValueInput("color")
		.setCheck(null)
		.appendField("kleur");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(330);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.JavaScript['star'] = function(block)
{
	const x = Compiler.valueToCode(block, 'x', Compiler.ORDER_ATOMIC);
	const y = Compiler.valueToCode(block, 'y', Compiler.ORDER_ATOMIC);
	const p = Compiler.valueToCode(block, 'p', Compiler.ORDER_ATOMIC);
	const r = Compiler.valueToCode(block, 'radius', Compiler.ORDER_ATOMIC);
	const c = Compiler.valueToCode(block, 'color', Compiler.ORDER_ATOMIC).replace('#', '');
	const n = getRandomString(5);
	
	return (
	`
		const ${n} = new PIXIJS.Graphics();
		
		${n}.beginFill(0x${c.replace("'", "").replace("'", "")});
		${n}.drawStar(${x}, ${y}, ${p}, ${r});
		${n}.endFill();
		
		${n}.mask = this.state.stage.children[3].children[0];
		this.state.stage.children[3].addChild(${n});
	`
	);
};

Blockly.Blocks['rectangle'] =
	{
		init: function() {
			this.appendValueInput("x")
			.setCheck("Number")
			.appendField("Teken een vlak, x");
			this.appendValueInput("y")
			.setCheck("Number")
			.appendField("y");
			this.appendValueInput("width")
			.setCheck("Number")
			.appendField("breedte");
			this.appendValueInput("height")
			.setCheck("Number")
			.appendField("hoogte");
			this.appendValueInput("color")
			.setCheck(null)
			.appendField("kleur");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(330);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

Blockly.JavaScript['rectangle'] = function(block)
{
	const x = Compiler.valueToCode(block, 'x', Compiler.ORDER_ATOMIC);
	const y = Compiler.valueToCode(block, 'y', Compiler.ORDER_ATOMIC);
	const w = Compiler.valueToCode(block, 'width', Compiler.ORDER_ATOMIC);
	const h = Compiler.valueToCode(block, 'height', Compiler.ORDER_ATOMIC);
	const c = Compiler.valueToCode(block, 'color', Compiler.ORDER_ATOMIC).replace('#', '');
	const n = getRandomString(5);
	
	return (
		`
		const ${n} = new PIXIJS.Graphics();
		
		${n}.beginFill(0x${c.replace("'", "").replace("'", "")});
		${n}.drawRect(${x}, ${y}, ${w}, ${h});
		${n}.endFill();
	
		${n}.mask = this.state.stage.children[3].children[0];
		this.state.stage.children[3].addChild(${n});
	`
	);
};