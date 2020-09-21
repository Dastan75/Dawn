// import { authHeader } from '../_helpers';
import axios from 'axios';
import { getToken } from '../_helpers';

// const apiUrl = 'https://gold-bond-287007.ew.r.appspot.com'
const apiUrl = 'http://localhost:1337'


const getUserById = async(userId) => {
  try {
    const reqReturn = await axios({
      method: `get`,
      url: `${apiUrl}/user/${userId}`,
    })
    return reqReturn.data
  }
  catch (error) {
    return null;
  }
}

const getProjectById = async(projectId) => {
  try {
    const reqReturn = await axios({
      method: `get`,
      url: `${apiUrl}/project/${projectId}`,
    })
    return reqReturn.data
  }
  catch (error) {
    return null;
  }
}

const getCompanyById = async(companyId) => {
  try {
    const reqReturn = await axios({
      method: `get`,
      url: `${apiUrl}/company/${companyId}`,
    })
    return reqReturn.data
  }
  catch (error) {
    return null;
  }
}

const getTeamById = async(teamId) => {
  try {
    const reqReturn = await axios({
      method: `get`,
      url: `${apiUrl}/team/${teamId}`,
    })
    return reqReturn.data
  }
  catch (error) {
    return null;
  }
}

const createTaskCat = async(data) => {
  try {
    const reqReturn = await axios({
      method: `post`,
      url: `${apiUrl}/taskcategory`,
      data,
    })
    return reqReturn.data
  }
  catch (error) {
    return null;
  }
}

const createTask = async(data) => {
  try {
    const reqReturn = await axios({
      method: `post`,
      url: `${apiUrl}/task`,
      data,
    })
    return reqReturn.data
  }
  catch (error) {
    return null;
  }
}

const updateTaskCat = async(data, taskCatId) => {
  try {
    const reqReturn = await axios({
      method: `patch`,
      url: `${apiUrl}/taskcategory/${taskCatId}`,
      data,
    })
    return reqReturn.data
  }
  catch (error) {
    return null;
  }
}

const updateTask = async(data, taskId) => {
  try {
    const reqReturn = await axios({
      method: `patch`,
      url: `${apiUrl}/task/${taskId}`,
      data,
    })
    return reqReturn.data
  }
  catch (error) {
    return null;
  }
}

const createProject = async(data) => {
  try {
    const reqReturn = await axios({
      method: `post`,
      url: `${apiUrl}/project`,
      data,
    })
    return reqReturn.data
  }
  catch (error) {
    return null;
  }
}

const loginUser = async(data) => {
  try {
    const reqReturn = await axios({
      method: `post`,
      url: `${apiUrl}/auth/getToken`,
      data,
    })
    return reqReturn.data
  }
  catch (error) {
    return null;
  }
}

const createEvent = async(data) => {
  try {
    const reqReturn = await axios({
      method: `post`,
      url: `${apiUrl}/event`,
      data,
    })
    return reqReturn.data
  }
  catch (error) {
    return null;
  }
}

const getEvent = async(data) => {
  try {
    const reqReturn = await axios({
      method: `get`,
      url: `${apiUrl}/event`,
      data,
    })
    return reqReturn.data
  }
  catch (error) {
    return null;
  }
}

const getTasks = async(userId) => {
  try {
    const reqReturn = await axios({
      method: `get`,
      url: `${apiUrl}/task/myTasks?userId=${userId}`,
    })
    return reqReturn.data
  }
  catch (error) {
    return null;
  }
}



export const userService = {
    getUserById,
    getCompanyById,
    getTeamById,
    getProjectById,
    createTaskCat,
    createTask,
    updateTaskCat,
    updateTask,
    createProject,
    loginUser,
    createEvent,
    getEvent,
    getTasks
};