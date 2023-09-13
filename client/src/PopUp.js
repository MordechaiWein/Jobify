import React, { useState } from "react";
import DialogBox from "./DialogBox";
import JobEditForm from "./JobEditForm";

function PopUp() {

    const [editFlag, setEditFLag] = useState(false)

    return (

        <main>
            {editFlag === false ?

                <DialogBox setEditFLag={setEditFLag}/>
                :
                <JobEditForm setEditFLag={setEditFLag}/>
            }    
        </main>
    )
}

export default PopUp