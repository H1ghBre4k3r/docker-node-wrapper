/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { DockerWrapper } from "./docker/dockerWrapper";

const wrapper = new DockerWrapper();
void (async () => {
    console.log(await wrapper.Containers.list());
    console.log(await wrapper.Containers.listAll());
})();
