import React from 'react'
import Paragraph from './Paragraph'

function Heading() {
    return (
        <div>
            <section className="section">
               <div classsName="container">
                   <div className="row">
                       <div className= "text-center">
                           <h3 className="main-heading">WHO IS IT FOR ?</h3>
                           <div className="underline mx-auto"></div>
                        </div>
                    </div>
                </div>
            </section>   

            <Paragraph />     
        </div>
    )
}

export default Heading
