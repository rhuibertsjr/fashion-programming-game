import Blockly from "blockly";

export const Styles: Blockly.BlocklyThemeOptions =
{
	categoryStyles: {
		'blokken': {
			colour: '#F4F4F4'
		},
		'figuren': {
			colour: '#61C6E1'
		},
		'logica': {
			colour: '#FAE5E8'
		},
		'herhaling': {
			colour: '#FD659B'
		},
		'rekenen': {
			colour: '#BEBBF4'
		},
		'kleuren': {
			colour: '#7572B0'
		},
		'variabelen': {
			colour: '#FFDF58'
		},
		'functies': {
			colour: '#9B9B9B'
		}
	},
	
	blockStyles: {
		// @ts-ignore
		"colour_blocks": {
			"colourPrimary": "#7572B0"
		},
		// @ts-ignore
		"list_blocks": {
			"colourPrimary": "260"
		},
		// @ts-ignore
		"logic_blocks": {
			"colourPrimary": "#FAE5E8",
			// "colourSecondary": "#000000",
			// "colourTertiary": "#000000",
			// "hat": "#000000"
		},
		// @ts-ignore
		"loop_blocks": {
			"colourPrimary": "#FD659B"
		},
		// @ts-ignore
		"math_blocks": {
			"colourPrimary": "#BEBBF4"
		},
		// @ts-ignore
		"procedure_blocks": {
			"colourPrimary": "#9B9B9B"
		},
		// @ts-ignore
		"text_blocks": {
			"colourPrimary": "160"
		},
		// @ts-ignore
		"variable_blocks": {
			"colourPrimary": "#FFDF58"
		},
		// @ts-ignore
		"variable_dynamic_blocks": {
			"colourPrimary": "#FFDF58"
		},
		// @ts-ignore
		"hat_blocks": {
			"colourPrimary": "330",
			"hat": "cap"
		}
	}
};