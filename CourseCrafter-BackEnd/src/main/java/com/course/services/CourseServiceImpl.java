package com.course.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.course.dao.CourseDao;
import com.course.entities.Course;
@Service
public class CourseServiceImpl implements CourseService{

	@Autowired
	private CourseDao courseDao;
	
	@Override
	public List<Course> getCourse() {
		
		
		return this.courseDao.findAll();
	}

	@Override
	public Course getCourse(int id) {
		Optional<Course> byId = this.courseDao.findById(id);
		
		return byId.get();
	}

	@Override
	public Course addCourse(Course course) {
		this.courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		this.courseDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(int id) {
		
		this.courseDao.delete(courseDao.getById(id));
		
		
	}

}
