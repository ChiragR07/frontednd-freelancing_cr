import React from "react";
export default function Wallet() {
  return (
    <div className="bg-[rgb(247,248,255)]">
      <div className=" flex gap-24 h-[42px]  w-full bg-gradient-to-r from-orange-400 to-orange-500 p-3">
        <div className="w-full flex justify-center items-center text-white text-2xl ">
          Wallet
        </div>
      </div>
      <div className="w-full  bg-gradient-to-r from-orange-400 to-orange-500">
        <div className="w-full flex flex-col items-center pb-4">
          <div className="w-fit">
            <img
              src="https://www.9987up.club/assets/png/wallets-55b46543.png"
              alt="walletProfile"
              className="h-[42px] w-[42px]"
            />{" "}
          </div>
          <div className="text-[25px] text-white w-fit align-baseline flex justify-center mt-1">
            ₹5.18
          </div>
          <div className="text-[13px] w-fit text-white align-baseline ml-2">
            Total balance
          </div>
          <div className="w-[280px] h-[49px] flex justify-evenly mt-[10px]">
            <div className="w-1/2 flex flex-col items-center ">
              <div className="text-white text-[21px]">1500</div>
              <div className="text-white align-baseline text-xs">
                Total amount
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <div className="text-white text-[21px]">2100</div>
              <div className="text-white align-baseline text-xs">
                Total deposite amount
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative  w-full px-[16px]">
        <div className="absolute bg-white h-[350px] w-[370px] pt-[15px] pb-[10px] px-[7px] -top-[13px] rounded-xl drop-shadow-lg flex flex-col gap-4">
          <div className="flex justify-evenly">
            <div className=" relative w-1/2 flex flex-col">
              <div className="absolute w-full h-full flex justify-center items-center ">
                <div className="mb-[50px] ml-[25px] text-bold ">100%</div>
              </div>
              <div className="flex h-[110px]">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <circle
                    cx="100"
                    cy="53"
                    r="50"
                    stroke="orange"
                    strokeWidth="1"
                    fill="orange"
                  />
                  <circle
                    cx="100"
                    cy="53"
                    r="40"
                    stroke="orange"
                    strokeWidth="1"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex justify-center">₹5.18</div>
              <div className="flex justify-center  text-[rgb(102,102,102)]">
                Main wallet
              </div>
            </div>
            <div className="relative w-1/2 flex flex-col">
              <div className="absolute w-full h-full flex justify-center items-center ">
                <div className="mb-[50px] ml-[25px] text-bold ">0%</div>
              </div>
              <div className="flex h-[110px]">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <circle
                    cx="100"
                    cy="53"
                    r="50"
                    stroke="#e5e7eb"
                    strokeWidth=""
                    fill="#e5e7eb"
                  />
                  <circle
                    cx="100"
                    cy="53"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth=""
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex justify-center">₹0.00</div>
              <div className="flex justify-center text-[rgb(102,102,102)]">
                3rd party wallet
              </div>
            </div>
          </div>
          <div className="w-full  h-[36px] flex justify-center items-center ">
            <button className="w-full rounded-xl text-white px-6 py-1 bg-[rgb(235,138,31)] h-[35px] border-b-2 border-red-500 ">
              Main wallet transfor
            </button>
          </div>
          <div className="w-full flex justify-between text-[12px]">
            <div className="w-1/4 flex flex-col gap-2  items-center">
              <div className="h-[52px] w-[52px] bg-white rounded-lg shadow flex justify-center items-center">
                <img
                  className="h-[34px] flex r"
                  alt="Deposite"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAjVBMVEUAAAD3eAD3dwD4dgD5dwD2dgD4dgD0bwD4eQD4dwD4dwD4dwD7dwD5dwD2dgD5dgD4dwDtcQD5dgD2eAD5dwD4dwD4dwD4dwD4dwD4eAD3eAD4dgD/dAD3dQDqbgD5dwD3dgD4dwD5eQD5dwD5dwD4dwD5dwD6dgD4dwD4dgD6eQD7dgD4eAD2dAD4dwAMGSgcAAAALnRSTlMAZsyZxU2mEkxrQN9yn3OMcg19OfPqv6+UWTImHxoI0YZULfiE2HlfuI9fQnM4FNyjywAAAtFJREFUaN7s1u9ymkAUBfDdPYBDKAERkdZ/WFF0THn/x2sTSy5JENiF64eMvxc4c+7smVnx8PDw8O1N7chJlEqcQP6airuZykTV4Oda3IVdxRLsJoKdVA32sf9b8HpWDbzyn20hGEnVJC7feP5KMLFVk235zn8SHNaJajIva7yCoXbQUpjE/or30PS0vhj5jS9Uo33ZwF/dvTBFMxeOyxu8grXwobztPGEsPC9beCuGwrQl3mRH52mR7cBrb/4ojS3VnYW5pR3ipFmYPAlDsxCArzS3RBLD2AyvFi1b4qi8DnFlaW+JqEj7gV1Q0d8SmQO23ksOUUn0C5M9AFej9CRDxTfZEnEA5BODXNMtUTAla+XCMtsSBVOyRu6wLVEw8o3oFoIYPi2C/0LRyUaNY7glmlPl0nlo1J0GFvZQ6fwYRCCmWyIW0PPYM9QtzLZEFiBL0SZDnTWwcIyacHDhQ9nXAehZ+QfG2xJdurvyBF+elnXynU+sHraHuLo02fS89Mlyghdp7JimKT649Lt0cHTlUMeg361BqOswL7XWZ3HDEpU0kmS81uuu787ZlSNy30vPRLMdrnJXjivC1U40c/GGzjx2ctH6qHPJIMer57bgQLIIuoJTV7Io0o7gSDIJ24MzySZqDXYlGzdtCc4ko+PfdukYx2EQCsLwmwI50ESsKyAgmWJX8v0PuE2aFOPYjqeJ+C7wa6TZCHsIeR6+Q+pOw7+Q+qFhDynPwh5inoT/ILaS8AKxhYQdXn1P+DbCI/w0wiM8wiO8OxxAqMMzxAIJd4jNJFwg1kl4gtiDhBvEJiMStIwJkLoZ0yE1GxMhVY1yEErGZQgF4xqEJiPIr8Wf1t+r2qYMkWDbWoJEivbGBIlib3UIZNshi7tcFne5mnChtdtuMeAyLtoR0eESqdhRMayfr612yiMsOG11vdl5rZYc3HJkfEouzCXaMAzDt/kHbN7wdhAVLO0AAAAASUVORK5CYII="
                />
              </div>
              <div className="text-[rgb(102,102,102)] w-fit">Deposite</div>
            </div>
            <div className="w-1/4 flex flex-col gap-2  items-center">
              <div className="h-[52px] w-[52px] bg-white rounded-lg shadow flex justify-center items-center">
                <img
                  className="h-[34px] flex r"
                  alt="Deposite"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAXVBMVEUAAABcpf9cpv9bpv9cpv9cpv9dpv9cpv9bpf9dpv9ZpP9cpv9cp/9cpf9bpP9Yp/9cp/9ZoP9cpv9cpv9cp/9Ypf9Ynf9Onf9cpv9cpf9bpf9dpv9fpP9ao/9cpv/+vZV2AAAAHnRSTlMAZoxfTb9Z3yY/H/DFeXAazxGWj4I5DQbZvJ9wRkB5MVsiAAABcklEQVRo3u3T3XKCMBCG4Q0/ASMoiIBa3fu/zHac2nQwESzZHHS+5zAHvGwWCAAAAOBJm3Z5wasUeZe19J5NzoHk6TvZhgMqlqZNzoFdzKJxtxxcsaFZKYtIV3RFyxsW8/K2TcFitob8Liwoj77g+csuWFQReeD5kXN2kd+yYXEtuWQsLiWXjsV1cVds5TF/pvkfiiNAGOEHhP9ZWEWAMMIPCCOMMMIII4zwD4QRRhhhhBH2ho+JZU93iUsdLnzY8i/bw3e2YbdqFyhc88TxflyxT7M+7C6c7eu47cKETzxxUl8S9kvChM9PS7yvmP3qv4X19JN2P7dhn0rN0eSSLfyqK3ZrPtScjFx69SSxjva0Tlxs1q8nl1KJM+QyKnEjeZYsLCO3vRJWkodWojRR/JHtwPG3fCO/IVVi9EBWzMtu6aVSWYILli/b7qxWq+D0nhYYbiqwbKBlSh00u6flzDVy1hpNn+mVm7325UgAAAAAU5/94mxKVD2pxAAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="text-[rgb(102,102,102)] w-fit">Withdraw</div>
            </div>
            <div className="w-1/4 flex flex-col gap-2  items-center">
              <div className="h-[52px] w-[52px] bg-white rounded-lg shadow flex justify-center items-center">
                <img
                  className="h-[34px] flex r"
                  alt="Deposite"
                  src="https://www.9987up.club/assets/png/rechargeHistory-195824c7.png"
                />
              </div>
              <div className="text-[rgb(102,102,102)] w-fit text-wrap pl-4">
                Deposite history
              </div>
            </div>
            <div className="w-1/4 flex flex-col gap-2  items-center">
              <div className="h-[52px] w-[52px] bg-white rounded-lg shadow flex justify-center items-center">
                <img
                  className="h-[34px] flex "
                  alt="Deposite"
                  src="https://www.9987up.club/assets/png/withdrawHistory2-840eb5de.png"
                />
              </div>
              <div className="text-[rgb(102,102,102)]  text-wrap pl-4">
                Withdrawal history
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[368px] mb-[90px] w-full px-[16px]">
        <div className="grid grid-cols-3 gap-3">
          <div className=" h-[85px] w-[100px] px-[7px] flex flex-col gap-2 justify-center  bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg rounded-lg">
            <div className="text-white flex justify-center">5.18</div>
            <div className="text-white flex justify-center">Lottery</div>
          </div>
          <div
            className="h-[85px] w-[100px] px-[7px] flex flex-col gap-1 justify-center bg-white bg-cover bg-no-repeat shadow-lg rounded-lg"
            style={{
              backgroundImage:
                'url("https://www.9987up.club/assets/png/TB-b6321468.png")',
            }}
          >
            <div className="text-black flex justify-center">0.00</div>
            <div className="text-[rgb(136,136,136)] flex justify-center">
              TB_Chess
            </div>
          </div>
          <div
            className="h-[85px] w-[100px] px-[7px] flex flex-col gap-1 justify-center bg-white bg-cover bg-no-repeat shadow-lg rounded-lg"
            style={{
              backgroundImage:
                'url("https://www.9987up.club/assets/png/TB-b6321468.png")',
            }}
          >
            <div className="text-black flex justify-center">0.00</div>
            <div className="text-[rgb(136,136,136)] flex justify-center">
              TB_Chess
            </div>
          </div>
          <div
            className="h-[85px] w-[100px] px-[7px] flex flex-col gap-1 justify-center bg-white bg-cover bg-no-repeat shadow-lg rounded-lg"
            style={{
              backgroundImage:
                'url("https://www.9987up.club/assets/png/TB-b6321468.png")',
            }}
          >
            <div className="text-black flex justify-center">0.00</div>
            <div className="text-[rgb(136,136,136)] flex justify-center">
              TB_Chess
            </div>
          </div>
          <div
            className="h-[85px] w-[100px] px-[7px] flex flex-col gap-1 justify-center bg-white bg-cover bg-no-repeat shadow-lg rounded-lg"
            style={{
              backgroundImage:
                'url("https://www.9987up.club/assets/png/TB-b6321468.png")',
            }}
          >
            <div className="text-black flex justify-center">0.00</div>
            <div className="text-[rgb(136,136,136)] flex justify-center">
              TB_Chess
            </div>
          </div>
          <div
            className="h-[85px] w-[100px] px-[7px] flex flex-col gap-1 justify-center bg-white bg-cover bg-no-repeat shadow-lg rounded-lg"
            style={{
              backgroundImage:
                'url("https://www.9987up.club/assets/png/TB-b6321468.png")',
            }}
          >
            <div className="text-black flex justify-center">0.00</div>
            <div className="text-[rgb(136,136,136)] flex justify-center">
              TB_Chess
            </div>
          </div>
          <div
            className="h-[85px] w-[100px] px-[7px] flex flex-col gap-1 justify-center bg-white bg-cover bg-no-repeat shadow-lg rounded-lg"
            style={{
              backgroundImage:
                'url("https://www.9987up.club/assets/png/TB-b6321468.png")',
            }}
          >
            <div className="text-black flex justify-center">0.00</div>
            <div className="text-[rgb(136,136,136)] flex justify-center">
              TB_Chess
            </div>
          </div>
          <div
            className="h-[85px] w-[100px] px-[7px] flex flex-col gap-1 justify-center bg-white bg-cover bg-no-repeat shadow-lg rounded-lg"
            style={{
              backgroundImage:
                'url("https://www.9987up.club/assets/png/TB-b6321468.png")',
            }}
          >
            <div className="text-black flex justify-center">0.00</div>
            <div className="text-[rgb(136,136,136)] flex justify-center">
              TB_Chess
            </div>
          </div>
          <div
            className="h-[85px] w-[100px] px-[7px] flex flex-col gap-1 justify-center bg-white bg-cover bg-no-repeat shadow-lg rounded-lg"
            style={{
              backgroundImage:
                'url("https://www.9987up.club/assets/png/TB-b6321468.png")',
            }}
          >
            <div className="text-black flex justify-center">0.00</div>
            <div className="text-[rgb(136,136,136)] flex justify-center">
              TB_Chess
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//
//pb-[36px] w-[353px]
