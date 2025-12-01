import * as storage from "firebase/storage";
import * as firebase from "firebase/app";
import { Route } from "./Route";
import { FirebaseOptions } from "firebase/app";
import saveAs from "file-saver";

interface FetchImageRequest {
	filename: string;
	id: string;
}

interface PostImageRequest {
	imageFile: File;
	id: string;
}

export class ImageAPI extends Route {
	private readonly m_Firestore;

	public constructor() {
		super();

		const firebaseConfig: FirebaseOptions = {
			apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
			authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
			projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
			storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
			messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
			appId: process.env.REACT_APP_FIREBASE_APP_ID,
		};

		const app = firebase.initializeApp(firebaseConfig);

		this.m_Firestore = storage.getStorage(app);
	}

	public async Download(req: FetchImageRequest) {
		try {
          	const imageRef = storage.ref(this.m_Firestore, `images/${req.filename}-${req.id}`); // Replace with your image path
          	const blob = await storage.getBlob(imageRef);

			saveAs(blob, req.filename)
        } catch (error) {
          	console.error('Error downloading image:', error);
          	alert('Failed to download image.');
        }
	}

	public override async Post(req: PostImageRequest) {
		const imageRef = storage.ref(
			this.m_Firestore,
			`images/${req.imageFile.name}-${req.id}`
		);

		await storage.uploadBytes(imageRef, req.imageFile);

		return await storage.getDownloadURL(imageRef);
	}

	////////////////////////////////////////////////////////////
	//														  //
	//					Getters and Setters                   //
	//														  //
	////////////////////////////////////////////////////////////

	public override get Route(): string {
		return "image";
	}
}