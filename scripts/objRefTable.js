const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.video,
		C3.Plugins.TextBox,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.video.Acts.Pause,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.video.Acts.Play,
		C3.Plugins.video.Acts.SetLooping,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.int,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.Wait
	];
};
self.C3_JsPropNameTable = [
	{idle: 0},
	{Тач: 0},
	{Видео: 0},
	{pay: 0},
	{background: 0},
	{payBack: 0},
	{smilePayIcon: 0},
	{qrIcon: 0},
	{card: 0},
	{priceInput: 0},
	{textPay: 0},
	{yes: 0},
	{yesText: 0},
	{price: 0},
	{koplate: 0},
	{loading: 0},
	{backLoad: 0},
	{loadText: 0},
	{done: 0},
	{donePlat: 0},
	{doneSumma: 0}
];

self.InstanceType = {
	idle: class extends self.ISpriteInstance {},
	Тач: class extends self.IInstance {},
	Видео: class extends self.IWorldInstance {},
	pay: class extends self.ISpriteInstance {},
	background: class extends self.ISpriteInstance {},
	payBack: class extends self.ISpriteInstance {},
	smilePayIcon: class extends self.ISpriteInstance {},
	qrIcon: class extends self.ISpriteInstance {},
	card: class extends self.IWorldInstance {},
	priceInput: class extends self.ITextInputInstance {},
	textPay: class extends self.ITextInstance {},
	yes: class extends self.ISpriteInstance {},
	yesText: class extends self.ITextInstance {},
	price: class extends self.ITextInstance {},
	koplate: class extends self.ITextInstance {},
	loading: class extends self.IWorldInstance {},
	backLoad: class extends self.ISpriteInstance {},
	loadText: class extends self.ITextInstance {},
	done: class extends self.IWorldInstance {},
	donePlat: class extends self.ITextInstance {},
	doneSumma: class extends self.ITextInstance {}
}