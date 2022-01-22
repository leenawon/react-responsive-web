## Nature Website

---

### 💻 Nature를 주제로 React를 이용한 웹사이트 제작

### 사용 기술

- React.js

### 데모 링크 : https://leenawon.github.io/react-responsive-web/

---

### **웹 사이트** 모습

- 메인 페이지

  - 상단 고정 메뉴 바 제작
  - 이미지 배경과 함께 페이지 타이틀과 버튼이 위치
  - <img src="https://user-images.githubusercontent.com/76942087/150340296-f629edb2-8248-47e3-88de-92361d4cafb4.png" width="350" height="150"/>

  - 3개의 article을 나란히 배치
  - hover시 이미지 transform scale 적용
  - <img src="https://user-images.githubusercontent.com/76942087/150342872-4b800307-08b0-4c99-a901-b614db46aec5.png" width="350" height="150"/>

  - 하단에는 회원가입 form과 소셜 아이콘들, 메뉴들 배치
  - <img src="https://user-images.githubusercontent.com/76942087/150344443-dfe61e86-7b4b-4c96-9f08-49d6865a3c50.png" width="350" height="150"/>

- Article 페이지

  - 각각의 article마다 제목과 카테고리, 내용, 이미지가 확인 가능하도록 제작
  - <img src="https://user-images.githubusercontent.com/76942087/150345788-0f3dbbc0-27ae-4900-85c7-9ebbbe76c1a0.png" width="350" height="150"/>

- 모바일 반응형
  - <img src="https://user-images.githubusercontent.com/76942087/150346240-d7a1f92d-c485-44f9-a1eb-1e1e99dd0816.png" width="200" height="300"/>
    <img src="https://user-images.githubusercontent.com/76942087/150346462-d3ec9657-dc2f-4bc7-8f03-84362fb52785.png" width="200" height="300"/>
    <img src="https://user-images.githubusercontent.com/76942087/150346313-f9cf77ea-c77d-4951-a3e0-549503824ea3.png" width="200" height="300"/>
    <img src="https://user-images.githubusercontent.com/76942087/150346393-cc3146bf-0133-42bb-9640-22f087ef6350.png" width="200" height="300"/>

---

### Advanced Feature

- Button 재사용을 위한 컴포넌트 작성

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
