import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
	selector: 'app-events-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class EventsListComponent implements OnInit {
	eventos!: Evento[];
	urlEventos: string = "http://localhost:3200/eventos";

	// chamamos no constructor da lista o serviço de webservice que criamos para realizar a chamada da URL de get eventos criada com a função do tipo Observable
	constructor(
		private webservice: WebserviceService,
		private http: HttpClient
	) { }

	// vamos executar a função no ngOnInit que é a inicialização do componente
	ngOnInit(): void {
		// após chamar a função de getEventos criada como Observable, precisamos nos inscrever no Observable pois ele (o Observable) precisa dessa inscrição para retornar o que estamos aguardando
		// E então usamos uma arrow function como callback para pegar a resposta da URL (no caso a lista de eventos) e populamos a variável/propriedade eventos do componente com a resposta da requisição
		this.webservice.getEventos().subscribe(resposta => this.eventos = resposta);

		// forma alternativa sem criar arquivo de service para webservice
		// this.http.get<Evento[]>(this.urlEventos).subscribe(resposta => this.eventos = resposta);
	}

}