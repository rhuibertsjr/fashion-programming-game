declare module '*.less' {
	const content: { [className: string]: string };
	export default content;
}

declare module "*.png" {
	const value: any;
	export = value;
}

declare module '*.jpg';
declare module '*.xml';