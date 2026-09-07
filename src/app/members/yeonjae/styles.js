"use client";

import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  background: linear-gradient(145deg, #f0f0ff, #fafafa 55%);
`;

export const Card = styled.article`
  width: 100%;
  max-width: 520px;
  padding: 48px;
  border: 1px solid rgb(91 91 214 / 14%);
  border-radius: 28px;
  background: rgb(255 255 255 / 88%);
  box-shadow: 0 24px 70px rgb(40 40 90 / 10%);

  h1 {
    margin-top: 10px;
    font-size: clamp(38px, 8vw, 54px);
    line-height: 1.08;
    letter-spacing: -0.055em;
  }

  @media (max-width: 520px) { padding: 36px 28px; }
`;

export const Avatar = styled.span`
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  margin-bottom: 28px;
  border-radius: 22px;
  background: #ededff;
  font-size: 36px;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
`;

export const Introduction = styled.p`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 17px;
  line-height: 1.75;
  word-break: keep-all;
`;

export const Links = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 32px;

  a {
    padding: 11px 17px;
    border: 1px solid #dedede;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 600;
  }

  a:first-child {
    border-color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.text};
    color: white;
  }
`;
