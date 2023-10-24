import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class verkeersinformatie implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'verkeersinformatie',
		name: 'verkeersinformatie',
		icon: 'file:nasapics.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from verkeersinformatie Api',
		defaults: {
			name: 'verkeersinformatie',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'verkeersinformatieApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.rwsverkeersinfo.nl/',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},

		properties: [
		// Resources and operations will go here
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Verkeers Informatie',
						value: 'verkeersinformatie',
					},
				],
				default: 'verkeersinformatie',
			},
			// Operations will go here
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [
							'verkeersinformatie',
						],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						action: 'Get the verkeersinformatie',
						description: 'Get the verkeersinformatie',
						routing: {
							request: {
								method: 'GET',
								url: '/api/traffic',
							},
						},
					},
				],
				default: 'get',
			},

			// Optional/additional fields will go here
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				default: {},
				placeholder: 'Add Field',
				displayOptions: {
					show: {
						resource: [
							'verkeersinformatie',
						],
						operation: [
							'get',
						],
					},
				},
			}

		]

	};
}
