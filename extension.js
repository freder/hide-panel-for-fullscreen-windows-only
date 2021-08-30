const Main = imports.ui.main;
const PanelBox = Main.layoutManager.panelBox;


class Extension {
	constructor() {
		this.handlerId = null;
	}

	handler() {
		const { fullscreen } = global.display.focus_window;
		if (fullscreen) {
			PanelBox.hide();
		} else {
			PanelBox.add_style_class_name('fully-opaque');
			PanelBox.show();
		}
	}

	enable() {
		this.handlerId = global.display.connect('notify::focus-window', this.handler);
	}

	disable() {
		global.display.disconnect(this.handlerId);
		PanelBox.remove_style_class_name('fully-opaque');
	}
}

function init() {
	return new Extension();
}
