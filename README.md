# react_Boilerplate

#### 프론트엔드 프로젝트 진행시 항상 사용되는 회원가입, 로그인, 로그아웃 기능등을 반복적으로 사용하기위해 만든 템플릿

---

# Server

1. Node.js , express.js
2. mongoDB

---

# Client

1. React.js
2. redux

---

# 기능

1. 회원가입
2. 로그인
   -> 2020.11.10 현재 비밀번호가 일치하지않는다는 버그발생중
   ![image](https://user-images.githubusercontent.com/39754252/98695266-c967ae00-23b5-11eb-8e78-0550ee2cda90.png)
   
   redux-tool로 확인시 회원가입이 성공하고 로그인페이지로 넘어갔을때 로그인을할시 err 가 발생한다 그래서 로그인시의 정보를 콘솔에 찍어보았는데
   ![image](https://user-images.githubusercontent.com/39754252/98695765-59a5f300-23b6-11eb-92e5-909fd2d8fe78.png)
   문제가 보이지않는다..
  
   포스트맨으로 로그인시 잘되는데... 왜.. 
    ![image](https://user-images.githubusercontent.com/39754252/98696254-e781de00-23b6-11eb-8ea2-c8cafad99f68.png)
   
3. 로그아웃
