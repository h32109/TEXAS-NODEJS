		function InputText(){
			this.make = function(id, text){
				const input = document.createElement('input')
				input.setAttribute('type', text)
				input.setAttribute('id', id)
				return input
			}
		}
		function Div(){
			this.make = function(id , text, val ){
				const div = document.createElement('div')
				div.setAttribute('style', 'border : 1px solid black ;text-align : center;margin:0 auto')
				div.setAttribute('id', id)
				div.setAttribute('value', val)
				div.textContent = text
				return div
			}
		}
		function InputButton(){
			this.make = function(id, type, value){
				const input = document.createElement('input')
				input.setAttribute('type', type)
				input.setAttribute('value', value)
				input.setAttribute('id', id)
				return input
			}
		}
				function Br(){
			this.make = function(){
				const br = document.createElement('br')
				return br
			}
		}

		function Factory(){
			this.select = function(type){
			switch(type){
				case 'inputText' : return new InputText()
				case 'inputButton' : return new InputButton()
				case 'br' : return new Br()
				case 'div' : return new Div()
			}
		}
	}
		const compo = {
			br(){
				const br = document.createElement('br')
				return br
			},

			inputText(id, text){
				const input = document.createElement('input')
				input.setAttribute('type', text)
				input.setAttribute('id', id)
				return input
			},
			inputButton(id, type, value){
				const input = document.createElement('input')
				input.setAttribute('type', type)
				input.setAttribute('value', value)
				input.setAttribute('id', id)
				return input
			},
			div(id , text, val){
				const div = document.createElement('div')
				div.setAttribute('style', 'border : 1px solid black ;text-align : center;margin:0 auto')
				div.setAttribute('id', id)
				div.setAttribute('value', val)
				div.textContent = text
				return div
			}
		}
