## Nature Website

---

### ๐ป Nature๋ฅผ ์ฃผ์ ๋ก React๋ฅผ ์ด์ฉํ ์น์ฌ์ดํธ ์ ์

### ์ฌ์ฉ ๊ธฐ์ 

- React.js

### ๋ฐ๋ชจ ๋งํฌ : https://leenawon.github.io/react-responsive-web/

---

### **์น ์ฌ์ดํธ** ๋ชจ์ต

- ๋ฉ์ธ ํ์ด์ง

  - ์๋จ ๊ณ ์  ๋ฉ๋ด ๋ฐ ์ ์
  - ์ด๋ฏธ์ง ๋ฐฐ๊ฒฝ๊ณผ ํจ๊ป ํ์ด์ง ํ์ดํ๊ณผ ๋ฒํผ์ด ์์น
  - <img src="https://user-images.githubusercontent.com/76942087/150340296-f629edb2-8248-47e3-88de-92361d4cafb4.png" width="350" height="150"/>

  - 3๊ฐ์ article์ ๋๋ํ ๋ฐฐ์น
  - hover์ ์ด๋ฏธ์ง transform scale ์ ์ฉ
  - <img src="https://user-images.githubusercontent.com/76942087/150342872-4b800307-08b0-4c99-a901-b614db46aec5.png" width="350" height="150"/>

  - ํ๋จ์๋ ํ์๊ฐ์ form๊ณผ ์์ ์์ด์ฝ๋ค, ๋ฉ๋ด๋ค ๋ฐฐ์น
  - <img src="https://user-images.githubusercontent.com/76942087/150344443-dfe61e86-7b4b-4c96-9f08-49d6865a3c50.png" width="350" height="150"/>

- Article ํ์ด์ง

  - ๊ฐ๊ฐ์ article๋ง๋ค ์ ๋ชฉ๊ณผ ์นดํ๊ณ ๋ฆฌ, ๋ด์ฉ, ์ด๋ฏธ์ง๊ฐ ํ์ธ ๊ฐ๋ฅํ๋๋ก ์ ์
  - <img src="https://user-images.githubusercontent.com/76942087/150345788-0f3dbbc0-27ae-4900-85c7-9ebbbe76c1a0.png" width="350" height="150"/>

- ๋ชจ๋ฐ์ผ ๋ฐ์ํ
  - <img src="https://user-images.githubusercontent.com/76942087/150346240-d7a1f92d-c485-44f9-a1eb-1e1e99dd0816.png" width="200" height="300"/>
    <img src="https://user-images.githubusercontent.com/76942087/150346462-d3ec9657-dc2f-4bc7-8f03-84362fb52785.png" width="200" height="300"/>
    <img src="https://user-images.githubusercontent.com/76942087/150346313-f9cf77ea-c77d-4951-a3e0-549503824ea3.png" width="200" height="300"/>
    <img src="https://user-images.githubusercontent.com/76942087/150346393-cc3146bf-0133-42bb-9640-22f087ef6350.png" width="200" height="300"/>

---

### Advanced Feature

- Button ์ฌ์ฌ์ฉ์ ์ํ ์ปดํฌ๋ํธ ์์ฑ

```js
// Button Style & Button Size
const BUTTON_STYLE = ["basic-button", "outline-button"];
const BUTTON_SIZE = ["medium-button", "large-button"];

export const Button = ({
  children,
  type,
  onClick,
  button_style,
  button_size,
}) => {
  const buttonStyle = BUTTON_STYLE.includes(button_style)
    ? button_style
    : BUTTON_STYLE[0];
  const buttonSize = BUTTON_SIZE.includes(button_size)
    ? button_size
    : BUTTON_SIZE[0];

  return (
    <button
      type={type}
      className={`button ${buttonStyle} ${buttonSize}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```
