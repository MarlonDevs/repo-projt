import { Schema, model } from 'mongoose';
import { NotaInterface } from '../interfaces/NotaInterface';

interface notaDocument extends NotaInterface, Document {}

const videoSchema = new Schema(
	{
		/*description: {
			type: String,
			required: true,
		},*/
		brand: {
			type: String,
			required: true,
		},
		model: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
		assetNumber: {
			type: String,
			required: true,
		},
		serial: {
			type: String,
			required: true,
		},
		user: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
		toJSON: {
			virtuals: true,
			transform: function (doc, ret: any) {
				delete ret._id;
			},
		},
		toObject: {
			virtuals: true,
			transform: function (doc, ret: any) {
				delete ret._id;
			},
		},
	}
);

const NotaModel = model<notaDocument>('notas', videoSchema);

export default NotaModel;
