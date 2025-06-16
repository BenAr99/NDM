import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

export interface Routes {
  'uuid': string;
  'address': string;
  'mask': string;
  'gateway': string;
  'interface': string,
}

@Injectable({
  providedIn: 'root'
})
export class DataRoutesService {
  private routes = [
    {
      uuid: '12b7b307-78e3-4e92-8c0f-86ae9001fc7c',
      address: '192.168.10.0/24',
      mask: '255.255.255.0',
      gateway: '192.168.1.2',
      interface: 'Домашняя сеть',
    },
    {
      uuid: 'cba0ed8d-f519-45a1-bb29-62df5c2751b5',
      address: '10.0.0.0/8',
      mask: '255.0.0.0',
      gateway: '192.168.1.10',
      interface: 'Домашняя сеть',
    },
    {
      uuid: 'e3a25c01-b63f-45e5-a460-0e4532bb8eae',
      address: '172.16.0.0/12',
      mask: '255.240.0.0',
      gateway: '191.168.2.1',
      interface: 'Гостевая сеть',
    },
    {
      uuid: '0e6d8e42-2e84-4294-b802-b723527943d0',
      address: '100.64.0.0/10',
      mask: '255.192.0.0',
      gateway: '100.64.1.1',
      interface: 'Гостевая сеть',
    },
    {
      uuid: '5abef9a1-8a65-498e-9d86-3600d4645d07',
      address: '198.51.100.0/24',
      mask: '255.255.255.0',
      gateway: '198.51.100.1',
      interface: 'Подключение Ethernet',
    },
    {
      uuid: '43d8e139-8e4b-4e93-a7c3-1127b90b92de',
      address: '203.0.113.0/24',
      mask: '255.255.255.0',
      gateway: '203.0.113.1',
      interface: 'Подключение Ethernet',
    },
    {
      uuid: '6502a182-2db4-4356-b5bb-f60d86503ef8',
      address: '0.0.0.0/0',
      mask: '0.0.0.0',
      gateway: '10.0.0.1',
      interface: 'Домашняя сеть',
    },
    {
      uuid: 'b1476ef4-114f-465e-9885-c847fdd768e6',
      address: '192.0.2.0/24',
      mask: '255.255.255.0',
      gateway: '192.0.2.1',
      interface: 'Подключение Ethernet',
    },
    {
      uuid: '4b843ed4-0d93-47c6-8b79-7682bb598174',
      address: '198.18.0.0/15',
      mask: '255.254.0.0',
      gateway: '198.18.0.1',
      interface: 'Подключение Ethernet',
    },
    {
      uuid: 'eb3a8b34-1a3e-486d-88e2-78bdaaf40734',
      address: '11.0.0.0/8',
      mask: '255.0.0.0',
      gateway: '11.0.0.1',
      interface: 'Домашняя сеть',
    },
  ];
  getRoutes(): Observable<Routes[]> {
    return of(this.routes)
  }
}
