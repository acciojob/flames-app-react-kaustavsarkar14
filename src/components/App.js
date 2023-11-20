import React, { Component, useState } from "react";
import '../styles/App.css';

const App = () => {
    const [name1, setName1] = useState('')
    const [name2, setName2] = useState('')
    const [relation, setRelation] = useState('')

    const calculateRelation = (str1, str2) => {
        for (let i = 0; i < str1.length; i++) {
            for (let j = 0; j < str2.length; j++) {
                if (str1[i] == str2[j]) {
                    str1 = str1.replace(str1[i], "")
                    str2 = str2.replace(str2[j], "")
                }
            }
        }
        const n = (str1.length + str2.length)%6
        if(n==0) setRelation("Siblings")
        if(n==1) setRelation("Friends")
        if(n==2) setRelation("Love")
        if(n==3) setRelation("Affection")
        if(n==4) setRelation("Marriage")
        if(n==5) setRelation("Enemy")
    }
    const checkStatus = (e) => {
        e.preventDefault()
        if(name1=='' || name2=='') {
            setRelation('Please Enter valid input')
            return
        }
        calculateRelation(name1, name2)
    }
    const clearNames = () => {
        setName1('')
        setName2('')
    }

    return (
        <div id="main">
            {/* Do not remove the main div */}
            <form action="" onSubmit={e => checkStatus(e)}>
                <input name="name1" data-testid="input1" type="text" value={name1} onChange={e => setName1(e.target.value)} placeholder="Enter first name" />
                <input name="name2" data-testid="input2" type="text" value={name2} onChange={e => setName2(e.target.value)} placeholder="Enter last name" />
                <button data-testid="calculate_relationship" type="submit" >Calculate Relationship Future</button>
                <button data-testid="clear" type="button" onClick={clearNames} >Clear</button>
            </form>
            <h3 data-testid="answer" >{relation}</h3>
        </div>
    )
}


export default App;
