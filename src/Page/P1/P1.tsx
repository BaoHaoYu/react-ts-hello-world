import * as React from 'react'

// Lazy load P1.
const P1: React.FunctionComponent = () => {
  const [data, setData] = React.useState<any>(null)

  React.useEffect(() => {
    setTimeout(() => {
      console.log('%c P1 success get data.', 'background: #222; color: #bada55')
      setData({ msg: 'from server' })
    }, 200)
  }, [])

  return <h3>P1: {data && data.msg}</h3>
}

export default P1
