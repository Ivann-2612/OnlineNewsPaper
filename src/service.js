import axios from 'axios'

const KEY = 'ac157cacb088432180276283ed13c3c9'

const TOP_NEWS_US = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${KEY}`
const TOP_NEWS_GB = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${KEY}`
const ALL_TOP_NEWS = `https://newsapi.org/v2/top-headlines/sources?apiKey=${KEY}`
const ALL_SOURCES = `https://newsapi.org/v2/top-headlines/sources?apiKey=${KEY}`


export const gettAllTopNews = () => {
    return axios.get(ALL_TOP_NEWS)
}

export const getTopUSNews = () =>  {
    return axios.get(TOP_NEWS_US)
}
export const getTopGBNews = () =>  {
    return axios.get(TOP_NEWS_GB)
}
export const getAllSources = () =>  {
    return axios.get(ALL_SOURCES)
}