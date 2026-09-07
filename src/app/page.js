import {
  Description,
  ExampleLink,
  Eyebrow,
  Guide,
  Hero,
  Page,
  Path,
} from "./styles";

export default function Home() {
  return (
    <Page>
      <Hero>
        <Eyebrow>2026 ATC · GitHub Practice</Eyebrow>
        <h1>
          연습: 페이지를
          <br />
          하나씩 채워보세요.
        </h1>
        <Description>
          각자 별도의 브랜치에서 자기소개 페이지를 만들고 Pull Request로
          합쳐보는 협업 연습 공간입니다.
        </Description>
        <ExampleLink href="/members/sample">예제 페이지 보기</ExampleLink>
      </Hero>

      <Guide aria-labelledby="guide-title">
        <Eyebrow>HOW TO JOIN</Eyebrow>
        <h2 id="guide-title">내 페이지 추가하기</h2>
        <ol>
          <li>
            <code>members/sample</code> 폴더를 복사합니다.
          </li>
          <li>폴더 이름을 본인의 이름으로 바꿉니다.</li>
          <li>내용을 수정한 뒤 새 브랜치에서 PR을 만듭니다.</li>
        </ol>
        <Path>
          완성 주소: <code>/members/본인 이름</code>
        </Path>
      </Guide>
    </Page>
  );
}
