# 프로젝트 이름
Pokemon Dex (포켓몬 도감) 만들
## 📖 목차
1. [프로젝트 소개](#프로젝트-소개)
2. [팀소개](#팀소개)
3. [프로젝트 계기](#프로젝트-계기)
4. [주요기능](#주요기능)
5. [개발기간](#개발기간)
6. [기술스택](#기술스택)
7. [서비스 구조](#서비스-구조)
8. [와이어프레임](#와이어프레임)
9. [API 명세서](#API-명세서)
10. [ERD](#ERD)
11. [프로젝트 파일 구조](#프로젝트-파일-구조) 
12. [Trouble Shooting](#trouble-shooting) - 후기 
    
## 👨‍🏫 배포 링크
https://pokemon.fujiikaze.kr

## 팀소개
홍승우(FujiiKaze97)
  All Page
  Addictional Feature

## 프로젝트 계기
For the review, I thought it was important to start the project I did through react from the zero point, make it to the end, and think about additional functions.
So I started the Pokémon illustration project again.

##Refactoring 순서
branch props-drilling -> context api -> redix-toolkits -> refactor

##포켓몬 도감 추가하고 싶은 기능 
1 다른 최신 포켓몬들까지도 전부 데이터 가져오기 + 추가하기
2 메인화면 로고 뜨도록 
3 디테일 화면에서 추가 누르면 대시보드에 추가 되도록
4 대시보드 아무것도 없을 때는 6가지 포켓몬 볼 보이도록 
5 Context Api -> Redux Toolkit으로 리팩터링 하면서 TIL 작성
6 초기화 해도 데이터 사라지지 않도록 수정 
7 ui 라이브러리 사용해서 modal이나 toast 같은 ui 라이브러리 사용해보기 
8 해당 포켓몬의 평생 배우는 스킬 정보 같은 거 가져오기
9. 모바일이나 다른 화면에서도 잘 보이도록 반응형 웹 구현 및 모바일 환경에서 테스트 

## 💜 주요기능

- 기능 1 : 도감 페이지에서 6마리의 포켓몬을 대시 보드에 추가할 수 있는 기능 -> 추가한 포켓몬은 클릭 시 바로 디테일 페이지에서 정보 확인 가능
- 

## ⏲️ 프로젝트 개발기간
- 2024.09.10(화) ~ 2024.09.11(수)

## 📚️ 기술스택
React React Router Context-API Redux Styled-Components JavaScript


## 실행 Install 
git clone: 폴더 복사
npm install -g yarn: yarn 설치
yarn dev: 로컬에서 프로젝트 실행

## 프로젝트 파일 구조

📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂Components
 ┃ ┣ 📜Dashboard.jsx
 ┃ ┣ 📜PokemonCard.jsx
 ┃ ┗ 📜PokemonList.jsx
 ┣ 📂Context
 ┃ ┗ 📜PokemonContext.jsx
 ┣ 📂page
 ┃ ┣ 📜Detail.jsx
 ┃ ┣ 📜Dex.jsx
 ┃ ┗ 📜Home.jsx
 ┣ 📜App copy.jsx
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┣ 📜main.jsx
 ┗ 📜mock.js


## Trouble Shooting & 회고 총 정리 
