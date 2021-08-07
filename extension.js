const Main = imports.ui.main;
const PanelBox = Main.layoutManager.panelBox;


class Extension {
	constructor() {
		this.handler = this.handler.bind(this);
	}

	handler() {
		const win = global.display.focus_window;
		const { fullscreen } = win;
		if (fullscreen) {
			PanelBox.hide();
		} else {
			// TODO: why does this not make it fully opaque?
			// PanelBox.set_opacity(255);
			PanelBox.set_style('opacity: 1; background: rgba(0, 0, 0, 255);');
			PanelBox.show();
		}
	}

	enable() {
		global.display.connect('notify::focus-window', this.handler);
	}

	disable() {
	}
}

function init() {
	return new Extension();
}
