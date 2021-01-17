$(function(){
	
	$('.J_Cart').submit(function(){
		if($('.J_SelectGoods:checked').length == 0) {
			layer.open({content: lang.select_empty_by_cart, time: 3});
		}
		else {
			$(this).submit();
		}
		return false;
	});
	
	
	// 编辑修改商品数量
	$('.J_Edit').click(function(){
		var text = $(this).text();
		var store_id = $(this).attr('store_id');
		if(text == lang.edit)
		{
			$(this).text(lang.finished);
		}
		else
		{
			$(this).text(lang.edit);
			$(".J_Store-"+store_id+" ul li").each(function(){
				var v = $(this).find("input.J_GetQuantity").val();
				$(this).find("[ectype='quantity']").text(v);	
			})
		}
		
		$(".J_Store-"+store_id+" ul li").find('.hidden-part .del').toggle();
	})
	
	
	// 页面加载完就执行（只在购物车页面需要）
	if($('#page-cart').length > 0) {
		
		// 设置新的总金额
		showCartAmountBySelected();
	}
	
	// 全选
	$('.J_SelectAll').click(function()
	{ 
		$('.J_SelectAll').prop("checked", $(this).prop('checked'));
		$('.J_SelectStoreAll').prop("checked", $(this).prop('checked'));
		$('.J_GoodsEach').find('.J_SelectGoods').prop('checked', $(this).prop('checked'));
		
		if($('.J_SelectAll').prop("checked") == true) {
			$(this).parent().find('b').addClass('checked');
			
			$('.J_SelectStoreAll').parent().find('b').addClass('checked');
			$('.J_GoodsEach .selectfill b').addClass('checked');
		} 
		else 
		{
			$(this).parent().find('b').removeClass('checked');
			$('.J_SelectStoreAll').parent().find('b').removeClass('checked');
			$('.J_GoodsEach .selectfill b').removeClass('checked');
		}

		// 设置新的总金额
		showCartAmountBySelected();
	});
	
	// 店铺全选
	$('.J_SelectStoreAll').click(function() {
		$('.J_Store-' + $(this).val()).find('.J_SelectGoods').prop('checked', $(this).prop('checked'));
		
		if($(this).prop('checked') == true)
		{
			$(this).parent().find('b').addClass('checked');
			$('.J_Store-' + $(this).val()).find('.J_SelectGoods').next('b').addClass('checked');
			
			// 全选判断
			if($('.J_SelectStoreAll').not('input:checked').length == 0) {
				$('.J_SelectAll').prop("checked", true);
				$('.J_SelectAll').parent().find('b').addClass('checked');
			}
		}
		else
		{
			$(this).parent().find('b').removeClass('checked');
			$('.J_Store-' + $(this).val()).find('.J_SelectGoods').next('b').removeClass('checked');
			
			// 全选判断
			if($('.J_SelectStoreAll').not('input:checked').length != 0) {
				$('.J_SelectAll').prop("checked", false);
				$('.J_SelectAll').parent().find('b').removeClass('checked');
			}
		}
		
		// 设置新的总金额
		showCartAmountBySelected();
	});
	
	// 点击某个商品，改变全选和店铺全选的选中状态
	$('.J_SelectGoods').click(function(){
		$(this).prop("checked", $(this).prop("checked"));
		$(this).parent().find('b').toggleClass('checked');
		
		// 店铺全选判断
		if($('.J_Store-' + $(this).attr('store_id')).find('.J_SelectGoods').not('input:checked').length == 0) {
			$('.J_Store-' + $(this).attr('store_id')).find('.J_SelectStoreAll').prop('checked', true);
			$('.J_Store-' + $(this).attr('store_id')).find('.J_SelectStoreAll').parent().find('b').addClass('checked');
		} else {
			$('.J_Store-' + $(this).attr('store_id')).find('.J_SelectStoreAll').prop('checked', false);
			$('.J_Store-' + $(this).attr('store_id')).find('.J_SelectStoreAll').parent().find('b').removeClass('checked');
		}
		
		// 全选判断
		if($('.J_SelectGoods').not("input:checked").length == 0) {
			$('.J_SelectAll').prop("checked", true);
			$('.J_SelectAll').parent().find('b').addClass('checked');
		}
		else
		{
			$('.J_SelectAll').prop("checked", false);
			$('.J_SelectAll').parent().find('b').removeClass('checked');
		}
		
		// 设置新的总金额
		showCartAmountBySelected();
	});
	
});

