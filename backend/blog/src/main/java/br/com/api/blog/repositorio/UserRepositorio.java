package br.com.api.blog.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.blog.modelo.UserModelo;

@Repository
public interface UserRepositorio extends CrudRepository<UserModelo, Long>{
    UserModelo findByUsername(String username);
}
