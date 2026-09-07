"use client";

import styled from "styled-components";
import Link from "next/link";

export const Page = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
  gap: 64px;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 32px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 56px 24px;
  }
`;

export const Hero = styled.section`
  h1 {
    margin-top: 12px;
    font-size: clamp(48px, 7vw, 88px);
    line-height: 1.02;
    letter-spacing: -0.06em;
  }

  @media (max-width: 760px) {
    h1 { font-size: clamp(44px, 14vw, 64px); }
  }
`;

export const Eyebrow = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
`;

export const Description = styled.p`
  max-width: 580px;
  margin-top: 28px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 18px;
  line-height: 1.75;
  word-break: keep-all;
`;

export const ExampleLink = styled(Link)`
  display: inline-flex;
  margin-top: 36px;
  padding: 13px 20px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.text};
  color: white;
  font-weight: 600;
  transition: transform 160ms ease, background 160ms ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const Guide = styled.section`
  padding: 36px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.surface};

  h2 { margin-top: 10px; font-size: 28px; letter-spacing: -0.04em; }

  ol {
    display: grid;
    gap: 18px;
    margin: 28px 0 0 20px;
    color: #555;
    line-height: 1.6;
  }

  code {
    padding: 3px 7px;
    border-radius: 6px;
    background: #ededed;
    color: #222;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.9em;
  }
`;

export const Path = styled.p`
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid #e1e1e1;
  color: #777;
  font-size: 14px;
`;
