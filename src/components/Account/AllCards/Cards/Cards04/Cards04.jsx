import React from "react";
import { MdNavigateNext } from "react-icons/md";

export default function Cards04() {
  return (
    <div>
      {/* <div className="bg-white px-[10px] py-[5px] rounded-md  shadow-md border">
        <div className="h-[223px] w-full grid grid-cols-1 gap-1 divide-y ">
          <div className="p-[13.33px]">
            <div className="h-[27px] w-full flex  ">
              <div className="w-1/2 flex justify-center items-center ">
                <div className=" w-1/2 flex justify-center items-center">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANrSURBVHgB7Zo/TBRBFMa/t5wQCBjjVRiNWnhUJhQ2UlFZaYmtJiYao7GhsNCS1k5DNLG4VktoNdpARWJiR4NGgzGRSMScinCPN7O3wB1vj9t/d7fH/JLluNndmfnmzXvz5nYBh8PhcDgcnYIQE36FfqxgACcwjHbyH5t0H2uISSTB/Byj2MJ59OGsfB1BJ/FE9LY9PkYZgJYEizWHsY5JVHEK3YiHVbH8O7qH34ddeqhgfoESGJflGEA3w9iUmbdAt7Hc7LKmgnkW5+SKK8gTnli6iWgv7ISdxiSWzRvbmOBn4YE0VLCEgUvodGCKA8nq4dm+q6iCa9YtIa9I3+2yqaBbeL1Lo3EUvmNMK9YF/5O1Nu8UUNSKvZCL25s9ZUEBJ7ViXbDXA4K3cFwr1gVHSTIIQ3KMS01FZIVpw5MlMkobpAetApJgOlClaam8KINUAXFZPj8gTdibkHqnpN4h+WbaeGTbiomHJDDOWLE+0iG6K8c1pIbU5fENv+5aG4QLSEAyC8OmcBXsdchMpavy57SMRjm2JSgYvIZcgCUdYnxFApJauALmGduResbB9DiWX5t7zL2aWPATIP5e2K8+OWviVzPyWe+7VOu4CWitYvzVv6d+oIgXULVtJBJrSENwYOlZ+Weu4UwEvz7gr0Hlc7IPL0tPYweq/ST14XoY82IN8TGq73jg1yQZbrXBSv4UvgkcyN0rdoPKzfe3UUlXsMEuS/xFBE43TE3j1+NStrzr8/5yVlLqSMVfNdIX7BP49ZSommg4V2r6s4Px1228TmsKN5KVYNSWpLIIWGtxbTZxYF7ue5NSZFHJTnCA8WvwovVjprEDERhmQGCs+jYrq+4ne8E+JmEoG/UizOTFg7a0ij+7IjO06n7aJXgPX2BbRdY3f8RwgnsdJ7jXcYItJD/U5h3zcE1BF1w9/LFj11PAL604bEqnvktpOyFGCxP8A3mH8Ekr1gUX0910d4Sf+KYVq4Lpujg851i09J0eYkM7Fb4s9WMpp9F6Q8LVUtjJUMF0S24kLCJvMBbDrGvonZdazGwUAyV6qSWAX2IEfzGJPoyiG2GsyjR+38yyAdFeTHsq8bsPF2HiOGX4tLA1NuTXk8+SYKzQHT0ia8R+9dBgB+CY/lgyM9YloRjEJj3ogfTX4XA4HI4jxg4JLvQQGxoIkwAAAABJRU5ErkJggg=="
                    alt="messageIcon"
                    className="h-[26px] w-[26px] mr-[9px]"
                  />
                </div>
                <div className="w-fit  text-[rgb(102,102,102)] text-[15px] ml-[2px]">
                  Notification
                </div>
              </div>
              <div className="w-full flex justify-end ">
                <div className="h-full flex justify-center items-center">
                  <MdNavigateNext />
                </div>
              </div>
            </div>
          </div>
          <div className="p-[13.33px]">
            <div className="h-[27px] w-full flex  ">
              <div className="w-1/2 flex justify-start items-center ">
                <div className=" w-[30px] flex justify-center items-center">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALTSURBVHgB7Zq9axRBGMaf2ZxXKR5cERQLo9iJXGulhVh5oI1gp1ioWFj6dwhKsBCTSrAKCII2xsZUYrQ6I2okoKSIHJ6I3l3u9dn1FtS72Z3Zj7C7zK+4ney8O5nfzs3H3g7gcDgcJUIhI+Qh6ujiNEbYDw9bGOCJuo7vSADL2s2yTgZlCdbQxAt1Hn1kQCbCQQW/os3knr9O97CNR7bSU8vyb2CDZWUgnVpYIxtiJR1ZVkbSqYRjZEOMpI3KykDaQxriZRHkz6AtdyikwfDGgX26yb7dRgoSC8td7EO8bIhW2lg2hNJym+IJSdfCdkxIW8uG7OKMkJDYPiz32Wt+osXpocXoxj+ZHo7y0/af99hK74JUDUeYtpMVjgX+VDXJsrqG5bjLI4XZGi3U1DMmGygH6xjKOQ6Qq7oArbDM4yA89QrlkQ3poi5z6hKPU9D3YcFZlE/Wp8FJ66IuUy9cUydQVoTLUg1Ro3QZWzdkry5jJ6elQuCEq45eeFs+oby81mVEtfACyopgSZelFQ6WaSO1iLIhcitqiRm/lp7nJO7hBkNbKC5diq6yZRcpuxAVaPQDgNzjAn+AC7DjOIs/jCSIrLBm7y2u6KmreGAS6EbpquOEq44TrjpOuOo44arjhKtODfkxmHKuDyUdHjt8sqnzAeEQRB2biFLZvPyeRp7CHVb8AMXG75Jkkx8rwauSP/SZfsPzH6DUqf/iNpATeQpTTB7zOBu0mGBTGyeyxJjZ4C99XCbkKexX3v9qbvBoEpuraIgbpauOE646RsLqMt/aVwTzFlb4haIyY143c2HJb/WTmpH5bj8b4S8oKn3zupkLe3iLovID66ahxsLqSnAXizd4CdbUTfN62U1LQzwt2ODVwze8tLnAenPp+D3TGdjunssawWfKPrdpXZ/Eu2mDvZZDzDHZ5LTgP9rlfQP8Xblb8J+uavg47mIOh8NRbX4DRmHeTbIJf+AAAAAASUVORK5CYII="
                    alt="giftIcon"
                    className="h-[26px] w-[26px] mr-[9px]"
                  />
                </div>
                <div className="w-fit  text-[rgb(102,102,102)] text-[15px] ml-[2px]">
                  Gift
                </div>
              </div>
              <div className="w-full flex justify-end ">
                <div className="h-full flex justify-center items-center">
                  <MdNavigateNext />
                </div>
              </div>
            </div>
          </div>
          <div className="p-[13.33px]">
            <div className="h-[27px] w-full flex  ">
              <div className="w-1/2 flex justify-start items-center ">
                <div className=" w-[30px] flex justify-center items-center">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFwSURBVHgB7do/TsMwFAbwz+GPxMYN6MSMxMQGE2uvgBBCsMANCDfoxp8ycAOQuAAbExdgysbKjKgfjzA1OE4lrCh++n5DW8WulS+x/CK3ABFRRhwyI7fFGURK/bjeaPpA4SbuyF/Gvp9VYLnBWE/5IdrJy547wXNbc4GceGwt0Gs31phX4AQY2DoGtm4ZPflv/Uyllztc10+RCf6GRX3MSylX8XKSSj9TOkH9TIWLlnUMbB3rcJNMiwstG+cIlZTClX3Vz1Sid7iunz74sPCrx/qZSnxKD6h+psJFyzoGto6BrWNg6xjYOga2joGtY2DrGNg6BraOgeeI/nbbPUJ3nwGNEw+8hnt9rSI9Kt3KfUSXAY3T+cc03Wgf6ZUda8/5zfifq60n4A4WuOoDHIeIKAutq7RMsY0ZNpGjFVTuEC+hpmBgucMGvrCPnDk8uWO8Nw+HHzxm+ETulrAaOtw+pa+xo28j5MjjzZ3iFUT2fQN7N25AHhz/GwAAAABJRU5ErkJggg=="
                    alt="messageIcon"
                    className="h-[26px] w-[26px] mr-[9px]"
                  />
                </div>
                <div className="text-nowrap text-[rgb(102,102,102)] text-[15px] ml-[2px] ">
                  Game statistics
                </div>
              </div>
              <div className="w-full flex justify-end ">
                <div className="h-full flex justify-center items-center">
                  <MdNavigateNext />
                </div>
              </div>
            </div>
          </div>
          <div className="p-[13.33px]">
            <div className="h-[27px] w-full flex  ">
              <div className="w-1/2 flex justify-center items-center ">
                <div className=" w-1/2 flex justify-center items-center">
                  <img
                    src="https://www.9987up.club/assets/png/languageIcon-634b6df2.png"
                    alt="messageIcon"
                    className="h-[26px] w-[26px] mr-[9px]"
                  />
                </div>
                <div className="w-fit  text-[rgb(102,102,102)] text-[15px] ">
                  Language
                </div>
              </div>
              <div className="w-full flex justify-end ">
                <div className="h-full flex justify-center items-center">
                  <MdNavigateNext />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
