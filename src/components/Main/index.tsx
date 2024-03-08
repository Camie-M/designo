import Image from 'next/image'

import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <h1>Header</h1>
    <h2>Subtitle</h2>
    <h3>Title</h3>
    <p>Regular text</p>

    <Image src={`/assets/circle.png`} alt={'Circle'} width={640} height={640} />
  </S.Wrapper>
)

export default Main
