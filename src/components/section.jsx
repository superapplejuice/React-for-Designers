import React from 'react'
import styled, { css } from 'styled-components'

import { sectionData } from '../data'

import Wave from './wave'

const MainGroup = styled.div`
  background: url(${p => p.image});
  background-size: cover;
  display: grid;
  gap: 20px;
  grid-template-rows: 300px auto;
  height: 720px;
  position: relative;

  @media (max-width: 720px) {
    height: 820px;
  }
`

const Logo = styled.img`
  align-self: end;
  margin: 0 auto;
  width: 120px;
`

const TitleGroup = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 300px auto;
  grid-template-rows: auto 100%;
  margin: 0 40px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h3`
  color: white;
  font-size: 60px;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 720px) {
    font-size: 40px;
  }
`

const Content = styled.p`
  color: white;
`

const _baseWave = css`
  position: absolute;
  width: 100%;
`

const WaveTop = styled.div`
  ${_baseWave}
  top: 0;
  /* turn the element upside down */
  transform: rotate(180deg);
`

const WaveBottom = styled.div`
  ${_baseWave}
  bottom: 0;
`

const Section = () =>
  sectionData.map(({ image, logo, title, content }, index) => (
    <MainGroup image={image} key={index}>
      <WaveTop>
        <Wave />
      </WaveTop>
      <WaveBottom>
        <Wave />
      </WaveBottom>
      <Logo src={logo} />
      <TitleGroup>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </TitleGroup>
    </MainGroup>
  ))

export default Section
