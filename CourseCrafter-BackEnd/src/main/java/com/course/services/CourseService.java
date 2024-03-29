package com.course.services;

import java.util.List;


import com.course.entities.Course;


public interface CourseService {

	public List<Course> getCourse();
	
	public Course getCourse(int id);
	
	public Course addCourse(Course course);
	
	public Course updateCourse(Course course);
	
	public void deleteCourse(int id);
}
