import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  listFaceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Arthur',
      description: 'Pic of me!',
      createdDate: new Date(),
      snaps: 175,
      imageUrl: 'https://i.kym-cdn.com/entries/icons/original/000/016/546/hidethepainharold.jpg',
      location: 'Internet'
    },
    {
      id: 2,
      title: 'Epic Handshake',
      description: 'Epic handshake I had with my friend Simon lol',
      createdDate: new Date(),
      snaps: 94,
      imageUrl: 'https://i.kym-cdn.com/entries/icons/original/000/012/468/shakeee.jpg'
    },
    {
      id: 3,
      title: 'DO NOT SMOKE!',
      description: 'Do not smoke or you will be like this :',
      createdDate: new Date(),
      snaps: 292,
      imageUrl: 'https://img.lemde.fr/2021/02/08/0/0/976/549/664/0/75/0/a7bbde7_66329960-musk3.jpg'
    }
  ]

  public getAllFaceSnaps(): FaceSnap[] {
    return this.listFaceSnaps;
  }

  public getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.listFaceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  public snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
