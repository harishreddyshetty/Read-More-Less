// Write your code here

import {useState} from 'react'

import {Container, Image, Paragraph, Button, Heading} from './styledComponents'

const description =
  'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually.'

const ReadMore = () => {
  const [showFullPara, updateBtnStatus] = useState(false)

  //   const [des, updateDescription] = useState(
  //     'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually.',
  //   )

  const onClickReadBtn = () => {
    updateBtnStatus(prevState => !prevState)
  }

  const btnText = showFullPara ? 'Read Less' : 'Read More'

  const paragraph = showFullPara ? description : description.slice(0, 171)

  return (
    <Container>
      <Heading>React Hooks</Heading>
      <p>Hooks are a new addition to React</p>

      <Image
        alt="react hooks"
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
      />

      <Paragraph>{paragraph}</Paragraph>

      <Button onClick={onClickReadBtn} type="button">
        {btnText}
      </Button>
    </Container>
  )
}

export default ReadMore
