import { IPCBuilder } from './PCBuilder';

export class Manufacturer {
    public static manufacture(builder: IPCBuilder): string {
        builder.setMotherboard(`Asus ROG Strix Z390-I Gaming`);
        builder.setCpu(`INTEL Core i9-9900K`);
        builder.setSsd(`Samsung SSD 970 EVO Plus 500GB`);

        return builder.assemblerPC();
    }
}
