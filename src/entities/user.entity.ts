import Collection from "../models/collection.model";

export default class UserEntity {
	_id!: string;
	email!: string;
	name!: string;
	image?: any;
	bio?: string;
	favorites?: string[];
	flagged?: string[];
	known?: string[];
	refresh?: string[];
	collections?: Collection[];
	venues?: string[];
	friends?: string[];
	following?: string[];
}
