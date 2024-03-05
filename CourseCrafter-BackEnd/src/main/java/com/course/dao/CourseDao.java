package com.course.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.course.entities.Course;

public interface CourseDao  extends JpaRepository<Course, Integer>{

	
}
