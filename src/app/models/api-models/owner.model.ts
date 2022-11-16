import { Address } from "./address.model";
import { BuildingGroup } from "./buildinggroup.model";

export interface Owner {
    id: number,
    companyName: string,    
    address: Address,
    buildingGroup: BuildingGroup
}