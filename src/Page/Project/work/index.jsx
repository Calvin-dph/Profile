import './style.css'

export default function index({index, title, setModal, link}) {

  return (
    <>
      <a href={link} target='_blank' onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className="work">
        <h2>{title}</h2>
        <p>Design & Development</p>
      </a>
    </>  
  )
}

