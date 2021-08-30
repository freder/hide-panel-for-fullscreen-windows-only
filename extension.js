const Main = imports.ui.main;
const PanelBox = Main.layoutManager.panelBox;


class Extension {
	constructor() {
		this.handler = this.handler.bind(this);
		this.handlerId = null;
	}

	handler() {
		const { fullscreen } = global.display.focus_window;
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
		this.handlerId = global.display.connect('notify::focus-window', this.handler);
	}

	disable() {
		global.display.disconnect(this.handlerId);
	}
}

function init() {
	return new Extension();
}
