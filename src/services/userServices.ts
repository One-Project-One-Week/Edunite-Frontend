import API from "@/api/apiConfig";
import {
  fetchAllDummyStudents,
  fetchAllDummyTeacher,
  fetchAllDummyUsers,
} from "./fetchDummy/fetchAllUsers";

export const getUserById = async (id: string) => {
  try {
    const response = await API.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await API.get("/users");
    return response.data;
  } catch (error) {
    const data = fetchAllDummyUsers();
    return data;
  }
};

export const getAllTeachers = async () => {
  try {
    const response = await API.get("/users/teachers");
    return response.data;
  } catch (error) {
    const data = fetchAllDummyTeacher();
    return data;
  }
};

export const getAllStudents = async () => {
  try {
    const response = await API.get("/users/students");
    return response.data;
  } catch (error) {
    const data = fetchAllDummyStudents();
    return data;
  }
};

export const getCoursesByUserId = async (userId: string) => {
  try {
    const response = await API.get(`/users/${userId}/courses`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching courses by user ID: ${error}`);
  }
};

export const createCourseByUserId = async (userId: string, courseData: any) => {
  try {
    const response = await API.post(`/users/${userId}/courses`, courseData);
    return response.data;
  } catch (error) {
    throw new Error(`Error creating course for user ID: ${error}`);
  }
};
