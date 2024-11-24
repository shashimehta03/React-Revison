import React, { useState } from "react"

const Seven = (props) => {
    const [image,setImage]=useState(null);

    const handelimage=(e)=>{
        setImage(e.target.files[0]);
    }
  return (
    <div>
      <p>image upload</p>
      <div>
        <label>
            image input <br/>
            <input type="file" accept="image/*" onChange={handelimage} />

        </label>
        {image && <img src={URL.createObjectURL(image)} alt="uploadded"/>}
      </div>
    </div>
  )
};

export default Seven;
