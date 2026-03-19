🚀 international Study Group Matching Project
유학생을 대상으로 자신의 관심사에 맞는 그룹을 생성하고, 다른 사용자의 그룹에 가입하여 소통할 수 있는 매칭 플랫폼을 생각하며 개발 중.

🛠 Tech Stack
Backend
Framework: Spring Boot 3.x

Language: Java 17

ORM: Spring Data JPA

Database: MySQL

Lombok: Boilerplate 코드 제거 및 빌더 패턴 활용

Frontend
Library: React.js

Routing: React Router DOM (v6)

State Management: React Hooks (useState, useEffect)

Styling: CSS3

🏗 System Architecture
이 프로젝트는 클라이언트와 서버가 분리된 구조로, REST API를 통해 데이터를 주고받습니다.

📋 Features
1. User Management
Sign Up / Sign In: 사용자 회원가입 및 세션 기반 로그인 처리.

Profile: 로그인된 사용자의 정보 확인.

2. Group Management
Create Group: 그룹명과 키워드(Sport, Study, Coding 등)를 설정하여 새로운 모임 생성.

Group List: 메인 페이지에서 전체 그룹 목록을 최신순으로 조회.

Search & Filter: 키워드별 그룹 필터링 및 검색 기능.

3. Group Detail & Interaction
Detail Page: 특정 그룹의 상세 정보(이름, 키워드, 멤버 수) 조회.

Join Group: 상세 페이지에서 'Join' 버튼을 클릭하여 해당 그룹의 멤버로 등록.

Member List: 각 그룹에 가입된 사용자 목록 확인.

🗄 Database Schema
주요 테이블 구조는 다음과 같습니다.

users: 사용자 계정 정보 관리.

groups: 생성된 그룹 정보 관리 (예약어 충돌 방지를 위해 백틱(`) 또는 study_groups 권장).

user_groups: 사용자-그룹 간의 가입 관계를 관리하는 중간 테이블 (Composite PK 적용).

🚀 Getting Started
Backend (Spring Boot)
src/main/resources/application.properties에서 MySQL 연결 정보 수정.

group 테이블 예약어 이슈 해결을 위해 엔티티의 @Table(name = "\groups`")` 확인.

프로젝트 빌드 및 실행.

Frontend (React)
npm install을 통해 의존성 라이브러리 설치.

npm start로 로컬 서버(3000번 포트) 실행.

API 호출 주소가 http://localhost:8080 (또는 지정된 포트)로 올바르게 설정되었는지 확인.

💡 Key Design Patterns
DTO Pattern: 엔티티 객체를 직접 노출하지 않고 RequestDto, ResponseDto를 사용하여 데이터 보안 및 가독성 향상.

Container-Presenter Pattern: 리액트 컴포넌트를 로직(Container)과 디자인(Presenter)으로 분리하여 유지보수성 증대.