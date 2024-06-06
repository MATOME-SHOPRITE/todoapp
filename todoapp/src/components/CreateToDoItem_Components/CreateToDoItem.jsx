import React, { useState } from "react";
import "./CreateToDostyles.css"

function Form(){


    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [priority,setPriority] = useState('High Priorty')

    const handleSubmit= function(buttonClickEvent){
        

        //prevents the page from refreshing when button is clicked
        buttonClickEvent.preventDefault();

        const ToDo ={title,content,priority}

        // Using fetch API to send a POST request
    fetch('http://localhost:5000/ToDoList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ToDo),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

        
    }


    return <div className="create">

        {/* Form Name */}

        <h2>Add New ToDo</h2>

        <form onSubmit={handleSubmit}>

            {/* ToDo Title: */}

            <label> ToDo Title </label>

            <input
               
               type="text" required
               value = {title}

            // Change the titleValue when we change the input value
            //event.target.value will take the input value and use it to set the title
               onChange={ (event) => setTitle(event.target.value)}
            
            />



            {/* ToDo Content */}

            <label>Content</label>
            
            
            <textarea name ="" id="" cols="30" rows="10" required 
            
                value={content}

                onChange={(event) => setContent(event.target.value)}
            
            ></textarea>



            {/* ToDo Priority */}

            <label> To Do List Priority</label>

            <select 
            
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
            
            
            >

                <option value="1"> High Priority </option>
                <option value="2">Medium Priority</option>
                <option value="3">Low Priority</option>

                
            </select>


            {/* Submit Button */}

            
            <button>Add ToDo</button>
            
            

        </form>

      
        
    </div>


  


}

export default Form;