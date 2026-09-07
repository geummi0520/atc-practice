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
          임지은입니다.
        </h1>
        <Introduction>
          😃😃
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
