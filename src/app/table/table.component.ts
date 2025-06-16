import {AfterViewInit, Component, DestroyRef, OnInit, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {DataRoutesService, Routes} from '../data-routes.service';
import {AsyncPipe} from '@angular/common';
import {MatSort, MatSortHeader} from '@angular/material/sort';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatHeaderCellDef,
    MatCellDef,
    AsyncPipe,
    MatSortHeader,
    MatSort
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<Routes>();
  titleColumns = [
    'address',
    'gateway',
    'interface'
  ]

  @ViewChild(MatSort) sort?: MatSort

  constructor(private dataRoutesService: DataRoutesService, private destroyRef: DestroyRef) {
  }

  ngOnInit(): void {
    this.dataRoutesService.getRoutes().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => {
      this.dataSource.data = value
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sortingDataAccessor = (item: Routes, property: string): string | number => {
      if (property === 'address' || property === 'gateway') {
        return this.convertTo32Bit(item[property]);
      }
        return item[property as keyof Routes]
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  convertTo32Bit(item: string): number {
    let octets = item.split('/')[0].split('.').map(value => Number(value));
    return ((octets[0] << 24) >>> 0) + (octets[1] << 16) + (octets[2] << 8) + octets[3];
  }
}
