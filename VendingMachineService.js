const Initializer = {
	vendingMachine(){
		VendingMachine.prototype.setChange = function(change){_change = change}
		VendingMachine.prototype.setItemNo = function(itemNo){_itemNo = itemNo}
		VendingMachine.prototype.setItemNoList = function(itemNoList){_itemNoList = itemNoList}
		VendingMachine.prototype.setItemList = function(itemList){_itemList = itemList}
		VendingMachine.prototype.getChange = function(){return _change}
		VendingMachine.prototype.getItemNo = function(){return _itemNo}
		VendingMachine.prototype.getItemNoList = function(){return _itemNoList}
		VendingMachine.prototype.getItemList = function(){return _itemList}
	}
}

function VendingMachineService(){
		const vm = new VendingMachine()


	this.insertcoin = function(coin){
		Initializer.vendingMachine()
		vm.setChange(coin)
		alert(`${vm.getChange()}원 받았습니다.`)
	}
	this.selectItem = function(itemNo, quantity){
		alert(`${itemNo}선택!`)
		let price, change = 0
		switch(itemNo){
			case '1':  price = 800*quantity 
				break
			case '2':  price = 600*quantity
				break
			case '3':  price = 1000*quantity
				break
			case '4':  price = 500*quantity
				break
		}
		alert(`가격은 ${price}입니다.`)
		change = vm.getChange()-price
		vm.setChange(change)
	}
	this.returnChange = function(){
		alert(`거스름돈은 ${vm.getChange()}입니다.`)
	}
	this.handleOrder = function(quantity, price, itemName){}
}