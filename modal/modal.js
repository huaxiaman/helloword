
/**
* <Modal>
* 参数配置对象包含如下可配置的参数:
* width/height：弹框宽高
* boxColor：弹框背景色
* innerColor：内容背景色
* fontColor：字体色
* border：弹框的边框属性
* padding：弹框留白大小 
*  
* 可供调用的方法列表：
* Modal.init()初始化弹框
* Modal.show()显示弹框
* Modal.detet()销毁弹框
* 
* 用法:先要页面上有个带着id属性的空div元素，然后往构造函数Modal()中传入需要进行配置的参数‘对象’，示例：
* var demo = new Modal({width: 200,height: 100,padding: 10})
* 或者 var parma = {width: 200,height: 100,padding: 10}；var demo = new Modal(parma);
* 调用对象方法示例：
* demo.init()
*/
function Modal(option){
	this.option = option;
}

Modal.prototype.init = function(){
	var bg = $("<div></div>"),
		box = $("<div></div>"),
		box_inner = $("<div></div>"),
		close = $("<div></div>"),
		that = this;
	
	bg.attr('class','shade-bg');
	box.attr('class','shade-box');
	box_inner.attr('class','box-inner');
	close.attr('class','close');

	box_inner.append(close);
	box.append(box_inner);
	$(this.option.id).append(bg);
	$(this.option.id).append(box);

	this.config(this.option);

	close.on('click',function(){
		that.delet();
		that = null;
	});

	return this;
}

Modal.prototype.show = function(){
	$(this.option.id).show();
	$(this.option.id).find('.shade-bg').show();
	$(this.option.id).find('.shade-box').show();

}
Modal.prototype.delet = function(){
	$(this.option.id).empty();
}
Modal.prototype.config = function(){
	$(this.option.id).find('.shade-box').css({
		'backgroundColor': this.option.boxColor || 'fff',
		'width': this.option.width || 300,
		'height': this.option.height || 200,
		'marginLeft': -this.option.width/2 ,
		'marginTop': -this.option.height/2,
		'fontColor': this.option.fontColor || '#666',
		'padding': this.option.padding || 0,
		'border' : this.option.border || '1px solid #999'
	});
	$(this.option.id).find('.box-inner').css({
		'backgroundColor': this.option.innerColor || '#fff',
	})
	var html = $(this.option.html);
	$(this.option.id).find('.box-inner').append(html);
}

