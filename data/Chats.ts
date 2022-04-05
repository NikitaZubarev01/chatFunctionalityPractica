export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Vadim',
		imageUri: 'https://n1s1.hsmedia.ru/a1/ec/ec/a1ececc48afd3c0c498fdbd47ba45dbe/728x542_1_f5b22481fc08917ff7584d523f52ed21@1000x745_0xac120003_3944844451633381523.jpeg',
	}, {
		id: 'u2',
		name: 'Lukas',
		imageUri: 'https://images.app.goo.gl/hNK6ULkPweasdy7b6',
	}],
	messages: [{
		id: 'm1',
		content: 'How are you, Lukas!',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm2',
		content: 'I am good, good',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Lukas',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Lukas',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for the stream now.',
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm5',
		content: 'How is your uni going?',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm6',
		content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Lukas',
		},
	}, {
		id: 'm7',
		content: 'Big Data is really interesting. Cannot wait to go through all the material.',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}]
}