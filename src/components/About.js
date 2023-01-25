import React from 'react'

const About = () => {

  return (
  <>
      <div style={{backgroundColor:"lightblue",height:"300px"}}>
          <h1 className='text-center mt-4 p-3'>About Us</h1>
          <p className='fs-5 mt-5 p-3 text-center'>In such cases, leaving todo notes along the text seems very useful. To do so, some text editors offer the possibility of writing comments and even LaTeX lets you write comments in the plain text with the % symbol. But clarity and order are not a strong parts of plain text comments; here we are looking for something similar to add post-it notes to a printed document.</p>
      </div>
      <div className=" row my-3" style={{backgroundColor:"hsl(0, 0%, 90%)"}}>
           <div className="col-6 p-3 ">
              <img src="https://media.istockphoto.com/id/1193476717/photo/male-hands-making-a-to-do-list-in-a-notebook-over-an-office-desk.jpg?s=612x612&w=0&k=20&c=8DNkIq4K2W-AmeWes4436EDbjRwltEOUt3FIjY4ubVw=" className="center" alt="..." />
           </div>
           <div className="col-6 my-3">
              <h1 className='p-3'>Create a topic sentence</h1>
              <p className='fs-5 p-5 '>Paragraph development begins with the formulation of the controlling idea. This idea directs the paragraph’s development. Often, the controlling idea of a paragraph will appear in the form of a topic sentence. In some cases, you may need more than one sentence.</p>
           </div>
      </div>
      <div className="row my-3" style={{backgroundColor:"lightblue"}}>
          <div className="col-6">
             <h1 className='my-3 p-3'>Ideas & Brain Dump</h1>
             <p className='fs-5 p-5'>This page is designed to capture brand new ideas and to identify new projects, sub-projects and tasks. It also includes a section to record topics that need research and projects that need updating.</p>
          </div>
          <div className="col-6 p-3">
            <img src='https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9kb3xlbnwwfHwwfHw%3D&w=1000&q=80' className="img" alt="..." />
          </div>
     </div>
     <div className="row" style={{backgroundColor:"hsl(0, 0%, 90%)"}}>
          <div className="col-6 p-3 ">
            <img src='https://media.istockphoto.com/id/1164644800/photo/businesswoman-signing-cheque.jpg?s=612x612&w=0&k=20&c=xil2IcHZXIIZ1VXdy4wYwiPa-gSoMwx0K2H4VTHMDmw=' className='img2' alt='...'/>
          </div>
          <div className="col-6">
            <h1 className='my-3 p-3'>Supporting Details</h1>
            <p className='fs-5 p-5'>When authors write they have an idea in mind that they are trying to get across.  This is especially true as authors compose paragraphs.  An author organizes each paragraph's main idea and supporting.</p>
         </div>
    </div>
 </>


  )
}

export default About
