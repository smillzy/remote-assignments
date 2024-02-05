package com.remoteassignment.assignmentthree.repository;

import com.remoteassignment.assignmentthree.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepo extends CrudRepository<User, Integer>{  // <entityClass, idDataType>
    User findByEmailAndPassword(String email, String password);

}
