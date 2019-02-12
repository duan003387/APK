class APK extends eui.Component implements eui.UIComponent {
	public btn: eui.Button;
	public btnShare: eui.Button;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		var shareLayer = ShareLayer.getInstance();
        this.addChild(shareLayer);
		this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.TouchFunc, this)
		this.btnShare.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
			ShareLayer.getInstance().show();
		}, this)
	}

	public TouchFunc() {
		window.location.href = 'http://www.hkj67.com/duan/Billiard1.apk';
		// let shareqqzonestring = "http://www.hkj67.com/duan/Billiard1.apk";
		// window.open(shareqqzonestring, 'newwindow3', 'height=400,width=400,top=100,left=100');
	}
}