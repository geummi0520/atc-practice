import Link from "next/link";
import {
  Avatar,
  Card,
  Introduction,
  Label,
  Links,
  Page,
} from "./styles";

export default function SampleMemberPage() {
  return (
    <Page>
      <Card>
        <Avatar aria-hidden="true">👋</Avatar>
        <Label>ATC MEMBER</Label>
        <h1>
          안녕하세요,
          <br />
          이연재입니다.
        </h1>
        <Introduction>
          GitHub 협업 연습을 위해 만든 간단한 자기소개 페이지입니다. 이 문장을
          본인의 소개로 자유롭게 바꿔보세요.
        </Introduction>
        <Links>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <Link href="/">홈으로</Link>
        </Links>
      </Card>
    </Page>
  );
}
