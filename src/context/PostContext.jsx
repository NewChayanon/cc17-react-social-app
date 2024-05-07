/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import * as postAPI from "../apis/postApi"

export const PostContext = createContext()

export default function PostContextProvider({ children }) {
    const [post, setPost] = useState({})
    useEffect(() => {
        getAllPost()
    }, [])
    const getAllPost = async () => {
        try {
            const respones = await postAPI.getAllPost()
            console.log(respones.data)
            setPost(respones.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <PostContext.Provider value={{ post: post }}>
            {children}
        </PostContext.Provider>
    )
}