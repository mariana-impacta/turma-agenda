import { Component } from '@angular/core';
import { TopicosService } from 'src/app/services/topicos.service';

@Component({
	selector: 'app-exemplo',
	templateUrl: './app-exemplo.component.html',
	styleUrls: ['./app-exemplo.component.scss']
})
export class AppExemplo {
	exibe: boolean = false;

	message: string = 'Aprendendo Angular!'

	/*topicos: string[] = [
		'Conceitos NodeJS',
		'MVC com Express.js',
		'Webservice - criação e consumo',
		'MongoDB',
		'Angular'
	]*/
	topicos!: string[];

	constructor(topicosService: TopicosService) {
		this.topicos = topicosService.getTopicos();
	}
}
