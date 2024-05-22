import React from "react";

export default function LogOut() {
  return (
    <div>
      {" "}
      <div className="mb-[150px] w-full mt-[50px] px-[6px] py-[5px] rounded-md border ">
        <button className="w-full h-[23px] flex justify-center">
          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAQlBMVEUAAABlZWVmZmZlZWVmZmZmZmZmZmZkZGRmZmZlZWVra2tmZmZmZmZnZ2dmZmZgYGBmZmZmZmZlZWViYmJlZWVmZmYJxgEqAAAAFXRSTlMA799/v18fEI9vHz+fL68gT88wL2Dza9ruAAACiklEQVRo3u1YS2KrMAxE8hdMEmjr+1/1vbhpZxEcG4l0xSzB1li/EWY4ceKv4Yjd8E5wzjS8E/k/hgE4CU6CBkZi1yZwxKPI/Oeac6Y2Aeec2QuOn+/gNgGVhWan+WDLNuoJEZeldpcTt+9Nc+hJsp9z3hmmz+I2pZ4qghN02WffTv1l6lcw9NqP+/rA9DPcCFXRSQAG35tfs7+TTWemV9jvJwCDHYD6KiPToojcVZHua65SsSvdmVozN/MkJQhle2gFKMnlOjVk6YYgCudBfF2rMwIkJAh0l7CXDjjdRHP3Ff6VA9qRyYhyxQExAVygUH3FmqGPCTdW22TUEKDUbTVCk54g1Ow4MIsJEIn6cz3BiJM+JefjCAKfNy8RH3gsIWgfdYFOawmum/0UoYNyApiKm7TLMQRfm8GwmARyAqRz3RSpSUuAMuLNrUFLgF4mwVbNKjxslzi/lcAxOSEBIQcKQE8FVQSIqmiFgGiRIKdPAqIFZK0uIHoYmKoIiBIWsvY0D+Rojy46oIxwVMFMBiQzGc/1sJV6DFnfy/i+qjGbY4rUVmNHegKudmwgZTPj63qqfw3wEQ7MVRXUV6pDiitXHAqqEoIDW/CkVbwIBwT3ZEB2T8ZVXRUgbh/BikUCAVL8MWkE2HSdwojtr81lnguD0D53TBRPIgaToRENXEiQh4i/jr0Mq99Rnxb2uxi4xLNbWRfaYx+ZznOXE+Gakd9uhscm0zZvqCy1QVAVJU6+aV6o8p4fFHM1tik+zNuLbHhwfnDE9Hz2FH9ek3hIeUP5BzaO6VLyOE3LGO3vGzKaEeVHzhXAvBLuWrdu03AEwjJv+MHzVxiOg1/MbFcqltnO4+KHEydO9OIfEq1JSVrjUXcAAAAASUVORK5CYII="
              alt="Logout"
              className="h-[22px] w-[22px]"
            />
          </div>
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
}
