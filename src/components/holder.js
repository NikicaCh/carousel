import React, { useState } from 'react'

const images = [
    require('../images/one.png'),
    require('../images/two.jpg'),
    require('../images/three.jpg'),
    require('../images/four.jpg'),
    require('../images/five.jpg'),
]
const Holder = (props) => {
    const [index, setIndex] = useState(0)
    const [firstImg, setFirstImg] = useState(images[index].default)

    const Next = () => {
        if(index < images.length -1) {
            setIndex(index + 1)
            setFirstImg(images[index + 1].default)
        }
    }

    const Prev = () => {
        if(index > 0) {
            setIndex(index - 1)
            setFirstImg(images[index - 1].default)
        }
    }
    return (
        <div className="holder">
            <div className="box">
                <img src={firstImg} alt="Img" onClick={() => Next()}></img>
            </div>
            <button onClick={() => {
                Prev()
            }}>Prev</button>
            <button onClick={() => {
                Next()
            }}>Next</button>
        </div>
    )
}

export default Holder;