var lang = 'pt';
arrayLangPt = {
	'pagina_inicial' : 'Página Inicial',
	'produtos'		 : 'Produtos',
	'servicos'		 : 'Serviços',
	'quem_somos'	 : 'Quem Somos',
	'fale_conosco'	 : 'Fale Conosco',
	'pra_voce'		 : 'Pra Você',
	'card1'			 : 'O GetInShape vem para revolucionar a área de saúde e estética, trazendo uma plataforma feita para usuário que se dedicam ao extremo!',
	'conheca_nos'	 : 'Conheça-nos',
	'card2'          : 'Apresentamos ao mercado os melhores produtos para a sua rotina de exercícios e alimentação diários!',
	'veja_mais'      : 'Veja Mais',
	'card3'          : 'Está com dúvida? Entre em contato para que possamos te ajudar!',
	'contate_nos'    : 'Contate-nos',
	'direitos'       : 'Copyright 2017. Todos os Diretos Reservados',
	'card_produtos'  : 'A maior e melhor forma de você acompanhar seus treinos, dietas, consultas e desempenho na WEB! Veja uma de nossas telas!',
	'clique_aqui'    : 'Clique Aqui!',
	'quem_somos' : 'Quem somos',
	'quem_somos_card' : 'O projeto GetInShape foi iniciado através da disciplina de Projeto de Desenvolvimento de Sistema Web, do curso de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) 2017.2',
	'quem_somos_card2' : 'Os fundadores do projeto são:',
	'projeto' : 'Projeto',
	'visite' : 'Visite',
	'fala_conosco_card' : 'Preencha o formulário abaixo:',
	'nome' : 'Nome',
	'email' : 'Email',
	'mensagem' : 'Mensagem',
	'enviar' : 'Enviar',
	'nutricionista' : 'Nutricionista'
}

arrayLangEn = {
	'pagina_inicial' : 'Home Page',
	'produtos'		 : 'Products',
	'servicos'		 : 'Services',
	'quem_somos'	 : 'About Us',
	'fale_conosco'	 : 'Talk To Us',
	'pra_voce'		 : 'For You',
	'card1'			 : 'GetInShape comes to revolutionize the area of ​​health and aesthetics, bringing a platform made for users who are dedicated to the extreme!',
	'conheca_nos'	 : 'Know Us',
	'card2'          : 'We present to the market the best products for your daily exercise and feeding routine!',
	'veja_mais'      : 'See More',
	'card3'          : 'Are you in doubt? Contact us so we can help you!',
	'contate_nos'    : 'Contact Us',
	'direitos'       : 'Copyright 2017. All rights reserved',
	'card_produtos'  : 'The biggest and best way to follow your training, diets, consultations and performance on the WEB! See one of our screens! All rights reserved',
	'clique_aqui'    : 'Click Here!',
	'quem_somos' : 'Quem somos',
	'quem_somos_card' : 'The GetInShape project was started through the Web System Development Project discipline of the Systems Analysis and Development Technology (TADS) course 2017.2',
	'quem_somos_card2' : 'The founders of the project are:',
	'projeto' : 'Project',
	'visite' : 'Visit',
	'fala_conosco_card' : 'Fill out the form below:',
	'nome' : 'Name',
	'email' : 'Email',
	'mensagem' : 'Message',
	'enviar' : 'Send',
	'nutricionista' : 'Nutritionist'
}


$(document).ready(function(){
	
	var href = document.URL.split('=');

	if (href.length > 1) {
		
		lang = href[1];
		traduzir(lang);
	}
});

$('.lang').on('click', function(){

	lang = $(this).data('lang');
	traduzir(lang);

	
	
});

function traduzir(l){

	$('a').each(function(){
		href = $(this).attr('href').split('?');
		$(this).attr('href', href[0] + '?lang='+l);
	})

	if (l == 'en') {
		convert(arrayLangEn);
	}else{
		convert(arrayLangPt);
	}					
}

function convert(array){
	
	$.map(array,function(val, key){

		$('.'+key).text(val);
	});
}