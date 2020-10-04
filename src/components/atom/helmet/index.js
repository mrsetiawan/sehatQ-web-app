import { React, Helmet } from '../../../libraries'

const HelmetSection = ({ title, desc }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name={title} content={desc} />
    </Helmet>
  )
}

export default HelmetSection
