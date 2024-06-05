import React, { useState } from "react";
import "./styles.css"

function Form(){


    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [priority,setPriority] = useState('High Priorty')


    return <div className="create">

        {/* Form Name */}

        <h2>Add New Note</h2>

        <form>

            {/* Note Title: */}

            <label> Note Title </label>

            <input
               
               type="text" required
               value = {title}

            // Change the titleValue when we change the input value
            //event.target.value will take the input value and use it to set the title
               onChange={ (event) => setTitle(event.target.value)}
            
            />



            {/* Note Content */}

            <label>Content</label>
            
            
            <textarea name ="" id="" cols="30" rows="10" required 
            
                value={content}

                onChange={(event) => setContent(event.target.value)}
            
            ></textarea>



            {/* Note Priority */}

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

            <button></button>
            
            

        </form>

        {title}
        {content}
        {priority}

        
    </div>


  


}

export default Form;