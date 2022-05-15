//import { useState, setState, useEffect } from "react";
import React from "react";


const AddPaint = (props) => {
    /* set initial state to blank on call
    const state = {
        id: 0,
        colour: "",
        status: 0,
    }*/

    return(
        <div className="ui container">
            <h2 className="ui horizontal divider header"><i className="large plus icon"></i> Add New Paint</h2>
            <div className="ui large form centered grid" >
                <div className="inline fields">
                    <div className="field">
                    <label>Colour</label>
                    <input type="text" placeholder="Paint colour" value="Blue" onChange={() => {}}/>
                    </div>
                    <div className="ui positive button" onClick={() => {}}><i className="plus icon"></i>Add</div>
                </div>
            </div>
            
        </div>       
    );
}

export default AddPaint;
