export default interface Store {
	token: string | null;
	profile: {
		userName: string | null;
		email: string | null;
		id: string | null;
		seasons: {
			[seasonID: string]: string;
		};
	};
	seasons: {
		[seasonID: string]: {
			// Todo update this to correct structure of activites
			activites: any;
			createdDate: string | Date;
			id: string | null;
			name: string | null;
			phase: string | number;
			seasonStart: string | Date;
			users: {
				[userID: string]: string;
			};
			voteStart: Date | string;
		};
	};
	error: string | null;
}
