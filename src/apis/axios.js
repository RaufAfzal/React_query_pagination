import axios from "axios"

const BASEURL1 = 'https://jsonplaceholder.typicode.com'
const BASEURL2 = 'https://reqres.in/api'

export const axiosOne = axios.create({
    baseURL: BASEURL1
})

export const getPostsPage = async (pageParam = 1) => {
    const response = await axiosOne.get(`/posts?_page=${pageParam}`)
    return response.data
}

export const axiosTwo = axios.create({
    baseURL: BASEURL2
})

export const getUsersPage = async (pageParam = 1) => {
    const response = await axiosTwo.get(`/users?page=${pageParam}`)
    return response.data
}