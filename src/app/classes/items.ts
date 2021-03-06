import { CustomDate } from './custom-date';

export class Item {
    id: number;
    routeId: string;
    stopId: string;
    vendorId: string;
    driverId: string;
    itemClaimIds: string[];
    itemClaims: any[];
    route: any;
    deliverDate?: CustomDate;
    teamReferenceId: string;
    routeName: string;
    vendorName: string;
    stopStatus: string;
    stopNo: number;
    discount: number;
    extPrice: number;
    itemPkgId: string;
    itemDesc1: string;
    itemDesc2: string;
    itemSku: string;
    itemType: string;
    cubes: number;
    orderQty: number;
    lastOrderQty: number;
    exceptionQty: number;
    packageItemSeq: number;
    price: number;
    adjustedPrice: number;
    ratedValue: number;
    saleType: string;
    itemStatus: string;
    isActive: boolean;
    serialNumber: string;
    sR: string;
    refusalReason: any;
    // pictures: any[];
    notes: string;
    isPickupOnly: boolean;
    isEvenExchange: boolean;
    stopMileage: number;
    stopRate: number;
    stopMileagePremium: number;
    updatedBy: string;
    updateDate: CustomDate;
    accountName: string;
    isBillable: boolean;
}