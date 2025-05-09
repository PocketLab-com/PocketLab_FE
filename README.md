
# 포켓카드 웹 프로젝트

이 프로젝트는 **Next.js 15 (App Router 기반)**와 **Atomic Design Pattern**을 적용하여 컴포넌트를 체계적으로 구성하고 유지보수를 쉽게 하기 위한 구조로 개발되었습니다.

## 🔧 기술 스택

- **Next.js 15**
- **React 18**
- **TailwindCSS**
- **Atomic Design Pattern**
- **Vercel** (배포용)
- **json-server** (로컬 개발용 mock API)

---

## 📁 디렉토리 구조 (Atomic Design 적용)

```
public/                     # 이미지 리소스 디렉토리
src/
├── app/                    # Next.js App Router 디렉토리
│   ├── page.js             # 메인 페이지
│   ├── components/         # Atomic Design 기준 컴포넌트
│   │   ├── atoms/          # 최소 UI 요소들
│   │   ├── molecules/      # atoms 조합 단위
│   │   ├── organisms/      # 실제 UI 블록 단위
│   │   ├── templates/      # 전체 레이아웃 구성
│   ├── globals.css         # 글로벌 스타일 (Tailwind 등)
```

---

## 🚀 로컬 개발 환경 실행 방법

1. **필요한 패키지 설치**

```bash
npm install
```

2. **개발 서버 실행**

```bash
npm run dev
```

3. **(선택) json-server 실행 (Mock API가 필요할 경우)**

```bash
npx json-server --watch db.json --port 9999
```

4. **브라우저에서 접속**

[http://localhost:3000](http://localhost:3000) 으로 접속해 확인할 수 있습니다.

---

## ☁️ Vercel로 배포한 이유

이 프로젝트는 [Vercel](https://vercel.com)을 통해 배포되었습니다. 선택한 이유는 다음과 같습니다:

- Next.js에 최적화된 서버리스 배포 환경 제공
- 복잡한 설정 없이 바로 배포 가능 (Zero-config)
- 자동 CI/CD, 도메인 연결
- 개인 프로젝트나 소규모 프로젝트에 적합한 무료 요금제

- 현재 배포방식을 변경할 예정입니다.
- 조직 프로젝트의 배포와 같은 경우 비용이 발생함을 인지.

배포 주소 예시: `https://vercel.com/seokjyans-projects/pocket-lab-fe`

---

## 📚 참고 자료