# 2026 ATC Members

각자의 자기소개 페이지를 만들고 Pull Request로 합치는 GitHub 협업 연습용 Next.js 프로젝트입니다.

## 실행하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

## 내 페이지 추가하기

1. `src/app/members/sample` 폴더를 복사합니다.
2. 복사한 폴더 이름을 본인의 GitHub ID로 변경합니다.
3. 폴더 안의 `page.js`와 `styles.js`를 자유롭게 수정합니다.
4. `npm run lint`와 `npm run build`로 확인합니다.
5. 새 브랜치에 커밋하고 Pull Request를 생성합니다.

예를 들어 GitHub ID가 `gildong`이면 `src/app/members/gildong/`이 되며,
페이지 주소는 `http://localhost:3000/members/gildong`입니다.

## 브랜치와 커밋 예시

```bash
git switch -c feature/member-gildong
git add src/app/members/gildong
git commit -m "feat: add gildong profile page"
git push -u origin feature/member-gildong
```

다른 참여자의 파일과 충돌하지 않도록 자신의 폴더만 수정해 주세요.
