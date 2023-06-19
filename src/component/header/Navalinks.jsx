import React from 'react'
import { navalinks } from '../../assets/data/portfolioData'

const Navalinks = () => {
  return (
    <div className="navalinks">
        {
            navalinks.map((link) => {
                const {id  , text , url} = link
                return (
                    <ul key={id} className='nav-container'>
                            <li>
                                <a href={url}>{text}</a>
                            </li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default Navalinks
