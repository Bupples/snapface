import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  listFaceSnaps$!: Observable<FaceSnap[]>;
  private destroy$!: Subject<boolean>

  constructor(private faceSnapsService: FaceSnapsService) {}

  public ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.listFaceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
