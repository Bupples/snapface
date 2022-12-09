import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, switchMap } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private httpClient: HttpClient) {}

  public getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.httpClient.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  public getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.httpClient.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  public snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.httpClient.put<FaceSnap>(
        `http://localhost:3000/facesnaps/${faceSnapId}`,
        updatedFaceSnap)
      )
    );
  }

  public addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): Observable<FaceSnap> {
    return this.getAllFaceSnaps().pipe(
      map(faceSnapList => [...faceSnapList].sort((a: FaceSnap, b: FaceSnap) => a.id - b.id)),
      map(sortedFaceSnapList => sortedFaceSnapList[sortedFaceSnapList.length - 1]),
      map(previousFaceSnap => ({
        ...formValue,
      createdDate: new Date(),
      snaps: 0,
      id: previousFaceSnap.id + 1
      })),
      switchMap(newFaceSnap => this.httpClient.post<FaceSnap>('http://localhost:3000/facesnaps', newFaceSnap))
    );
  }
}
