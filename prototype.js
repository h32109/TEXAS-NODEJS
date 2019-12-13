		function Animal(){let _name}
		function Human(){Animal.apply(this, arguments)}
		function SuperHero(){Human.apply(this, arguments)}
