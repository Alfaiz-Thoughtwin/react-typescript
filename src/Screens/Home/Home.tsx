import React, { useState, useEffect } from 'react';
import { auth } from '../../Firebase';
import { getFirestore, setDoc, collection, doc, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";
import { Navbar } from '../../Components';

export const Home = () => {

    const db = getFirestore();
    const dbReff = collection(db, "todos");
    
    const [text, setText] = useState<any | null>("");
    const [myTodo, setMyTodo] = useState<any | null>([]);
    
    const [user, setUser] = useState<any | null>("");
    
    const addTodo = async (e:any) => {
        e.preventDefault();
        await setDoc(doc(dbReff, user.uid), {todos:[...myTodo, text]})
        setMyTodo([...myTodo, text]);
        setText("");
    }

    
    const getData = () =>{
        getDocs(dbReff)
        .then((res: any)=>{
            let data = res.docs[0]._document.data.value.mapValue.fields.todos.arrayValue.values
            
            data.forEach((doc:any) => (
                console.log(`${doc.stringValue}`)
                ));
        })
        .catch(()=>alert('error home.tsx'))
    }
    getData()

    useEffect(() =>{
        onAuthStateChanged(auth, user => {
            if(user) setUser(user);
            else setUser(null);
        })
    },[])
    

    return (
        <>  
            <Navbar />
            <div className="container text-center my-4">
                <h1>Home Page</h1><hr className="my-4"/>
                <h1>Add Todos (Firebase / Firestore)</h1>
                <div className="row my-4">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    <form className="form form-control p-4">
                        <div className="mb-3">
                            <label htmlFor="todoText" className="form-label"><strong>Todo Detail</strong></label>
                            <input value={text} onChange={(e)=>setText(e.target.value)} type="text" className="form-control" id="todoText" name="todoText" autoComplete="off" />
                        </div>
                        <button onClick={(e)=>addTodo(e)} type="button" className="btn btn-dark" style={{width: '20%'}}>Add</button>
                    </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
}
