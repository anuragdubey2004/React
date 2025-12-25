import React from 'react'

const Cards = (props) => {   // props
  return (
    <div className="card">
        <img src = "https://images.unsplash.com/photo-1765912679289-075fcaff5b2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" alt = "profile"></img>
        <h1>{props.user}</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Velit quos harum vel tempora atque nostrum autem necessitatibus?
            Eaque, aspernatur. Architecto, labore expedita. Facilis quasi amet, nostrum id corrupti provident optio.
        </p>
      <button>View Profile</button>
    </div>
  )
}

export default Cards
