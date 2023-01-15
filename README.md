# <img src="https://user-images.githubusercontent.com/76432731/188314408-f5b38853-8104-4dc5-a929-964d6c14d4e0.png" width="30"/>소상공인 금융상품

### 소상공인의 거주지, 설정 금액에 맞게 맞춤형 금융상품을 보고 신청할 수 있는 서비스

(이 사이트는 연습을 위한 미니 프로젝트로, 실제 기능은 하지 않습니다)

<br />

## 📝 TOC

- 프로젝트 소개
  - 프로젝트 제안 배경 & 솔루션
  - 타겟층
- 배포사이트
- 개발 기간
- 팀원소개
- 주요 기능과 로직
  - 사용자
  - 제품
  - 기타
- 개발스택
- 폴더 트리
  <br />

## 💡 프로젝트 소개

### 프로젝트 제안 배경

소상공인 정책자금 데이터를 바탕으로, 맞춤형 상품을 제공하여 금융상품을 신청할 수 있도록 만들어보자.

<br />

### 타겟층

금융상품 신청이 필요한 소상공인

<br />

## 🌐 배포 사이트

소상공인 금융상품 사이트 바로가기: [소상공인 금융상품](https://kdt-mini-team1.netlify.app/entry)  
**(이 사이트는 모바일 환경을 기준으로 제작되었습니다)**

<br />

## 📅 개발 기간

2022.08.23 - 2022.09.04 (총 13일)

<br />

## 🧑‍🤝‍🧑 팀원소개

| 김신협                                     | 박지훈                                       | 백송이                                   | 천희영                                         |
| ------------------------------------------ | -------------------------------------------- | ---------------------------------------- | ---------------------------------------------- |
| 😁[@kyle-shk](https://github.com/kyle-shk) | 😎[@hoona1011](https://github.com/hoona1011) | 😆[@SongE12](https://github.com/SongE12) | 😃[@heeyoung-c](https://github.com/heeyoung-c) |

<br />

## 🪄 주요 기능과 로직

### :one: 사용자

- 회원가입: 이름, 이메일, 비밀번호를 받아 사용자를 등록하는 기능
  ![sign-up](https://user-images.githubusercontent.com/76432731/188315603-7f5cb1bb-cfa3-4f0a-9a82-dde995fc57c4.png)

- 로그인/로그아웃: 이메일과, 비밀번호를 입력해 사용자 정보를 불러오는 기능
  ![sign-in](https://user-images.githubusercontent.com/76432731/188315649-2e32ddc8-6d74-4caa-a901-393cb6206a9a.png)

- 자동 로그인: JWT를 사용하여, 토큰이 유효할 경우 자동 로그인하는 기능

### :two: 제품

- 금융상품 정보를 검색/리스트 하는 기능 (이름순/한도순 필터링)
  ![filter](https://user-images.githubusercontent.com/76432731/188316185-a3d7d2be-c107-42d4-a3f7-acb2be59aae7.png)

- (회원 별) 특정 금융상품을 관심 상품으로 등록/해제하는 기능
- (회원 별) 관심 상품으로 등록해놓은 금융상품만 모아서 보는 기능  
  ![bookmark](https://user-images.githubusercontent.com/76432731/188316185-a3d7d2be-c107-42d4-a3f7-acb2be59aae7.png)

- (회원 별) 특정 금융상품을 장바구니에 담는 기능
- (회원 별) 장바구니에 담긴 금융상품을 신청하는 기능  
  ![cart](https://user-images.githubusercontent.com/76432731/188316218-c1f34a9f-bbc5-4fa4-b67c-a0120617aa32.png)

### :three: 기타

- 장바구니, 검색, 메뉴 버튼 등을 통해 화면을 전환하는 기능

## 👨‍💻개발 스택

- yarn
- React
- React-router
- React-icons
- Redux-toolkit
- Redux-logger
- styled-components
- bootstrap
- prettier
- eslint
- netlify
- vite
- RTK Query
- Material-Ui

## 폴더 트리

```
📦src
 ┣ 📂api
 ┃ ┣ 📜authApi.js
 ┃ ┣ 📜customApi.js
 ┃ ┣ 📜productsApi.js
 ┃ ┗ 📜searchApi.js
 ┣ 📂assets
 ┃ ┗ 📂fonts
 ┃ ┃ ┣ 📜NotoSansKR-Black.otf
 ┃ ┃ ┣ 📜NotoSansKR-Bold.otf
 ┃ ┃ ┣ 📜NotoSansKR-Light.otf
 ┃ ┃ ┣ 📜NotoSansKR-Medium.otf
 ┃ ┃ ┣ 📜NotoSansKR-Regular.otf
 ┃ ┃ ┗ 📜NotoSansKR-Thin.otf
 ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂TheFooter
 ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┗ 📜style.js
 ┃ ┃ ┗ 📂TheHeader
 ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┗ 📜style.js
 ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜style.js
 ┃ ┗ 📂ui
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┗ 📜style.js
 ┃ ┃ ┣ 📂EmptyProducts
 ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┗ 📜style.js
 ┃ ┃ ┣ 📂Input
 ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┗ 📜style.js
 ┃ ┃ ┣ 📂Loading
 ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┗ 📜style.js
 ┃ ┃ ┣ 📂SearchBar
 ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┗ 📜style.js
 ┃ ┃ ┣ 📂TheButton
 ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┗ 📜style.js
 ┃ ┃ ┗ 📂UserCard
 ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┗ 📜style.js
 ┣ 📂pages
 ┃ ┣ 📂AllProducts
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┣ 📜sort.js
 ┃ ┃ ┗ 📜style.js
 ┃ ┣ 📂Cart
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜style.js
 ┃ ┣ 📂CustomProducts
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜style.js
 ┃ ┣ 📂Entry
 ┃ ┃ ┣ 📜Index.jsx
 ┃ ┃ ┗ 📜style.js
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜style.js
 ┃ ┣ 📂MyPage
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜style.js
 ┃ ┣ 📂SignIn
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜style.js
 ┃ ┣ 📂SignUp
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜style.js
 ┃ ┗ 📂WishProducts
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜style.js
 ┣ 📂routes
 ┃ ┣ 📂PrivateRoute
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┗ 📜AppRouter.jsx
 ┣ 📂store
 ┃ ┣ 📂slices
 ┃ ┃ ┣ 📜keywordSlice.js
 ┃ ┃ ┗ 📜searchSlice.js
 ┃ ┗ 📜index.js
 ┣ 📂styles
 ┃ ┣ 📜globalStyle.js
 ┃ ┗ 📜theme.js
 ┣ 📂utils
 ┃ ┗ 📜validator.js
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```