// 显示满折满减的差额
function showFullPerferPlusBySelected()
{
	var allDecrease = 0;
	var cartAllAmount = parseFloat($('.J_CartAllAmount').html().replace(/[^\d\.-]/g, ""));
	
	$('.J_CartAllAmount').removeClass('small-line');
	$('.J_SelectStoreAll').each(function(index, element) {
		var o = $(this).parents('.J_Store-'+$(this).attr('id'));
		if(o.find('.J_FullPerferAmount').length > 0) {
			var fullPerferAmount = parseFloat(o.find('.J_FullPerferAmount').attr('data-value'));
			var selectStoreAmount = 0;
			o.find('.J_GoodsEach').each(function(index, element) {
				if($(this).find('.J_SelectGoods').prop('checked') == true) {
					selectStoreAmount += parseFloat($(this).find('.J_GetSubtotal').attr('price'));
				}
			});
			if(selectStoreAmount < fullPerferAmount) {
				var plus = number_format((fullPerferAmount - selectStoreAmount).toFixed(2), 2);
				o.find('.J_FullPerferPlus').html(',还差'+plus+'元');
			} else {
				o.find('.J_FullPerferPlus').html('');
				
				// 在订单总价后显示节省的满优惠金额
				var fullPerferDetail = {type: o.find('.J_FullPerferAmount').attr('perfer-type'), value: o.find('.J_FullPerferAmount').attr('perfer-value')};
				if(fullPerferDetail.type == 'discount' && (fullPerferDetail.value >= 0 && fullPerferDetail.vaue <=10)) {
					decrease = (selectStoreAmount * (10 - fullPerferDetail.value) * 0.1).toFixed(2);
				}
				else if(fullPerferDetail.type == 'decrease' && (fullPerferDetail.value <= selectStoreAmount)) {
					decrease = fullPerferDetail.value;
				}
				allDecrease += parseFloat(decrease);
				
				$('.J_CartAllAmount').addClass('small-line');
				$('.J_CartAllAmount').html(price_format((cartAllAmount-allDecrease).toFixed(2)) + "<s class='fs12 block'>已优惠"+price_format(allDecrease, 2)+"</s>");
			}
		}
	});
}

function showCartAmountBySelected()
{
	var cartAllAmount = 0;
	$('.J_SelectGoods').each(function(){
		if($(this).prop('checked') == true) {
			// 某个规格商品的小计
			cartAllAmount += parseFloat($(this).parents('.J_GoodsEach').find('.J_GetSubtotal').attr('price'));	
		}
	});
	$('.J_CartAllAmount').html(price_format(cartAllAmount.toFixed(2)));
	
	showFullPerferPlusBySelected();
}

function drop_cart_item(store_id, product_id)
{
	var tr = $('.J_CartItem-' + product_id);
	layer.open({content:lang.drop_confirm, btn:[lang.confirm,lang.cancel],
		yes:function(index){
			$.getJSON(url(['cart/delete', {product_id: product_id}]), function(result){
				if(result.done){
					
					//删除成功
					if(result.retval.kinds == 0){
						window.location.reload();    //刷新
					}
					else
					{
						if(tr.parents('.J_Store-'+store_id).find('.J_GoodsEach').length == 1) {
							tr.parents('.J_Store-'+store_id).remove();
						}
						tr.remove();
						
						//$('.J_C_T_GoodsKinds').html(result.retval.kinds);
						//$('.J_C_T_Amount').html(price_format(result.retval.amount));
					}
					
					// 设置新的总金额
					showCartAmountBySelected();
				}
			});
			layer.close(index);
		},
		no: function(index) {
			layer.close(index);
		}
	});
}

function change_quantity(store_id, product_id, spec_id){
    // 暂存为局部变量，否则如果用户输入过快有可能造成前后值不一致的问题
	var obj = $('#input_item_' + product_id);
	var _v = obj.val();
	if(_v < 1 || isNaN(_v)) {
		layer.open({content:lang.invalid_quantity});
		obj.val(obj.attr('orig'));
		return false;
	}
    //$.getJSON(url(['cart/update', {product_id: product_id, spec_id: spec_id, quantity: _v}]), function(result){
	$.getJSON(url(['cart/update', {spec_id: spec_id, quantity: _v}]), function(result){
        if(result.done){
			
			// 说明商品有变更，通过刷新页面来加载
			if(result.retval.alertMsg != undefined && result.retval.alertMsg != null) {
				layer.open({content:result.retval.alertMsg, time: 3, end: function(){
					window.location.reload();
				}});
			}
			else 
			{
				//更新成功
				obj.attr('changed', _v);
				
				var changeItem = result.retval.items[product_id];
				
				$('.J_ItemPrice-' + product_id).html(price_format(changeItem.price));				
				//$('.J_ItemQuantity-' + product_id).html(changeItem.quantity);
				//$('.J_ItemSubtotal-' + product_id).html(price_format(changeItem.subtotal));
				$('.J_ItemSubtotal-' + product_id).attr('price', parseFloat(changeItem.subtotal).toFixed(2));
				//$('.J_C_T_GoodsKinds').html(result.retval.kinds);
				//$('.J_C_T_Amount').html(price_format(result.retval.amount));
				
				// 设置新的总金额
				showCartAmountBySelected();
			}
        }
        else {
            //更新失败
            layer.open({content:result.msg});
            obj.val(obj.attr('changed'));
        }
    });
}

function decrease_quantity(product_id){
    var obj = $('#input_item_' + product_id);
    var orig = Number(obj.val());
    if(orig > 1){
        obj.val(orig - 1);
        obj.keyup();
    }
}
function add_quantity(product_id){
    var obj = $('#input_item_' + product_id);
    var orig = Number(obj.val());
    obj.val(orig + 1);
    obj.keyup();
}

/* 将商品加入到购物车（或立即购买）可在任何处调用此方法实现加入购物车功能 */
function add_to_cart(spec_id, quantity, toPay)
{
	if(toPay) {
		$.getJSON(url(['cart/add']), {spec_id:spec_id, quantity:quantity, selected: 1}, function(data) {
			if (data.done) {
				location.href = url(['order/normal']);
			} else {
				layer.open({content:data.msg, time: 2});
			}
		});
	}
	else
	{
		$.getJSON(url(['cart/add']), {spec_id:spec_id, quantity:quantity}, function(data) {
			if (data.done) {
				layer.open({content:lang.add_to_cart_ok, className:'layer-popup',time: 1, end: function() {
					$('.popClosed').click();
				}});
			} else {
       			layer.open({content:data.msg, time: 2});
    		}
		});
	}
}
