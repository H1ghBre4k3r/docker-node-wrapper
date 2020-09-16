import Modem, { HostOptions, SocketOptions } from "docker-modem";
import { ContainerModule } from "./container/containerModule";

export class DockerWrapper {
    private modem: Modem;

    private _containerModule: ContainerModule;

    public constructor(opts?: HostOptions | SocketOptions) {
        this.modem = new Modem(opts);
        this._containerModule = new ContainerModule(this.modem);
    }

    public get Containers(): ContainerModule {
        return this._containerModule;
    }
}
