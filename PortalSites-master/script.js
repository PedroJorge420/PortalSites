function parallax(){
			// Declarando as var.
			var layer_1 = document.getElementById('p1');
			var layer_2 = document.getElementById('p2');
			var layer_3 = document.getElementById('p3');
			var layer_4 = document.getElementById('p4');
			// Aplicando a posição
			layer_1.style.top = -(window.pageYOffset / 10) + 'px';
			layer_2.style.top = -(window.pageYOffset / 5) + 'px';
			layer_3.style.top = -(window.pageYOffset / 3) + 'px';
			layer_4.style.top = -(window.pageYOffset / 1) + 'px';
		}
		window.addEventListener("scroll", parallax, false);