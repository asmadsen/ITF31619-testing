import Axios from 'axios'

export const getPosts = async (axios = Axios) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const posts = response.data
  return {
    posts,
    count: posts.length,
    status: response.statusText
  }
}
