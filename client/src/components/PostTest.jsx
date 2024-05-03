import parse from 'html-react-parser'

export const PostTest = ({content}) => {
  return (
    <div>{parse(content)}</div>
  )
}
