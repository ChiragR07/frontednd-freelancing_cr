import React from "react";
import { NavLink } from "react-router-dom";

export default function Cards03() {
  return (
    <div>
      {" "}
      <div className="w-full grid grid-cols-2 gap-3">
        <div className="">
          <div className="w-full p-[9px] border rounded-md bg-white shadow-md z-10 ">
            <NavLink to="/BetRecords">
              <div className="h-[58px] flex">
                <div className="h-full flex justify-center items-center">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAtFBMVEUAAABcp/9cp/9epv9dn/9cpv9cpv9cpf9cp/9bpv9cpv9dp/9cpP9bp/9eqP9apf9Sn/9dpv9Jmv9eqP9ElP9cp/9cpv////82if+t0v/B3f+Zx//W6P/m8f/N4f/0+f9Il/9Ckv9wsf9Rnv9Qmf9Lmf/r9P/a6f+00/86jf+Duf9ao/+jzf9Xo/8+j/+/2v+32P+Pwv9mrP9op//g7v+31/98tv91rv9mq//N4/+jzP+Nvf89OsrBAAAAFnRSTlMAf78gEN/vz29fr58/n28wz49vT09A/ixTGwAAAdVJREFUWMPtlttygjAQhkHAQ221xwSlCSogKJ6t1bbv/16Ngc7KTIBlai+c+t3JzH4uu3802pXzYnbuaoXcdIyicr1OymnnKowGQWHlGaC+zGAq61sETVspsAgeVQsvpAJNhaBZRXCnEOhVBDe/FdSKBdOPVxUOVjCiOfSQgl6eYIwUzPIEb0jBZkyVuOsSAbB2VBzKhljKfxKMVn0FK3wSXarm8+KTSB30EGc9FdMLysEfCuZeMAi8UsHBgcmt4XE8mNgJw/viJGbW2Ccpng0s2gY+SO9EMrAlX+H2KCCWgY7yFOoFjC6P70CEAXGY4AAEstqPmHjCWBjDn7wyiTs4xLuRnP5E1ruZ19IrrHGYtk9Dl7qcRwER1E28QDYQUxoJCU9mIGiiBLDBrRhoRlDDCWCElIb+qaCOE8AOOZWEkZ8IiIkVDBOB+PoEFhCJge8gZboUWxCaFXSAn8FPEvmQUbfiDLyMwF5SuoGbEioHGYHP0ny3cNc8GMKWMXZy2bG0DLdFglhGMaIp3IMGgBopm4LPORdbiPaTOeQQ1wJsUiZxoL70P2AMTri3F+JjA+oxi4DfBMEiJnVdU9KyChWejHRAGrqp5dF90gt5fL7tmtqVs/MN94DbsbuNvhYAAAAASUVORK5CYII="
                    alt="Game History"
                    className="h-[42px] w-[42px]"
                  />
                </div>
                <div className="  flex flex-col items-baseline justify-center">
                  <div className="w-full text-[14px] text-nowrap">
                    Game History
                  </div>
                  <div className=" text-[rgb(102,102,102)] text-[12px] text-nowrap">
                    My game history
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="">
          <div className="p-[9px] border rounded-md bg-white shadow-md ">
            <NavLink to="/TransAction">
              <div className="h-[58px] flex">
                <div className=" flex justify-center items-center">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAArlBMVEUAAABK461L46xE36RL4q1L465K4q1O4a9K4a1K46xK4qxK4a1K46xL4qxK4q1L4axK4q1K361M4q0T0IE53J8u2JUg2I5L4qz///8GzHal8NW79N+O7MvS9+rg+e4X0oTp/PUo15Al0odi5rdE4KY33J0l04ch1YwLznph5rYQ0H6w8tqa79CC5bpW5LEx2Zcs2JT0/vqD68Z46cHk+vHg+e+P7cvH9uWa7tBt57tTDyxnAAAAF3RSTlMAf78Qn28/H3+vj99g79/PTzDv779vT8FjD08AAAGZSURBVFjD7ZZpb4JAEIaVS8Gj2msArYoCWrxQe/7/P1aWjQTbYXcItompzxcTk3kyzLwLW7tyXlRdU4SYekNU3rwFOVqhonEDJFpFBlZPM6hofRvIaKigC3SwFgwogY4IdIBqz1CHEphVBYpYcHh/wnijCmZ2AS5R4BYJJkTBqkjwShRsJnj9bk8QcPZDjI1siFL+k2C2HCAs6Unc2Tiri0+iPSQP8cPFOFxQDn5R4AdbbxtIBZuhm7HPVXuRw5nfi5N4ssbB8e9g4WTcNUsE6RNSPCfHGDSVHOXDaX24DpkATOph4gcgdo6M7FHIBGDRjvPyOZ3fIidIDEwA/RJrnDsZU2bY8jDQBayBcGRnvKR9qWRB4CSsf3zl2mRBzHvPTTbtwEIEshFkOWCYVQXK3wliB92CVXULvRI5QLeg0q95XpbBkL8QkLueAQL8KDOkAhblzvc7twLCKXADF0Q+dls1QITHDesp+/EAAHknWXIDJ8LqGU2QzIEz9qFl1FDaXRARjJN1LuKOwstR+r26kIdHo1G7cn6+AEIy4spd9Gx2AAAAAElFTkSuQmCC"
                    alt="transaction"
                    className="h-[42px] w-[42px]"
                  />
                </div>
                <div className="flex flex-col items-baseline justify-center ">
                  <div className=" text-[14px] text-nowrap flex justify-center">
                    Transaction
                  </div>
                  <div className=" text-[rgb(102,102,102)] text-[12px] text-nowrap">
                    My transaction history
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        {/* <div className="">
          <div className="w-full p-[9px] border rounded-md bg-white shadow-md z-10">
            <NavLink to="/BetRecords">
              <div className="h-[58px] flex">
                <div className="h-full flex justify-center items-center">
                  <img
                    src="https://www.9987up.club/assets/png/rechargeHistory-195824c7.png"
                    alt="Game History"
                    className="h-[42px] w-[42px]"
                  />
                </div>
                <div className="flex flex-col items-baseline justify-center">
                  <div className="text-[14px] text-nowrap">Deposite</div>
                  <div className=" text-[rgb(102,102,102)] text-[12px] text-nowrap">
                    My deposit history
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="">
          <div className="p-[9px]  border rounded-md bg-white shadow-md z-10">
            <NavLink to="/BetRecords">
              <div className="h-[58px] flex">
                <div className="h-full flex justify-center items-center ">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAbFBMVEUAAAD/iRv/ihz/hhr/iBr/iRv/iB3/iRv/ihv/iRz/hR3/iRz/iRr/hRT/iR3/ihv/iRr/hxn/iRv/iRv/gCr/iR3/iRz/hxv/iRz/iRz/iBz/ihz/ixv/hRH/iRz/ih3/iBv/iRv/kiT/iR3fckNCAAAAI3RSTlMAZp8mH1/gb1iPEH9NDPU+MBmxeQbvz0Dsxb6oORLZv5aCBztI/qIAAAHtSURBVFjD7djJkoIwEIDhJISwyiqiuIxOv/87ToFV0wQZk9A5zMH/ZFn6VbNEAfbp02+yDMvKn5Z0MNXkPrg0AUxJ+ngKtELPHop0D0W6RxfRM4t0D0W6hyLd08s9e9BJuqc3ePKw0rMHiWcPlAM4gE2ppbaX+VlYdC7rvYVW5dyhONgZuJC7Vr0Z8xrzDcV/DhnwjQXrnuTcq7gLt4Ph2lbHnFBu3IH0jY5pYLz0ak6sXoAlFbwYtpi6zXtObq8vOjp4pR8Tvdqw7IhnYvBPwOgufrvQwfYGs0Iy+CjAK9gW4Bc8gV8wAs9g4hsUvsGHBRjdT8cCQB1EawajwgRGzewjJzPZGMDHEbQa44jqLShg2WASW/UGjOC1EzclbsUfoOxgpfP2ny8FaxXtVjBcUgqmbi6gZNjXgpNMHmAs2vafInXvMF6MV8578Ypgrnkind582g4gw5Lnl/tejB6bKmHsaO/lDBsdUONgGWT6nY89WC3BZnrZs6lKgSu4W4IDw8oOnhXWXv+67rKV01I5D4gHAMXIsJzNV4dpNxczwO6WXvzNtBJAce4dN95L4VJpkgFmNc4ejog5D3j5Zi+lhzWwteHy2vqZgDBiYV7hdCaxiwJD9c78HBP7koycFMj1zEtpnwkhkjBlnxz6AfNNngUB9TYwAAAAAElFTkSuQmCC"
                    alt="transaction"
                    className="h-[42px] w-[42px]"
                  />
                </div>
                <div className="flex flex-col items-baseline justify-center">
                  <div className="text-[14px] text-nowrap">Withdraw</div>
                  <div className=" text-[rgb(102,102,102)] text-[12px] text-nowrap">
                    My withdraw history
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div> */}
      </div>
    </div>
  );
}
