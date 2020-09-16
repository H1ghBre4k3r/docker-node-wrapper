import Modem, { DialOptions } from "docker-modem";
import { ContainerListingInformation } from "../api/containerListingInformation";

export class ContainerModule {
    private modem: Modem;
    public constructor(modem: Modem) {
        this.modem = modem;
    }

    /**
     * Get all running containers.
     */
    public async list(): Promise<ContainerListingInformation[]> {
        const options: DialOptions = {
            path: "/containers/json?",
            method: "GET",
            statusCodes: {
                200: true,
                400: "bad parameter",
                500: "server error"
            }
        };
        return new Promise((resolve, reject) => {
            this.modem.dial<ContainerListingInformation[]>(
                options,
                (err: Error, data: ContainerListingInformation[]) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(data);
                }
            );
        });
    }

    /**
     * Get all containers (even stopped ones).
     */
    public async listAll(): Promise<ContainerListingInformation[]> {
        const options: DialOptions = {
            path: "/containers/json?",
            method: "GET",
            statusCodes: {
                200: true,
                400: "bad parameter",
                500: "server error"
            },
            options: {
                all: true
            }
        };
        return new Promise((resolve, reject) => {
            this.modem.dial<ContainerListingInformation[]>(
                options,
                (err: Error, data: ContainerListingInformation[]) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(data);
                }
            );
        });
    }
}
