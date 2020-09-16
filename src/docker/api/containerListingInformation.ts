/* eslint-disable jsdoc/check-indentation */

/**
 * All information you get from listing containers.
 */
export interface ContainerListingInformation {
    /**
     * Id of this container.
     */
    id: string;
    /**
     * The names that this container has been given.
     */
    Names: string[];
    /**
     * The name of the image used when creating this container.
     */
    Image: string;
    /**
     * The ID of the imgae that this container was created from.
     */
    ImageID: string;
    /**
     * Command to run when starting the container.
     */
    Command: string;
    /**
     * When the container was created.
     */
    Created: number;
    /**
     * The ports exposed by this container.
     */
    Ports: Port[];
    /**
     * The size of files that have been created or changed by this container;
     */
    SizeRw: number;
    /**
     * The total size of all the files in this container.
     */
    SizeRootFs: number;
    /**
     * User-defined key/value metadata.
     */
    Labels: Labels;
    /**
     * The state of this container.
     */
    State: string;
    /**
     * Additional human-readable status of this container.
     */
    Status: string;
    HostConfig: HostConfig;
    /**
     * A summary of the container's network settings.
     */
    NetworkSettings: NetworkSettings;
    Mounts: Mount[];
}

interface Port {
    IP: string;
    PrivatePort: number;
    PublicPort?: number;
    Type: "tcp" | "udp" | "sctp";
}

interface Labels {
    [key: string]: string;
}

interface HostConfig {
    NetworkMode: string;
}

interface NetworkSettings {
    Networks: Networks;
}

interface Networks {
    [key: string]: EndpointSettings;
}

interface EndpointSettings {
    /**
     * EndpointIPAMConfig represents an endpoint's IPAM configuration.
     */
    IPAMConfig?: EndpointIPAMConfig;
    Links: string[];
    Aliases: string[];
    /**
     * Unique ID of the network.
     */
    NetworkID: string;
    /**
     * Unique ID for the service endpoint in a Sandbox.
     */
    EndpointID: string;
    /**
     * Gateway address for this network.
     */
    Gateway: string;
    /**
     * IPv4 address.
     */
    IPAddress: string;
    /**
     * Mask length of the IPv4 address.
     */
    IPPrefixLen: number;
    /**
     * IPv6 gateway address.
     */
    IPv6Gateway: string;
    /**
     * Global IPv6 address.
     */
    GlobalIPv6Address: string;
    /**
     * Mask length of the global IPv6 address.
     */
    GlobalIPv6PrefixLen: number;
    /**
     * MAC address for the endpoint on this network.
     */
    MacAddress: string;
    /**
     * DriverOpts is a mapping of driver options and values.
     * These options are passed directly to the driver and are driver specific.
     */
    DriverOpts: DriverOpts;
}

interface EndpointIPAMConfig {
    IPv4Adress: string;
    IPv6Adress: string;
    LinkLocalIPs: string[];
}

interface DriverOpts {
    [key: string]: string;
}

interface Mount {
    /**
     * Container path.
     */
    Target: string;
    /**
     * Mount source (e.g. a volume name, a host path).
     */
    Source: string;
    /**
     * The mount type. Available types:
     *
     *  `bind`:     Mounts a file or directory from the host into the container. Must exist prior to creating the container.
     *
     *  `volume`:   Creates a volume with the given name and options (or uses a pre-existing volume with the same name and options).
     *              These are **no**t removed when the container is removed.
     *
     *  `tmpfs`:    Create a tmpfs with the given options. The mount source cannot be specified for tmpfs.
     *
     *  `npipe`:    Mounts a named pipe from the host into the container. Must exist prior to creating the container.
     */
    Type: "bind" | "volume" | "tmpfs" | "npipe";
    /**
     * Whether the mount should be read-only.
     */
    ReadOnly: boolean;
    /**
     * The consistency requirement for the mount: `default`, `consistent`, `cached`, or `delegated`.
     */
    Consistency: "default" | "consistent" | "cached" | "delegated";
    /**
     * Optional configuration for the `bind` type.
     */
    BindOptions?: BindOptions;
    /**
     * Optional configuration for the `volume` type.
     */
    VolumeOptions?: VolumeOptions;
    /**
     * Optional configuration for the `tmpfs` type.
     */
    TmpfsOptions?: TmpfsOptions;
}

interface BindOptions {
    /**
     * A propagation mode with the value `[r]private`, `[r]shared`, or `[r]slave`.
     */
    Propagation: "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave";
    /**
     * Disable recursive bind mount.
     *
     * Default: `false`
     */
    NonRecursive: boolean;
}

interface VolumeOptions {
    /**
     * Populate volume with data from the target.
     *
     * Default: `false`
     */
    NoCopy: boolean;
    /**
     * User-defined key/value metadata.
     */
    Labels: Labels;
    /**
     * Map of driver specific options.
     */
    DriverConfig: DriverConfig;
}

interface DriverConfig {
    /**
     * Name of the driver to use to create the volume.
     */
    Name: string;
    /**
     * key/value map of driver specific options.
     */
    Options: {
        [key: string]: string;
    };
}

interface TmpfsOptions {
    /**
     * the size for the tmpfs mount in bytes.
     */
    SizeBytes: number;
    /**
     * The permission mode for the tmpfs mount in an integer.
     */
    Mode: number;
}
