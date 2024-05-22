import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { NavLink } from "react-router-dom";
export default function Cards01() {
  return (
    <div className="h-[168px] w-full bg-white rounded-xl  shadow-lg flex flex-col">
      <div className="h-1/2 w-full pl-[14px] pr-[20px] pt-[15px] flex flex-col gap-1">
        <div className="text-[rgb(102,102,102)] ">Total Balance</div>
        <div className="flex flex-row gap-1">
          <div className="text-[20px] font-black">₹5.18</div>
          <div className="p-1">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAOVBMVEUAAACjo6OgoKCjo6OhoaGjo6Ofn5+np6ejo6Ojo6OlpaWioqKkpKSjo6Ojo6Ojo6Ojo6OkpKSjo6PuE3LfAAAAEnRSTlMAf0C/H98QIM/vMGCfj29Qr1+b1SuLAAAA4UlEQVQ4y+3Sy3aEIBBF0eJR8hCx+/7/x8amdCVCZYUMetZnpm4BBfr05hbblX+lEX2pBJ1uUDKTK1ojUGgyA2z/sHmcbVetG4YNDHBQaEXqxjykbj3gbzceSIdUbUcN8ARyQlz+oBUwHqC7dTF8000ehISNXpQsflh5T6gBrHw8L0JpBR6nlDmE7ucOZ7CnRsVe9AVio4GvAexCjcqFPaG8Vw6a27RXQrvEAg7sh189VNHa7/sFWP24AEY5F0qri3VcVwo0GYNnbU7g56xlgIvp0mfyBWNMer4W11Xp03v7Att9D7xKb3uAAAAAAElFTkSuQmCC"
              alt="refresh"
              className="h-[22px] w-[22px]"
            />
          </div>
        </div>
      </div>
      <div className="border-[1px] mx-7 shadow-xl bg-slate-100" />
      <div className="h-1/2 w-full py-[16px] px-[10px]">
        <div className="w-full h-full flex flex-row">
          <div className="w-1/3 flex flex-col justify-center items-center">
            <NavLink to="/wallet">
              <div className="flex justify-center">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAeFBMVEUAAAD/oKD/oKD/oaH/n5//n5//oKD/oaH/n5//n5//oKD/n5//oKD/n5/+i4v/n5/+iIj/n5//oaH/n5//n5//oaH/n5/5WVn9hYX6a2v7c3P////8i4v7eXn6YmL5XV3+lpb+j4/+9fX+6ur+m5v8trb7f3/6Zmaz6OagAAAAFnRSTlMA359fIBBvP++vjzC/f9/Pv49/YFBPchRNZwAAANhJREFUSMft1bkSgjAUheEEw467XoQQdvX931CLFBdDSFJYMMNfn2+YYQlkyz7/mnjaLqmyv0WwmMem+wBMUR/vWQTGzhgkYBG+RGYDdgjQtYCxEiXq5AVsCYyiySc9AGiqB20tdxgAxUDdqwBCHSjzebDTgCp3AfgCtSWQu6rnTzsgNwPn/OUC+i+orIB8ZsD5kFuBQo6EqP90W+HtCrrG7dXAAoPI1wJoixkQLH5AnShwhywOydoOgZ/urkclQyAEczHB7cEUZcRJUOUfxLwj1RYHPtly6gOS6nMolZZu1QAAAABJRU5ErkJggg=="
                  alt="wallet"
                  className="w-[32px] h-[32px]"
                />
              </div>
              <div className="text-[15px]">Wallet</div>
            </NavLink>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center">
            <NavLink to="/deposite">
              <div className="flex justify-center">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAjVBMVEUAAAD3eAD3dwD4dgD5dwD2dgD4dgD0bwD4eQD4dwD4dwD4dwD7dwD5dwD2dgD5dgD4dwDtcQD5dgD2eAD5dwD4dwD4dwD4dwD4dwD4eAD3eAD4dgD/dAD3dQDqbgD5dwD3dgD4dwD5eQD5dwD5dwD4dwD5dwD6dgD4dwD4dgD6eQD7dgD4eAD2dAD4dwAMGSgcAAAALnRSTlMAZsyZxU2mEkxrQN9yn3OMcg19OfPqv6+UWTImHxoI0YZULfiE2HlfuI9fQnM4FNyjywAAAtFJREFUaN7s1u9ymkAUBfDdPYBDKAERkdZ/WFF0THn/x2sTSy5JENiF64eMvxc4c+7smVnx8PDw8O1N7chJlEqcQP6airuZykTV4Oda3IVdxRLsJoKdVA32sf9b8HpWDbzyn20hGEnVJC7feP5KMLFVk235zn8SHNaJajIva7yCoXbQUpjE/or30PS0vhj5jS9Uo33ZwF/dvTBFMxeOyxu8grXwobztPGEsPC9beCuGwrQl3mRH52mR7cBrb/4ojS3VnYW5pR3ipFmYPAlDsxCArzS3RBLD2AyvFi1b4qi8DnFlaW+JqEj7gV1Q0d8SmQO23ksOUUn0C5M9AFej9CRDxTfZEnEA5BODXNMtUTAla+XCMtsSBVOyRu6wLVEw8o3oFoIYPi2C/0LRyUaNY7glmlPl0nlo1J0GFvZQ6fwYRCCmWyIW0PPYM9QtzLZEFiBL0SZDnTWwcIyacHDhQ9nXAehZ+QfG2xJdurvyBF+elnXynU+sHraHuLo02fS89Mlyghdp7JimKT649Lt0cHTlUMeg361BqOswL7XWZ3HDEpU0kmS81uuu787ZlSNy30vPRLMdrnJXjivC1U40c/GGzjx2ctH6qHPJIMer57bgQLIIuoJTV7Io0o7gSDIJ24MzySZqDXYlGzdtCc4ko+PfdukYx2EQCsLwmwI50ESsKyAgmWJX8v0PuE2aFOPYjqeJ+C7wa6TZCHsIeR6+Q+pOw7+Q+qFhDynPwh5inoT/ILaS8AKxhYQdXn1P+DbCI/w0wiM8wiO8OxxAqMMzxAIJd4jNJFwg1kl4gtiDhBvEJiMStIwJkLoZ0yE1GxMhVY1yEErGZQgF4xqEJiPIr8Wf1t+r2qYMkWDbWoJEivbGBIlib3UIZNshi7tcFne5mnChtdtuMeAyLtoR0eESqdhRMayfr612yiMsOG11vdl5rZYc3HJkfEouzCXaMAzDt/kHbN7wdhAVLO0AAAAASUVORK5CYII="
                  alt="wallet"
                  className="w-[32px] h-[32px]"
                />
              </div>
              <div className="text-[15px]">Deposite</div>
            </NavLink>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center">
            <NavLink to="/withdraw">
              <div className="flex justify-center">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAXVBMVEUAAABcpf9cpv9bpv9cpv9cpv9dpv9cpv9bpf9dpv9ZpP9cpv9cp/9cpf9bpP9Yp/9cp/9ZoP9cpv9cpv9cp/9Ypf9Ynf9Onf9cpv9cpf9bpf9dpv9fpP9ao/9cpv/+vZV2AAAAHnRSTlMAZoxfTb9Z3yY/H/DFeXAazxGWj4I5DQbZvJ9wRkB5MVsiAAABcklEQVRo3u3T3XKCMBCG4Q0/ASMoiIBa3fu/zHac2nQwESzZHHS+5zAHvGwWCAAAAOBJm3Z5wasUeZe19J5NzoHk6TvZhgMqlqZNzoFdzKJxtxxcsaFZKYtIV3RFyxsW8/K2TcFitob8Liwoj77g+csuWFQReeD5kXN2kd+yYXEtuWQsLiWXjsV1cVds5TF/pvkfiiNAGOEHhP9ZWEWAMMIPCCOMMMIII4zwD4QRRhhhhBH2ho+JZU93iUsdLnzY8i/bw3e2YbdqFyhc88TxflyxT7M+7C6c7eu47cKETzxxUl8S9kvChM9PS7yvmP3qv4X19JN2P7dhn0rN0eSSLfyqK3ZrPtScjFx69SSxjva0Tlxs1q8nl1KJM+QyKnEjeZYsLCO3vRJWkodWojRR/JHtwPG3fCO/IVVi9EBWzMtu6aVSWYILli/b7qxWq+D0nhYYbiqwbKBlSh00u6flzDVy1hpNn+mVm7325UgAAAAAU5/94mxKVD2pxAAAAABJRU5ErkJggg=="
                  alt="wallet"
                  className="w-[32px] h-[32px]"
                />
              </div>
              <div className="text-[15px]">Withdraw</div>
            </NavLink>
          </div>
          {/* <div className="w-1/4 flex flex-col justify-center items-center">
            <NavLink to="/vip">
              <div>
                <img
                  src="https://www.9987up.club/assets/png/VipIcon-3c72b1cc.png"
                  alt="wallet"
                  className="w-[32px] h-[32px]"
                />
              </div>
              <div className="text-[15px]">VIP</div>
            </NavLink>
          </div> */}
        </div>
      </div>
    </div>
  );
}
