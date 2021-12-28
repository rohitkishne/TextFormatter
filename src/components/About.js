import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode ==='dark'?'white':'#0c0b3c',
        backgroundColor: props.mode ==='dark'?'#0c0b3c':'white',
        border: '1px solid',
        borderColor: props.mode ==='dark'?'white':'black'
    }
  
    //  const [myStyle, setMyStyle] = useState( {
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    
    // const [btntext, setBtnText] = useState("Enable Dark Mode")
  
    //  const toggleStyle = () =>{
    //     if (myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light Mode");
    //         props.showAlert("Dark Mode of About Us has been Enabled", "success")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //         props.showAlert("Light Mode of About Us has been Enabled", "success")
    //     }
    // }
   
    return (
        <div className="container" style = {{ color: props.mode ==='dark'?'white':'#0c0b3c'}}>
                    <h2 className="my-3">About Us</h2>
                    <div className="accordion" id="accordionExample" style = {myStyle}>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>About TexFormatter !</strong>
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style = {myStyle}>
                            This website aims to help you with tasks where text formatting is needed. It's not intended to replace a word processor, but the formatting tools available here can help speed up some jobs which might otherwise be long and repetitive.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>What are the benefits to Use Our Utility ?</strong>
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style = {myStyle}>
                            The benefits of formatting are that: the document will have a clear and consistent layout. automated tables of contents for headings, tables and figures can easily be inserted and updated. styles can be set to ensure that a heading stays with the text that follows it.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Know Our Features !</strong>
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style = {myStyle}>
                            Formatted text documents in binary files have, however, the disadvantages of formatting scope and secrecy. Whereas the extent of formatting is accurately marked in markup languages, WYSIWYG formatting is based on memory, that is, keeping for example your pressing of the boldface button until cancelled. This can lead to formatting mistakes and maintenance troubles. As for secrecy, formatted text document file formats tend to be proprietary and undocumented, leading to difficulty in coding compatibility by third parties, and also to unnecessary upgrades because of version changes.
                            </div>
                            </div>
                        </div>
                    </div>
                    
            {/* <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div> */}
        </div>
                    
                    

    )
}
